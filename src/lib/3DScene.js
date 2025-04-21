"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Функция для создания частей тела
const Cube = ({ position, args, color }) => {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} roughness={1} metalness={0.1} />
    </mesh>
  );
};

const RotatingPanda = () => {
  const ref = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotationSpeed(0.005);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={ref}>
      <Panda />
      <Desk />
      <MacBook />
    </group>
  );
};

const Panda = () => {
  return (
    <group position={[0, -1, -2]} scale={[0.7, 0.7, 0.7]}>
      {/* Голова */}
      <Cube position={[0, 3, -0.1]} args={[2, 2, 2]} color="#ffffff" />

      {/* Уши */}
      <Cube position={[-1, 4, -0.5]} args={[0.8, 0.8, 0.8]} color="black" />
      <Cube position={[1, 4, -0.5]} args={[0.8, 0.8, 0.8]} color="black" />

      {/* Чёрные пятна вокруг глаз */}
      <Cube position={[-0.6, 3.3, 0.9]} args={[1, 1.2, 0.1]} color="black" />
      <Cube position={[0.6, 3.3, 0.9]} args={[1, 1.2, 0.1]} color="black" />

      {/* Белки глаз */}
      <Cube position={[-0.6, 3.4, 1]} args={[0.6, 0.6, 0.1]} color="#ffffff" />
      <Cube position={[0.6, 3.4, 1]} args={[0.6, 0.6, 0.1]} color="#ffffff" />

      {/* Зрачки */}
      <Cube position={[-0.6, 3.4, 1.05]} args={[0.3, 0.3, 0.1]} color="black" />
      <Cube position={[0.6, 3.4, 1.05]} args={[0.3, 0.3, 0.1]} color="black" />

      {/* Нос */}
      <Cube position={[0, 2.8, 1.1]} args={[0.5, 0.4, 0.4]} color="black" />

      {/* Рот */}
      <Cube position={[-0.4, 2.4, 1.05]} args={[0.8, 0.1, 0.1]} color="black" />
      <Cube position={[0.4, 2.4, 1.05]} args={[0.8, 0.1, 0.1]} color="black" />
      <Cube position={[0, 2.3, 1.05]} args={[0.4, 0.1, 0.1]} color="black" />

      {/* Тело */}
      <Cube position={[0, 1, 0]} args={[2.5, 3.5, 1.7]} color="#ffffff" />

      {/* Руки */}
      <Cube position={[-1.9, 1, 0]} args={[1, 2.5, 1]} color="black" />
      <Cube position={[1.9, 1, 0]} args={[1, 2.5, 1]} color="black" />

      {/* Лапки */}
      <Cube position={[-2.1, -0.2, 0.3]} args={[0.3, 0.3, 0.3]} color="black" />
      <Cube
        position={[-2.1, -0.2, -0.3]}
        args={[0.3, 0.3, 0.3]}
        color="black"
      />
      <Cube position={[2.1, -0.2, 0.3]} args={[0.3, 0.3, 0.3]} color="black" />
      <Cube position={[2.1, -0.2, -0.3]} args={[0.3, 0.3, 0.3]} color="black" />

      {/* Ноги */}
      <Cube position={[-0.7, -1.5, 0]} args={[1, 1.5, 1]} color="black" />
      <Cube position={[0.7, -1.5, 0]} args={[1, 1.5, 1]} color="black" />

      {/* Ступни */}
      <Cube position={[-0.7, -2.2, 0.3]} args={[0.8, 0.3, 1]} color="black" />
      <Cube position={[0.7, -2.2, 0.3]} args={[0.8, 0.3, 1]} color="black" />
    </group>
  );
};

const Desk = () => {
  return (
    <group position={[0, -1.2, 1]}>
      {/* Столешница */}
      <Cube position={[0, 0.3, 0]} args={[6, 0.3, 4]} color="#fc9" />
      {/* Ножки стола */}
      <Cube position={[-2.7, -0.7, 1.7]} args={[0.3, 2, 0.3]} color="#fc9" />
      <Cube position={[2.7, -0.7, 1.7]} args={[0.3, 2, 0.3]} color="#fc9" />
      <Cube position={[-2.7, -0.7, -1.7]} args={[0.3, 2, 0.3]} color="#fc9" />
      <Cube position={[2.7, -0.7, -1.7]} args={[0.3, 2, 0.3]} color="#fc9" />
    </group>
  );
};

const MacBook = () => {
  return (
    <group position={[0, -0.6, 1]}>
      <Cube position={[0, 0.2, 0]} args={[1.5, 0.1, 1]} color="gray" />
      <Cube position={[0, 0.7, 0.55]} args={[1.5, 1, 0.1]} color="black" />
    </group>
  );
};

const Scene = () => {
  return (
    <Canvas style={{ height: "50vh" }} shadows camera={{ position: [6, 4, 6] }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} castShadow />
      <RotatingPanda />
      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default Scene;
