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
          ...(window as unknown as {customColors:string[]}).customColors.map(e => {
            return new THREE.Color(e)
          })
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

