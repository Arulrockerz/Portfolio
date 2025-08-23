import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

const Blackhole = () => {
  const mesh = useRef();
  const material = useRef();

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.rotation.z = clock.getElapsedTime() / 2;
    }
    if (material.current) {
      material.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const shaderMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#ff0000') },
    },
    vertexShader: `
      uniform float uTime;
      varying float vDistance;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        float angle = atan(modelPosition.y, modelPosition.x);
        float distance = length(modelPosition.xy);
        float new_x = distance * cos(angle + distance * 0.2 * uTime);
        float new_y = distance * sin(angle + distance * 0.2 * uTime);
        modelPosition.x = new_x;
        modelPosition.y = new_y;
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
        vDistance = distance;
        gl_PointSize = (10.0 / distance) ;
      }
    `,
    fragmentShader: `
      varying float vDistance;
      void main() {
        float alpha = smoothstep(1.0, 0.0, vDistance * 0.1);
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
  }), []);

  const particles = useMemo(() => {
    const positions = new Float32Array(10000 * 3);
    for (let i = 0; i < 10000; i++) {
      const distance = Math.sqrt(Math.random()) * 10;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = distance * Math.cos(angle);
      positions[i * 3 + 1] = distance * Math.sin(angle);
      positions[i * 3 + 2] = 0;
    }
    return positions;
  }, []);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={10000}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <primitive object={shaderMaterial} ref={material} />
    </points>
  );
};

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.2 })], []);
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const BlackholeBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ pointerEvents: 'none', zIndex: -1, backgroundColor: '#000000' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars />
        <Blackhole />
      </Canvas>
    </div>
  );
};

export default BlackholeBackground;
