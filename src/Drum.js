import React, { useState } from 'react';
import heater1 from './audio/Heater-1.mp3';
import heater2 from './audio/Heater-2.mp3';
import heater3 from './audio/Heater-3.mp3';
import heater4 from './audio/Heater-4.mp3';
import clap from './audio/clap.mp3';
import openH from './audio/open-hh.mp3';
import kickNhat from './audio/Kick_n_Hat.mp3';
import kick from './audio/kick.mp3';
import closedH from './audio/closed-hh.mp3';
import './App.css';

const Drum = () => {
  const audioClips = [
    {
        keyCode: 81, // Key code for 'Q'
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: heater1
      },
      {
        keyCode: 87, // Key code for 'W'
        keyTrigger: 'W',
        id: 'Heater-2',
        url: heater2
      },
      {
        keyCode: 69, // Key code for 'E'
        keyTrigger: 'E',
        id: 'Heater-3',
        url: heater3
      },
      {
        keyCode: 65, // Key code for 'A'
        keyTrigger: 'A',
        id: 'Heater-4',
        url: heater4
      },
      {
        keyCode: 83, // Key code for 'S'
        keyTrigger: 'S',
        id: 'Clap',
        url: clap
      },
      {
        keyCode: 68, // Key code for 'D'
        keyTrigger: 'D',
        id: 'Open-HH',
        url: openH
      },
      {
        keyCode: 90, // Key code for 'Z'
        keyTrigger: 'Z',
        id: 'Kick-n-Hat',
        url: kickNhat
      },
      {
        keyCode: 88, // Key code for 'X'
        keyTrigger: 'X',
        id: 'Kick',
        url: kick
      },
      {
        keyCode: 67, // Key code for 'C'
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: closedH
      }
  ];

  const [display, setDisplay] = useState('');

  const playSound = (clip) => {
    const audio = new Audio(clip.url);
    audio.play();
    setDisplay(clip.id);
  };

  const handleKeyPress = (e) => {
    const keyPressed = String.fromCharCode(e.keyCode);
    const clip = audioClips.find((clip) => clip.keyTrigger === keyPressed.toUpperCase());
    if (clip) {
      playSound(clip);
    }
  };

  return (
    <div className='wrapper'>
    <div id="drum-machine" tabIndex="0" onKeyDown={handleKeyPress}>
      <div id="display">{display}</div>
      <div className="drum-pads">
        {audioClips.map((clip) => (
          <div className="drum-pad" key={clip.id} id={clip.id} onClick={() => playSound(clip)}>
            {clip.keyTrigger}
            <audio className="clip" src={clip.url} id={clip.keyTrigger}></audio>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Drum;
