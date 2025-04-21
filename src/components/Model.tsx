'use client';

import { useEffect } from 'react';
import { useThree, useFrame, Canvas } from '@react-three/fiber';
import { loadGLTFModel } from '../lib/model';
import { OrbitControls } from '@react-three/drei';

const Model = () => {
    const { scene } = useThree();

    useEffect(() => {
        loadGLTFModel(scene, '/models/dog.glb').catch((err: any) => console.error('Ошибка загрузки:', err));
    }, [scene]);

    useFrame(() => {
        const model = scene.getObjectByName('dog');
        if (model) {
            model.rotation.y += 0.005;
        }
    });

    return null;
};

const Scene = () => {
    return (
        <Canvas style={{ height: '470px' }} shadows camera={{ position: [6, 5, 6] }}>
            <ambientLight intensity={2} color={'#ffffff'} />

            <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

            <pointLight position={[10, 5, -5]} intensity={1.5} color={'#ffcc88'} />

            <pointLight position={[-10, 5, 5]} intensity={1.2} color={'#88ccff'} />

            <spotLight position={[0, -5, 5]} intensity={1} angle={0.3} penumbra={1} />

            <Model />
            <OrbitControls />
        </Canvas>
    );
};

export default Scene;
