"use client"
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useMemo, useState } from "react";
import ThreeGlobe from "three-globe";
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import { usePathname } from "next/navigation";
import { contentOnRight } from "../_lib/stage";

const ReactThreeScene: React.FC = () => {
    const [globe, setglobe] = useState<THREE.Scene | null>(null)
    const pathname = usePathname();
    const onLeft = contentOnRight(pathname);
    const camera = useMemo(() => ({ position: [0, 0, 210] as [number, number, number] }), []);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
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
                .showAtmosphere(true)
                .atmosphereColor('#9ec9e8')
                .atmosphereAltitude(0.22)
                .arcsData(arcsData)
                .arcColor('color')
                .arcAltitude(0.25)
                .arcStroke(0.6)
                .arcDashLength(() => Math.random())
                .arcDashGap(() => Math.random())
                .arcDashAnimateTime(() => Math.random() * 4000 + 500);
            const scene = new THREE.Scene();
            scene.add(myGlobe);
            setglobe(scene);
            } catch (error) {
            console.error(error);
            }
        }
    }, []);

    return (
        <div
            className={`globe-stage pointer-events-none fixed bottom-[-8vh] right-[-18vw] z-0 w-[92vw] sm:right-[-8vw] lg:bottom-auto lg:right-auto ${onLeft ? "on-left" : ""}`}
        >
            {globe && (
            <Canvas
                className="pointer-events-auto h-full w-full"
                camera={camera}
                scene={globe}
            >
                <OrbitControls enableZoom={false} dampingFactor={0.1} autoRotate={true} rotateSpeed={0.3} />
                <ambientLight intensity={Math.PI} />
                <directionalLight intensity={0.6 * Math.PI} />
            </Canvas>
            )}
        </div>
    );

};

export default ReactThreeScene;
