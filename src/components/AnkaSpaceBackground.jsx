import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Subtle cosmic dust particles that float in space
const CosmicDust = () => {
  const particles = useRef();
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y += 0.0003;
      particles.current.rotation.x += 0.0001;
    }
  });

  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    // Create a sparse, wide distribution
    const distance = Math.random() * 50 + 15; // Keep particles at a distance
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    // Convert spherical to cartesian coordinates
    positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = distance * Math.cos(phi);
    
    // Subtle blue/purple tint for cosmic dust
    colors[i * 3] = 0.1 + Math.random() * 0.1; // Red
    colors[i * 3 + 1] = 0.1 + Math.random() * 0.1; // Green
    colors[i * 3 + 2] = 0.3 + Math.random() * 0.3; // Blue - stronger
  }
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Distant stars with subtle twinkling effect
const EnhancedStars = () => {
  const starsRef = useRef();
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      // Very subtle rotation
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });
  
  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0.5}
        fade
        speed={0.5}
      />
    </group>
  );
};

// Main background component
const AnkaSpaceBackground = () => {
  return (
    <div className="absolute w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'black' }}
        gl={{ antialias: true }}
      >
        {/* Ambient light for subtle illumination */}
        <ambientLight intensity={0.1} />
        
        {/* Distant blue point light to create depth */}
        <pointLight position={[10, 20, 30]} intensity={0.5} color="#0055ff" />
        
        {/* Subtle red accent light */}
        <pointLight position={[-30, -10, -20]} intensity={0.3} color="#ff5500" />
        
        {/* Stars and cosmic elements */}
        <EnhancedStars />
        <CosmicDust />
        
        {/* Subtle fog for depth */}
        <fog attach="fog" args={['#000000', 30, 90]} />
      </Canvas>
    </div>
  );
};

export default AnkaSpaceBackground;