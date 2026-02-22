import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const HelloWorld: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const floatY = Math.sin((frame / fps) * Math.PI * 1.2) * 24;

  const zoomIn = interpolate(frame, [0, 180], [1, 1.08], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const bounce = spring({
    frame,
    fps,
    config: {
      damping: 10,
      stiffness: 130,
      mass: 0.75,
    },
  });

  const magicalScale = zoomIn * interpolate(bounce, [0, 1], [0.82, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'radial-gradient(circle at 50% 30%, #9ED8FF 0%, #6A8FF8 45%, #6247D8 100%)',
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          filter: 'blur(56px)',
          opacity: opacity * 0.7,
        }}
      >
        <div
          style={{
            width: 420,
            height: 420,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 42%, rgba(255,255,255,0.04) 78%, rgba(255,255,255,0) 100%)',
          }}
        />
      </AbsoluteFill>

      <div
        style={{
          fontSize: 260,
          lineHeight: 1,
          transform: `translateY(${floatY}px) scale(${magicalScale})`,
          opacity,
          filter: 'drop-shadow(0 26px 36px rgba(16, 20, 50, 0.35))',
          textShadow:
            '0 0 24px rgba(255,255,255,0.9), 0 0 50px rgba(255,255,255,0.55), 0 0 90px rgba(255,255,255,0.3)',
        }}
      >
        🐎
      </div>
    </AbsoluteFill>
  );
};
