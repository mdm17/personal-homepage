"use client"
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useMemo, useState } from "react";
import ThreeGlobe from "three-globe";
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { contentOnRight, useWideScreen } from "../_lib/stage";

const ReactThreeScene: React.FC = () => {
    const [globe, setglobe] = useState({})
    const pathname = usePathname();
    const wide = useWideScreen();
    const reduceMotion = useReducedMotion();
    const onLeft = wide && contentOnRight(pathname);
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
        }
    }, []);

    return (
        <motion.div
            className="globe-stage pointer-events-none fixed bottom-[-8vh] right-[-18vw] z-0 h-[58vh] w-[92vw] sm:right-[-8vw] sm:h-[64vh] lg:bottom-auto lg:right-auto lg:top-[8vh] lg:h-[88vh] lg:w-[min(52vw,760px)]"
            initial={false}
            animate={{
                left: onLeft ? "-6vw" : wide ? "calc(100vw - min(52vw, 760px) + 6vw)" : "auto",
            }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 70, damping: 18 }}
        >
            <Canvas className="pointer-events-auto" camera={useMemo(() => ({ position: [0, 0, 210] }), [])} scene={globe}>
                <OrbitControls enableZoom={false} dampingFactor={0.1} autoRotate={true} rotateSpeed={0.3} />
                <ambientLight intensity={Math.PI} />
                <directionalLight intensity={0.6 * Math.PI} />
            </Canvas>
        </motion.div>
    );

};

export default ReactThreeScene;
