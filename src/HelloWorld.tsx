import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
      }}
    >
      <div
        style={{
          fontSize: 140,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 700,
          color: '#FFFFFF',
          opacity,
        }}
      >
        Hello Kapil
      </div>
    </AbsoluteFill>
  );
};
