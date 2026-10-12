"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 180;
const MAX_DISTANCE = 3.5;
const FIELD_SIZE = 14;

type Particle = {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  baseSize: number;
};

function ParticleNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  const particles = useMemo<Particle[]>(() => {
    const arr: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * FIELD_SIZE,
          (Math.random() - 0.5) * FIELD_SIZE,
          (Math.random() - 0.5) * FIELD_SIZE
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008,
          (Math.random() - 0.5) * 0.008
        ),
        baseSize: 0.03 + Math.random() * 0.05,
      });
    }
    return arr;
  }, []);

  const pointPositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * 3),
    []
  );

  const pointSizes = useMemo(
    () => new Float32Array(PARTICLE_COUNT),
    []
  );

  const linePositions = useMemo(
    () => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6),
    []
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.x = x;
      mouse.current.y = y;
      targetRotation.current.x = -y * 0.5;
      targetRotation.current.y = x * 0.5;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.position.add(p.velocity);

      // Gentle boundary bounce
      if (Math.abs(p.position.x) > FIELD_SIZE / 2) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > FIELD_SIZE / 2) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > FIELD_SIZE / 2) p.velocity.z *= -1;

      // Subtle breathing effect
      const breathing = Math.sin(t * 0.4 + i) * 0.0015;
      p.position.y += breathing;

      pointPositions[i * 3] = p.position.x;
      pointPositions[i * 3 + 1] = p.position.y;
      pointPositions[i * 3 + 2] = p.position.z;

      pointSizes[i] = p.baseSize * (1 + Math.sin(t * 0.8 + i * 0.5) * 0.15);
    }

    if (pointsRef.current) {
      const geo = pointsRef.current.geometry;
      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(pointPositions, 3)
      );
      geo.setAttribute("size", new THREE.BufferAttribute(pointSizes, 1));
      geo.attributes.position.needsUpdate = true;
    }

    // Build lines
    let lineIndex = 0;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = particles[i].position.distanceTo(particles[j].position);
        if (dist < MAX_DISTANCE) {
          linePositions[lineIndex++] = particles[i].position.x;
          linePositions[lineIndex++] = particles[i].position.y;
          linePositions[lineIndex++] = particles[i].position.z;
          linePositions[lineIndex++] = particles[j].position.x;
          linePositions[lineIndex++] = particles[j].position.y;
          linePositions[lineIndex++] = particles[j].position.z;
        }
      }
    }

    if (linesRef.current) {
      const geo = linesRef.current.geometry;
      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions.slice(0, lineIndex), 3)
      );
      geo.attributes.position.needsUpdate = true;
    }

    // Smooth mouse-based rotation (lerp)
    if (groupRef.current) {
      groupRef.current.rotation.x +=
        (targetRotation.current.x - groupRef.current.rotation.x) * 0.03;
      groupRef.current.rotation.y +=
        (targetRotation.current.y - groupRef.current.rotation.y) * 0.03;

      // Slow automatic drift
      groupRef.current.rotation.y += Math.sin(t * 0.05) * 0.0003;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[pointSizes, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#22d3ee"
          size={0.08}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#22d3ee" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}