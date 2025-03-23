import { TypeAnimation } from 'react-type-animation';

export function TypewriterTitle() {
  return (
    <div className="flex flex-col items-center">
      <TypeAnimation
        sequence={[
          'Ruben',
          () => {},
        ]}
        wrapper="h1"
        cursor={false}
        repeat={0}
        speed={50}
        className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-mono"
        style={{
          display: 'inline-block',
          textShadow: '0 0 20px rgba(147,51,234,0.5)',
        }}
      />
      <TypeAnimation
        sequence={[
          'Valderrama',
          () => {},
        ]}
        wrapper="h1"
        cursor={true}
        repeat={0}
        speed={50}
        className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-mono"
        style={{
          display: 'inline-block',
          textShadow: '0 0 20px rgba(147,51,234,0.5)',
        }}
      />
    </div>
  );
}