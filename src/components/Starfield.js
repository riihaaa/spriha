import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Starfield = () => (
  <Canvas
    style={{ position: 'fixed', inset: 0, zIndex: -1 }}
    camera={{ position: [0, 0, 1] }}
  >
    <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
  </Canvas>
);

export default Starfield;

