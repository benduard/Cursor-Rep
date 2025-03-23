import { TypeAnimation } from 'react-type-animation';

export function TypewriterTitle() {
  return (
    <TypeAnimation
      sequence={[
        'Ruben Valderrama',
        () => {},
      ]}
      wrapper="h1"
      cursor={true}
      repeat={0}
      speed={50}
      className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6 text-white font-mono"
      style={{
        display: 'inline-block',
        textShadow: '0 0 20px rgba(147,51,234,0.5)',
      }}
    />
  );
}