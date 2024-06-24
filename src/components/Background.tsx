import { useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { BACKGROUND_SHADERS } from '../lib/shaders/background';

export default function Background() {
  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uColor: {
        value: [
          new THREE.Color('#656AFB'),
          new THREE.Color('#E60000'),
          new THREE.Color('#12C0E7'),
          new THREE.Color('#000000'),
        ],
      },
    };
  }, []);

  useFrame(() => {
    uniforms.uTime.value += 0.00005;
  });

  return (
    <mesh>
      <planeGeometry args={[8, 8, 300, 300]} />
      <shaderMaterial
        vertexShader={BACKGROUND_SHADERS.vertex}
        fragmentShader={BACKGROUND_SHADERS.fragment}
        uniforms={uniforms}
      />
    </mesh>
  );
}
