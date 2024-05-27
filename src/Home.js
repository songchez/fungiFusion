import React, { useRef, useEffect } from "react";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Stats } from "@react-three/drei";

extend({ Stats });

const InteractiveGeometry = React.memo(() => {
  const meshRef = useRef();
  const lineRef = useRef();
  const { camera } = useThree();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const texture = useLoader(THREE.TextureLoader, "/texture.jpg");

  useEffect(() => {
    camera.position.z = 500; // 원하는 위치로 설정

    const generateGeometry = () => {
      const triangles = 5000;
      const positions = new Float32Array(triangles * 3 * 3);
      const normals = new Float32Array(triangles * 3 * 3);
      const colors = new Float32Array(triangles * 3 * 3);

      const color = new THREE.Color();
      const n = 300,
        n2 = n / 2;
      const d = 60,
        d2 = d / 2;

      const pA = new THREE.Vector3();
      const pB = new THREE.Vector3();
      const pC = new THREE.Vector3();

      const cb = new THREE.Vector3();
      const ab = new THREE.Vector3();

      for (let i = 0; i < positions.length; i += 9) {
        const x = Math.random() * n - n2;
        const y = Math.random() * n - n2;
        const z = Math.random() * n - n2;

        const ax = x + Math.random() * d - d2;
        const ay = y + Math.random() * d - d2;
        const az = z + Math.random() * d - d2;

        const bx = x + Math.random() * d - d2;
        const by = y + Math.random() * d - d2;
        const bz = z + Math.random() * d - d2;

        const cx = x + Math.random() * d - d2;
        const cy = y + Math.random() * d - d2;
        const cz = z + Math.random() * d - d2;

        positions[i] = ax;
        positions[i + 1] = ay;
        positions[i + 2] = az;
        positions[i + 3] = bx;
        positions[i + 4] = by;
        positions[i + 5] = bz;
        positions[i + 6] = cx;
        positions[i + 7] = cy;
        positions[i + 8] = cz;

        pA.set(ax, ay, az);
        pB.set(bx, by, bz);
        pC.set(cx, cy, cz);

        cb.subVectors(pC, pB);
        ab.subVectors(pA, pB);
        cb.cross(ab);
        cb.normalize();

        const nx = cb.x;
        const ny = cb.y;
        const nz = cb.z;

        normals[i] = nx;
        normals[i + 1] = ny;
        normals[i + 2] = nz;
        normals[i + 3] = nx;
        normals[i + 4] = ny;
        normals[i + 5] = nz;
        normals[i + 6] = nx;
        normals[i + 7] = ny;
        normals[i + 8] = nz;

        const vx = x / n + 0.5;
        const vy = y / n + 0.5;
        const vz = z / n + 0.5;

        color.setRGB(vx, vy, vz);

        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
        colors[i + 3] = color.r;
        colors[i + 4] = color.g;
        colors[i + 5] = color.b;
        colors[i + 6] = color.r;
        colors[i + 7] = color.g;
        colors[i + 8] = color.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.computeBoundingSphere();

      return geometry;
    };

    const geometry = generateGeometry();
    meshRef.current.geometry = geometry;

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(4 * 3), 3)
    );
    if (lineRef.current) {
      lineRef.current.geometry = lineGeometry;
    }
  }, [camera.position]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(meshRef.current);

      if (intersects.length > 0) {
        const intersect = intersects[0];
        const face = intersect.face;

        if (lineRef.current) {
          const linePosition = lineRef.current.geometry.attributes.position;
          const meshPosition = meshRef.current.geometry.attributes.position;

          linePosition.copyAt(0, meshPosition, face.a);
          linePosition.copyAt(1, meshPosition, face.b);
          linePosition.copyAt(2, meshPosition, face.c);
          linePosition.copyAt(3, meshPosition, face.a);

          lineRef.current.visible = true;
        }
      } else if (lineRef.current) {
        lineRef.current.visible = false;
      }
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <meshPhongMaterial
          color={0xaaaaaa}
          specular={0xffffff}
          shininess={250}
          side={THREE.DoubleSide}
          vertexColors={true}
          map={texture}
        />
      </mesh>
      <line ref={lineRef}>
        <lineBasicMaterial color={0xffffff} transparent={true} />
      </line>
      <OrbitControls enableZoom={false} />
    </>
  );
});

function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-xl">
          혁신적인 아이디어를 검증하고 자금을 확보하여 사업을 성장시키세요.
        </h1>
      </div>
      <Canvas style={{ width: "30vw", height: "30vw" }}>
        <ambientLight intensity={5} />
        <directionalLight position={[2, 1, 1]} intensity={1.5} />
        <directionalLight position={[0, -1, 0]} intensity={4.5} />
        <InteractiveGeometry />
      </Canvas>
      <button className="btn btn-primary mt-5">지금 시작하기</button>
    </main>
  );
}

export default Home;
