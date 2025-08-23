import React, { useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple Stars Component
const Stars = () => {
  const mesh = useRef();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const colors = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Random positions in a large sphere
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      
      // White stars with slight variation
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 1.0;
      colors[i * 3 + 2] = 1.0;
    }
    
    return [positions, colors];
  }, []);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0001;
      mesh.current.rotation.y += 0.0002;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={5000}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={5000}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.5}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

// Purple Nebula Glow
const NebulaGlow = () => {
  const mesh = useRef();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      // Clustered around center
      const radius = Math.random() * 800 + 200;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Purple nebula colors
      colors[i * 3] = 0.6 + Math.random() * 0.2; // R
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.2; // G
      colors[i * 3 + 2] = 0.9 + Math.random() * 0.1; // B (purple)
    }
    
    return [positions, colors];
  }, []);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0002;
      mesh.current.rotation.y += 0.0001;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={2000}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={4}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};



const GlowingStars = (props) => {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(1500), { radius: 2.2 })], []);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 18;
    ref.current.rotation.y -= delta / 12;
    ref.current.rotation.z += delta / 20;
  });

  return (
    <group rotation={[Math.PI / 8, 0, Math.PI / 12]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color='#A855F7'
          size={0.018}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={1.0}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const DistantGalaxy = (props) => {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(2500), { radius: 3.0 })], []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 45;
    ref.current.rotation.y += delta / 38;
    ref.current.rotation.z -= delta / 50;
  });

  return (
    <group rotation={[0, 0, Math.PI / 8]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color='#d8b4fe'
          size={0.0008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const CosmicDust = (props) => {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(4000), { radius: 1.8 })], []);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 60;
    ref.current.rotation.y -= delta / 45;
    ref.current.rotation.z += delta / 55;
  });

  return (
    <group rotation={[0, 0, Math.PI / 12]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color='#f3e8ff'
          size={0.0005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const GalaxyBackground = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full" 
      style={{ 
        pointerEvents: 'none',
        zIndex: -1,
        backgroundColor: '#000000' // Pitch black background
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ 
          alpha: true,
          antialias: false,
          powerPreference: "high-performance"
        }}
        style={{ 
          background: '#000000',
          pointerEvents: 'none' 
        }}
      >
        {/* Simple realistic galaxy elements */}
        <Stars />
        <NebulaGlow />
        <GlowingStars />
        <DistantGalaxy />
        <CosmicDust />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;
