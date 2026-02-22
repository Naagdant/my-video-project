import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="RemotionHelloWorld"
        component={HelloWorld}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
