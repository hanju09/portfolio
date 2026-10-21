"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NETWORK_COUNT = 120; // Increased network nodes
const DUST_COUNT = 400;    // New layer of floating particles
const MAX_DISTANCE = 4.5;
const FIELD_SIZE = 16;

function Particles() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // 1. Network Particles (Connected by lines)
  const networkParticles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < NETWORK_COUNT; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * FIELD_SIZE,
          (Math.random() - 0.5) * FIELD_SIZE,
          (Math.random() - 0.5) * FIELD_SIZE
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        ),
      });
    }
    return arr;
  }, []);

  // 2. Dust Particles (Just floating, no lines)
  const dustParticles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < DUST_COUNT; i++) {
      arr.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * FIELD_SIZE * 1.5,
          (Math.random() - 0.5) * FIELD_SIZE * 1.5,
          (Math.random() - 0.5) * FIELD_SIZE * 1.5
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005
        ),
      });
    }
    return arr;
  }, []);

  const networkPoints = useMemo(() => new Float32Array(NETWORK_COUNT * 3), []);
  const networkLines = useMemo(() => new Float32Array(NETWORK_COUNT * NETWORK_COUNT * 6), []);
  const dustPoints = useMemo(() => new Float32Array(DUST_COUNT * 3), []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useFrame(() => {
    // Update Network Particles & Lines
    for (let i = 0; i < networkParticles.length; i++) {
      const p = networkParticles[i];
      p.position.add(p.velocity);

      if (Math.abs(p.position.x) > FIELD_SIZE / 2) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > FIELD_SIZE / 2) p.velocity.y *= -1;

      networkPoints[i * 3] = p.position.x;
      networkPoints[i * 3 + 1] = p.position.y;
      networkPoints[i * 3 + 2] = p.position.z;
    }

    let lineIndex = 0;
    for (let i = 0; i < networkParticles.length; i++) {
      for (let j = i + 1; j < networkParticles.length; j++) {
        const dist = networkParticles[i].position.distanceTo(networkParticles[j].position);
        if (dist < MAX_DISTANCE) {
          networkLines[lineIndex++] = networkParticles[i].position.x;
          networkLines[lineIndex++] = networkParticles[i].position.y;
          networkLines[lineIndex++] = networkParticles[i].position.z;
          networkLines[lineIndex++] = networkParticles[j].position.x;
          networkLines[lineIndex++] = networkParticles[j].position.y;
          networkLines[lineIndex++] = networkParticles[j].position.z;
        }
      }
    }

    // Update Dust Particles
    for (let i = 0; i < dustParticles.length; i++) {
      const p = dustParticles[i];
      p.position.add(p.velocity);

      if (Math.abs(p.position.x) > FIELD_SIZE * 0.75) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > FIELD_SIZE * 0.75) p.velocity.y *= -1;

      dustPoints[i * 3] = p.position.x;
      dustPoints[i * 3 + 1] = p.position.y;
      dustPoints[i * 3 + 2] = p.position.z;
    }

    // Mouse movement rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += (mouse.current.x * 0.15 - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x += (-mouse.current.y * 0.15 - groupRef.current.rotation.x) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Dots */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[networkPoints, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#4f46e5" size={0.12} sizeAttenuation transparent opacity={0.7} />
      </points>

      {/* Network Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[networkLines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#94a3b8" transparent opacity={0.2} />
      </lineSegments>

      {/* Floating Dust Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dustPoints, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#818cf8" size={0.04} sizeAttenuation transparent opacity={0.5} />
      </points>
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
        camera={{ position: [0, 0, 14], fov: 60 }} 
        gl={{ alpha: true, antialias: true }} 
        style={{ pointerEvents: 'none' }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}