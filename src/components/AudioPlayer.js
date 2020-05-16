import React from "react";
import styled from "styled-components";
import { useAudioPlayer } from "react-use-audio-player";
import { IoMdPause, IoMdPlay } from "react-icons/io";

const Button = styled.button`
  &:focus {
    outline: 0;
    outline-style: none;
  }

  min-width: 35px;
  min-height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

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
      <Button onClick={togglePlayPause}>
        {playing ? <IoMdPause /> : <IoMdPlay />}
      </Button>
    </div>
  );
};

export default AudioPlayer;
