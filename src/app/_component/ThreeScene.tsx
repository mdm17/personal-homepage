"use client"
import { Canvas } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import Box from "./Box";
import ThreeGlobe from "three-globe";
import * as THREE from 'three';
import { TrackballControls } from "three/examples/jsm/Addons.js";

const ThreeScene: React.FC = () => {

    // return <Canvas>
    //     {/* <scene add={myGlobe} /> */}
    //     <ambientLight intensity={Math.PI / 2} />
    //     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
    //     <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    //     {/* <Box position={[-1.2, 0, 0]} />
    //     <Box position={[1.2, 0, 0]} /> */}
    // </Canvas>;

    const containerRef = useRef<HTMLDivElement>(null);
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
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current?.appendChild(renderer.domElement);
            const scene = new THREE.Scene();
            scene.add(myGlobe);
            scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
            scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));
            const camera = new THREE.PerspectiveCamera();
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            camera.position.z = 500;

            const tbControls = new TrackballControls(camera, renderer.domElement);
            tbControls.minDistance = 101;
            tbControls.rotateSpeed = 5;
            tbControls.zoomSpeed = 0.8;

            (function animate() { // IIFE
                // Frame cycle
                tbControls.update();
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            })();

            const handleResize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                renderer.setSize(width, height);
            };

            window.addEventListener('resize', handleResize);

            // Clean up the event listener when the component is unmounted
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);
    return <div ref={containerRef} />;

};

export default ThreeScene;
