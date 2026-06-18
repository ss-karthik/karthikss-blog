import { Play, VolumeX, Pause, Volume2 } from 'lucide-react';
import React, {useState} from 'react'
import ReactPlayer from 'react-player/youtube'


const MusicPlayer = ({earworm}) => {
    const [playstate, setPlaystate] = useState(false);
    const [mute, setMute] = useState(false);
    const [progress, setProgress] = useState(0);

    const handlePlayPause = () => {
        setPlaystate(!playstate);
    };

    const handleMuting = () => {
        setMute(!mute);
    };

    const handleProgress = (state) => {
        const { played } = state;
            setProgress(played);
    };

  return (
    <div className='flex flex-col justify-center items-center gap-3 py-5'>
        <div className='text-xl text-[#fb4934]'>{earworm.title}</div>
        <div className='text-l text-[#fe8019]'>{earworm.artists}</div>
        <ReactPlayer url={earworm.url} width={0} height={0} playing={playstate} muted={mute} 
            onProgress={handleProgress}
        />
         <input 
                type="range" 
                min={0} 
                max={1} 
                step={0.01} 
                className='w-64'
                value={progress}
                
            />
        <div className='flex justify-center gap-5'>
            <button onClick={handlePlayPause}>
                {playstate ? (<Pause />) : (<Play/>) }
            </button>
            <button onClick={handleMuting}>
                {mute ? (<VolumeX />) : (<Volume2/>) }
            </button>
        </div>
    </div>
  )
}

export default MusicPlayer