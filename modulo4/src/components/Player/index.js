import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Currency, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Currency>
      <img
        src="https://www.vnews.com/getattachment/58d78dc1-bfe3-4c7b-aaef-6fa0ce1a223b/e4-MUS-LinkinPark-ls-vn-xxxxxxx-ph01"
        alt="Album"
      />
      <div>
        <span>Times like these</span>
        <small>Linkin Park</small>
      </div>
    </Currency>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="shuffle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="play" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="forward" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:30</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>2:50</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
