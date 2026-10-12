"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 15000;
const SHAPE_COUNT = 5;

function buildSphere(radius: number) {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const y = 1 - (i / (PARTICLE_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    arr[i * 3] = Math.cos(t) * r * radius;
    arr[i * 3 + 1] = y * radius;
    arr[i * 3 + 2] = Math.sin(t) * r * radius;
  }
  return arr;
}

function buildWave() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  const cols = 122;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = (i % cols) / cols - 0.5;
    const z = Math.floor(i / cols) / (PARTICLE_COUNT / cols) - 0.5;
    arr[i * 3] = x * 14;
    arr[i * 3 + 1] = Math.sin(x * 6) * 1.8 + Math.cos(z * 6) * 1.2;
    arr[i * 3 + 2] = z * 9;
  }
  return arr;
}

function buildHelix() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const t = i / PARTICLE_COUNT;
    const angle = t * Math.PI * 10;
    const radius = 3.2;
    arr[i * 3] = Math.cos(angle) * radius;
    arr[i * 3 + 1] = (t - 0.5) * 14;
    arr[i * 3 + 2] = Math.sin(angle) * radius;
  }
  return arr;
}

function buildTorus() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  const R = 4;
  const r = 1.6;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const u = (i / PARTICLE_COUNT) * Math.PI * 2 * 10;
    const v = (i * 3.7) % (Math.PI * 2);
    arr[i * 3] = (R + r * Math.cos(v)) * Math.cos(u);
    arr[i * 3 + 1] = r * Math.sin(v);
    arr[i * 3 + 2] = (R + r * Math.cos(v)) * Math.sin(u);
  }
  return arr;
}

function buildCube() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  const size = 3.5;
  const perEdge = Math.floor(PARTICLE_COUNT / 12);
  let idx = 0;
  const corners = [
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  for (const [a, b] of edges) {
    const A = corners[a];
    const B = corners[b];
    for (let i = 0; i < perEdge && idx < PARTICLE_COUNT; i++, idx++) {
      const t = i / perEdge;
      arr[idx * 3] = (A[0] * (1 - t) + B[0] * t) * size;
      arr[idx * 3 + 1] = (A[1] * (1 - t) + B[1] * t) * size;
      arr[idx * 3 + 2] = (A[2] * (1 - t) + B[2] * t) * size;
    }
  }
  for (; idx < PARTICLE_COUNT; idx++) {
    arr[idx * 3] = (Math.random() - 0.5) * size * 2;
    arr[idx * 3 + 1] = (Math.random() - 0.5) * size * 2;
    arr[idx * 3 + 2] = (Math.random() - 0.5) * size * 2;
  }
  return arr;
}

function Sphere({
  mouse,
  scroll,
}: {
  mouse: { x: number; y: number };
  scroll: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const shapes = useMemo(() => {
    return [
      buildSphere(3.50),
      buildWave(),
      buildHelix(),
      buildTorus(),
      buildCube(),
    ];
  }, []);

  const colors = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    const pink = new THREE.Color("#ec4899");
    const purple = new THREE.Color("#8b5cf6");
    const cyan = new THREE.Color("#22d3ee");
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = (i / PARTICLE_COUNT) % 1;
      let c: THREE.Color;
      if (t > 0.5) c = purple.clone().lerp(pink, (t - 0.5) * 2);
      else c = cyan.clone().lerp(purple, t * 2);
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, []);

  const positions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * 3),
    []
  );

  const initialized = useRef(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    const scrollProgress = scroll / 800;
    const shapeIndex = Math.min(
      Math.floor(scrollProgress),
      SHAPE_COUNT - 2
    );
    const localT = Math.min(Math.max(scrollProgress - shapeIndex, 0), 1);

    const fromShape = shapes[shapeIndex];
    const toShape = shapes[shapeIndex + 1];
    const smooth = localT * localT * (3 - 2 * localT);

    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      positions[i] = fromShape[i] * (1 - smooth) + toShape[i] * smooth;
    }

    if (pointsRef.current) {
      const geo = pointsRef.current.geometry;
      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geo.attributes.position.needsUpdate = true;

      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.size = 0.07 + Math.sin(t * 1.5) * 0.01;
    }

    if (groupRef.current) {
      const autoX = Math.sin(t * 0.25) * 2;
      const autoY = Math.cos(t * 0.18) * 1.5;

      const targetX = 3.5 + mouse.x * 2 + autoX;
      const targetY = 0.5 + mouse.y * 1.5 + autoY;

      if (!initialized.current) {
        groupRef.current.position.x = 3.5;
        groupRef.current.position.y = 0.5;
        initialized.current = true;
      } else {
        groupRef.current.position.x +=
          (targetX - groupRef.current.position.x) * 0.05;
        groupRef.current.position.y +=
          (targetY - groupRef.current.position.y) * 0.05;
      }

      groupRef.current.rotation.y = t * 0.15 + scroll * 0.0008;
      groupRef.current.rotation.x =
        Math.sin(t * 0.3) * 0.2 + scroll * 0.0004;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function ParticleSphere() {
  const [mounted, setMounted] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const [state, setState] = useState({
    mouse: { x: 0, y: 0 },
    scroll: 0,
  });

  useEffect(() => {
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    let raf = 0;
    const loop = () => {
      setState({
        mouse: { ...mouseRef.current },
        scroll: scrollRef.current,
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Sphere mouse={state.mouse} scroll={state.scroll} />
      </Canvas>
    </div>
  );
}