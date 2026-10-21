"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 120;
const MAX_DISTANCE = 3.5;
const FIELD_SIZE = 8;

function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate static node positions
  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      // Distribute points in a sphere
      const u = Math.random();
      const v = Math.random();
      const w = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(w) * (FIELD_SIZE / 2);

      arr.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }
    return arr;
  }, []);

  // Pre-calculate point positions
  const pointPositions = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    nodes.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [nodes]);

  // Pre-calculate lines between nearby nodes
  const linePositions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < MAX_DISTANCE) {
          arr.push(nodes[i].x, nodes[i].y, nodes[i].z);
          arr.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    return new Float32Array(arr);
  }, [nodes]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Slow, constant rotation
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      groupRef.current.rotation.z = Math.cos(t * 0.15) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#4f46e5" // Indigo
          size={0.12}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      {/* Connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#94a3b8" // Slate gray
          transparent
          opacity={0.3}
        />
      </lineSegments>
    </group>
  );
}

export default function ArchitectureSimulation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full">
       <Canvas camera={{ position: [0, 0, 10], fov: 50 }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]} style={{ pointerEvents: 'none' }}>
        <NetworkGraph />
      </Canvas>
    </div>
  );
}