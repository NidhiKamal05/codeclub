
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
// import { useNavigate } from "react-router-dom";
// // import { FloatingDockDemo } from "./Header";
// import { About } from "./About";

export const ParticleRing = () => {
  return (
    <div className="relative h-[80%] w-full mx-auto">
      {/* <FloatingDockDemo /> */}
      <Canvas
        camera={{
          position: [10, -7.5, -7.5],
        }}
        style={{ height: "100vh" }}
        className="bg-gray-900"
      >
        <OrbitControls maxDistance={30} minDistance={5} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
       
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium pointer-events-none flex justify-center items-center flex-col ">
       
       <h1 className="text-5xl">WITCODE</h1>
        
        <p className="text-3xl">Let's Play with bits</p>
        
        
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-300/20 text-white mx-auto text-center rounded-full" onClick={() => navigate("./About")}>
        <span className="bg-transparent">Get Started</span>
         
          </button>
        
         </div>
     
          
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing();