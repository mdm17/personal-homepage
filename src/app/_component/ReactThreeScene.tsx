"use client"
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useMemo, useState } from "react";
import ThreeGlobe from "three-globe";
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import { usePathname } from "next/navigation";

const ReactThreeScene: React.FC = () => {
    const [globe, setglobe] = useState({})
    const router = usePathname();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const N = 20;
            const arcsData = [...Array(N).keys()].map(() => ({
                startLat: (Math.random() - 0.5) * 180,
                startLng: (Math.random() - 0.5) * 360,
                endLat: (Math.random() - 0.5) * 180,
                endLng: (Math.random() - 0.5) * 360,
                color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
            }));

            const myGlobe = new ThreeGlobe()
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
                .arcsData(arcsData)
                .arcColor('color')
                .arcDashLength(() => Math.random())
                .arcDashGap(() => Math.random())
                .arcDashAnimateTime(() => Math.random() * 4000 + 500);
            const scene = new THREE.Scene();
            scene.add(myGlobe);
            setglobe(scene)
        }
    }, [router]);

    return (
        <div className="h-3/4 w-full xl:w-2/6 -bottom-64 xl:bottom-0 absolute">
            <Canvas camera={useMemo(() => ({ position: [0, 0, 250] }), [])} scene={globe}>
                <OrbitControls enableZoom={false} dampingFactor={0.1} autoRotate={true} rotateSpeed={0.3} />
                <ambientLight intensity={Math.PI} />
                <directionalLight intensity={0.6 * Math.PI} />
            </Canvas>
        </div>
    );

};

export default ReactThreeScene;
