import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function ViolentBlob() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.12;
    mesh.current.rotation.y = t * 0.18;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} scale={1.6}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#7c2bd9"
          emissive="#5b1ba8"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.6}
          distort={0.45}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

function HaloRing() {
  const ring = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ring.current) return;
    ring.current.rotation.z = clock.getElapsedTime() * 0.08;
  });
  return (
    <mesh ref={ring} position={[0, 0, -1.5]} rotation={[Math.PI / 2.2, 0, 0]}>
      <torusGeometry args={[2.6, 0.012, 16, 200]} />
      <meshBasicMaterial color="#b366ff" transparent opacity={0.35} />
    </mesh>
  );
}

export function HeroMesh() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#c084fc" />
        <pointLight position={[-5, -3, 2]} intensity={0.8} color="#7c2bd9" />
        <ViolentBlob />
        <HaloRing />
      </Canvas>
      {/* Soft vignette to blend into background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_85%)]" />
    </div>
  );
}
