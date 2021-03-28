import { useVol } from 'context/AppContext';
import sound from 'assets/sounds/adaytoremember.mp3';

const Audio: React.FC = () => {
  const muted = useVol();
  return <audio src={sound} autoPlay loop muted={muted.state.mute} />;
};

export default Audio;
