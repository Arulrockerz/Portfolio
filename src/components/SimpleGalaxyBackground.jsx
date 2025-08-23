import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Realistic 3D Stars Component
const Stars = ({ count = 12000 }) => {
  const mesh = useRef();
  
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Random positions in a large sphere with more realistic distribution
      const distance = Math.pow(Math.random(), 2) * 2500; // Concentrated toward center
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = distance * Math.cos(phi);
      
      // Realistic star colors (from red to blue-white)
      const colorType = Math.random();
      if (colorType < 0.1) { // Red stars (cooler)
        colors[i * 3] = 1.0; // R
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.3; // G
        colors[i * 3 + 2] = 0.5; // B
      } else if (colorType < 0.3) { // Yellow stars
        colors[i * 3] = 1.0; // R
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1; // G
        colors[i * 3 + 2] = 0.7; // B
      } else if (colorType < 0.8) { // White stars
        const intensity = 0.8 + Math.random() * 0.2;
        colors[i * 3] = intensity; // R
        colors[i * 3 + 1] = intensity; // G
        colors[i * 3 + 2] = intensity; // B
      } else { // Blue stars (hotter)
        colors[i * 3] = 0.8 + Math.random() * 0.2; // R
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2; // G
        colors[i * 3 + 2] = 1.0; // B
      }
      
      // More realistic star sizes (mostly small with a few bright ones)
      const sizeFactor = Math.random();
      if (sizeFactor > 0.995) { // Very bright stars (rare)
        sizes[i] = Math.random() * 5 + 3;
      } else if (sizeFactor > 0.95) { // Medium bright stars
        sizes[i] = Math.random() * 3 + 1.5;
      } else { // Most common small stars
        sizes[i] = Math.random() * 1.5 + 0.5;
      }
    }
    
    return [positions, colors, sizes];
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.0001;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.0002;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Realistic Nebula Particles
const NebulaParticles = ({ count = 5000 }) => {
  const mesh = useRef();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Create cloud-like nebula formations
      // Use multiple overlapping ellipsoids for more natural distribution
      let useCluster = Math.random() > 0.3;
      let radius, theta, phi;
      
      if (useCluster) {
        // Create clustered nebula regions
        const clusterIndex = Math.floor(Math.random() * 5); // 5 different nebula clusters
        const clusterCenters = [
          [500, 300, -200],  // Cluster 1 position
          [-600, -200, 400], // Cluster 2 position
          [0, -500, -300],   // Cluster 3 position
          [-300, 600, 100],  // Cluster 4 position
          [400, -100, 500]   // Cluster 5 position
        ];
        
        // Random position within the cluster
        const center = clusterCenters[clusterIndex];
        const clusterRadius = 300 + Math.random() * 200;
        radius = Math.random() * clusterRadius;
        theta = Math.random() * Math.PI * 2;
        phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = center[0] + radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = center[1] + radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = center[2] + radius * Math.cos(phi);
      } else {
        // Some scattered nebula particles
        radius = Math.random() * 1200 + 300;
        theta = Math.random() * Math.PI * 2;
        phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
      
      // Realistic nebula colors (mix of reds, blues, and purples)
      const nebulaType = Math.random();
      if (nebulaType < 0.3) { // Red/pink nebula
        colors[i * 3] = 0.8 + Math.random() * 0.2; // R
        colors[i * 3 + 1] = 0.1 + Math.random() * 0.3; // G
        colors[i * 3 + 2] = 0.2 + Math.random() * 0.3; // B
      } else if (nebulaType < 0.6) { // Blue nebula
        colors[i * 3] = 0.1 + Math.random() * 0.2; // R
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // G
        colors[i * 3 + 2] = 0.7 + Math.random() * 0.3; // B
      } else { // Purple nebula
        colors[i * 3] = 0.4 + Math.random() * 0.3; // R
        colors[i * 3 + 1] = 0.0 + Math.random() * 0.2; // G
        colors[i * 3 + 2] = 0.6 + Math.random() * 0.4; // B
      }
    }
    
    return [positions, colors];
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.0003;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.0001;
      mesh.current.rotation.z = state.clock.elapsedTime * 0.0002;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={12}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.25}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Glowing Stars with enhanced effects
const GlowingStars = ({ count = 2000 }) => {
  const mesh = useRef();
  
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1500;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1500;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1500;
      
      // Bright purple-pink colors
      colors[i * 3] = 0.9 + Math.random() * 0.1;
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.3;
      colors[i * 3 + 2] = 1.0;
      
      sizes[i] = Math.random() * 5 + 2;
    }
    
    return [positions, colors, sizes];
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.0002;
      mesh.current.rotation.y = -state.clock.elapsedTime * 0.0001;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={4}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Dust Particles for added realism
const GalacticDust = ({ count = 8000 }) => {
  const mesh = useRef();
  
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    // Create a spiral galaxy shape
    for (let i = 0; i < count; i++) {
      // Spiral galaxy parameters
      const armCount = 5; // Number of spiral arms
      const armWidth = 0.5; // Width of the spiral arms
      const rotationFactor = 4; // How tightly wound the spiral is
      
      // Random distance from center (concentrated toward center)
      const distance = Math.pow(Math.random(), 0.5) * 1000 + 50;
      
      // Random angle, but adjusted to create spiral arms
      const angle = Math.random() * Math.PI * 2;
      const armOffset = (angle % (2 * Math.PI / armCount)) / (2 * Math.PI / armCount) - 0.5;
      
      // Apply spiral shape
      const spiralAngle = angle + rotationFactor * Math.log(distance / 50) / Math.log(1000 / 50);
      
      // Add some randomness to create the arm width
      const randomOffset = armWidth * (Math.random() - 0.5) * (1 - Math.exp(-distance / 500));
      
      // Calculate position
      positions[i * 3] = distance * Math.cos(spiralAngle + randomOffset);
      positions[i * 3 + 1] = (Math.random() - 0.5) * distance * 0.1; // Thin disk
      positions[i * 3 + 2] = distance * Math.sin(spiralAngle + randomOffset);
      
      // Dust colors (subtle browns, grays)
      const brightness = 0.3 + Math.random() * 0.2;
      colors[i * 3] = brightness + Math.random() * 0.1; // R
      colors[i * 3 + 1] = brightness * (0.8 + Math.random() * 0.2); // G
      colors[i * 3 + 2] = brightness * (0.7 + Math.random() * 0.2); // B
      
      // Small sizes for dust
      sizes[i] = Math.random() * 1.5 + 0.5;
    }
    
    return [positions, colors, sizes];
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.00005;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.00008;
      mesh.current.rotation.z = state.clock.elapsedTime * 0.00003;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.5}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Distant Galaxies
const DistantGalaxies = ({ count = 50 }) => {
  const mesh = useRef();
  
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Very distant positions
      const distance = 2000 + Math.random() * 1000;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = distance * Math.cos(phi);
      
      // Galaxy colors (various)
      const galaxyType = Math.random();
      if (galaxyType < 0.3) { // Yellowish
        colors[i * 3] = 0.9; // R
        colors[i * 3 + 1] = 0.8; // G
        colors[i * 3 + 2] = 0.6; // B
      } else if (galaxyType < 0.6) { // Bluish
        colors[i * 3] = 0.6; // R
        colors[i * 3 + 1] = 0.7; // G
        colors[i * 3 + 2] = 0.9; // B
      } else { // Whitish
        colors[i * 3] = 0.9; // R
        colors[i * 3 + 1] = 0.9; // G
        colors[i * 3 + 2] = 0.9; // B
      }
      
      // Galaxy sizes
      sizes[i] = Math.random() * 30 + 10;
    }
    
    return [positions, colors, sizes];
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.00002;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.00001;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={20}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const SimpleGalaxyBackground = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full" 
      style={{ 
        pointerEvents: 'none',
        zIndex: -1,
        backgroundColor: '#000000' // Darkest black background
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ 
          background: '#000000', // Ensure darkest black
          pointerEvents: 'none'
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
        frameloop="always"
      >
        {/* Enhanced lighting for realistic space glow */}
        <ambientLight intensity={0.05} color="#1a1a2e" />
        <pointLight position={[100, 100, 100]} intensity={0.8} color="#ffffff" distance={1000} />
        <pointLight position={[-500, -200, -300]} intensity={0.5} color="#4169e1" distance={800} />
        
        {/* Improved fog for depth perception */}
        <fog attach="fog" args={['#000000', 200, 3000]} />
        
        {/* Multiple realistic particle systems */}
        <Stars count={12000} />
        <NebulaParticles count={5000} />
        <GlowingStars count={2000} />
        <GalacticDust count={8000} />
        <DistantGalaxies count={50} />
      </Canvas>
    </div>
  );
};

export default SimpleGalaxyBackground;
