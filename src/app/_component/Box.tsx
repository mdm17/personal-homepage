"use client"
import { ThreeElements, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from 'three'
import ThreeGlobe from "three-globe";

export default function Box(props: ThreeElements['mesh']) {
    // const N = 20;
    // const arcsData = [...Array(N).keys()].map(() => ({
    //     startLat: (Math.random() - 0.5) * 180,
    //     startLng: (Math.random() - 0.5) * 360,
    //     endLat: (Math.random() - 0.5) * 180,
    //     endLng: (Math.random() - 0.5) * 360,
    //     color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
    // }));

    // const myGlobe = new ThreeGlobe()
    //     .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    //     .arcsData(arcsData)
    //     .arcColor('color')
    //     .arcDashLength(() => Math.random())
    //     .arcDashGap(() => Math.random())
    //     .arcDashAnimateTime(() => Math.random() * 4000 + 500);
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    return (
        <mesh
            // add={myGlobe}
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}