import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";

function Box() {
  const texture = useTexture("path/to/texture.jpg");
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Canvas className="w-full h-3/4">
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 1, 1]} intensity={1} />
        <Box />
        <OrbitControls />
      </Canvas>
      <motion.div
        className="text-center mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="text-gray-700 text-lg">
          혁신적인 아이디어를 검증하고 자금을 확보하여 사업을 성장시키세요.
        </p>
        <button className="btn btn-primary mt-5">지금 시작하기</button>
      </motion.div>
    </main>
  );
}

export default Home;
