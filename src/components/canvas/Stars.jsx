import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#60a5fa" // Realistic blue star color
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <>
      {/* Enhanced Nebula background with realistic space theme */}
      <div
        className="w-full h-auto absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ 
          background: `
            radial-gradient(ellipse 1200px 600px at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse 1000px 500px at 80% 70%, rgba(30, 58, 138, 0.12) 0%, transparent 65%),
            radial-gradient(ellipse 800px 400px at 50% 50%, rgba(190, 24, 93, 0.08) 0%, transparent 60%)
          `
        }}
      ></div>

      {/* Starfield 3D canvas */}
      <div className="w-full h-auto absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </>
  );
};

export default StarsCanvas;
