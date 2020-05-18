import React from "react";
import StyledButton from "./Button";

import { useAudioPlayer } from "react-use-audio-player";
import { IoMdPause, IoMdPlay } from "react-icons/io";

const AudioPlayer = ({ file }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: false,
  });

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <div>
      <StyledButton variant="audio" onClick={togglePlayPause}>
        {playing ? <IoMdPause /> : <IoMdPlay />}
      </StyledButton>
    </div>
  );
};

export default AudioPlayer;
