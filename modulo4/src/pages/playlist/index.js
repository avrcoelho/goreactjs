import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, SongList } from './styles';

import Loading from '../../components/Loading'

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        descrption: PropTypes.string,
        songs: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.strong,
          album: PropTypes.string,
        })),
      }),
      loading: PropTypes.bool,
    }).isRequired,
  }

  componentDidMount() {
    this.loadPlaylistDetails();
  }


  // aqui vai verificar se houve alguma mudança nos parametros da rota e recarregar os dados
  componentDidUpdate(prevProps){
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    // pega o id que esta na url
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  }

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;

    return (
      <Container>
          <Header>
            <img
              src={playlist.thumbnail}
              alt={playlist.title}
            />

            <div>
              <span>PLAYLIST</span>
              <h1>{playlist.title}</h1>
              {!!playlist.songs && <p>{playlist.songs.length} Músicas</p> }

              <button type="button">Play</button>
            </div>
          </Header>

          <SongList cellPadding={0} cellSpacing={0}>
            <thead>
              <th />
              <th>Titulo</th>
              <th>Artista</th>
              <th>Albúm</th>
              <th>
                <img src={ClockIcon} alt="clock" />
              </th>
            </thead>
            <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
                playlist.songs.map(song => (
                  <tr key={song.id}>
                    <td>
                      <img src={PlusIcon} alt="Adicionar" />
                    </td>
                    <td>{song.title}</td>
                    <td>{song.author}</td>
                    <td>{song.album}</td>
                    <td>3:25</td>
                  </tr>
                ))
              )}
            </tbody>
          </SongList>
        </Container>
    );
  }

  render() {
    return this.props.playlistDetails.loading ? <Container loading><Loading /></Container> : this.renderDetails();
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);