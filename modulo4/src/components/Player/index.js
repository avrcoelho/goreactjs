import React, { Fragment } from 'react';
import Slider from 'rc-slider';
// oo Sound pode ser coloca em qualquer local do jsx, pois ele não é visual
import Sound from 'react-sound';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && <Sound url={player.currentSong.file} playStatus={player.status} />}
    <Currency>
      {!!player.currentSong && (
        <Fragment>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.title}
          />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </Fragment>
      )}
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

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
