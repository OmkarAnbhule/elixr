import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const ProceduralSphere = () => {
    return (
        <mesh>
            <sphereGeometry args={[2.2, 64, 64]} />
            <meshStandardMaterial
                metalness={1}
                roughness={0}
                clearcoat={1}
                clearcoatRoughness={0}
                envMapIntensity={1} // Enhance the effect of the environment map
            />
        </mesh>
    );
};

const CustomEnvironment = () => {
    const envMap = useLoader(THREE.TextureLoader, '/textures/image.png');
    envMap.mapping = THREE.EquirectangularReflectionMapping;

    return <Environment map={envMap} background={false} />;
};

export default function ThreeSphere() {
    return (
        <Canvas className="w-40 h-40">
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} intensity={2} />
            <CustomEnvironment />
            <ProceduralSphere />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={15} />
        </Canvas>
    );
}
