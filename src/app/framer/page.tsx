'use client';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('./FramerPage'), {
  ssr: false,
});

export default function Page() {
  return <Canvas />;
}
