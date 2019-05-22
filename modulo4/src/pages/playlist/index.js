import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://www.vnews.com/getattachment/58d78dc1-bfe3-4c7b-aaef-6fa0ce1a223b/e4-MUS-LinkinPark-ls-vn-xxxxxxx-ph01"
        alt="Album"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Linkin Park</h1>
        <p>12 Músicas</p>

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
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Fain</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Fain</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Fain</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Fain</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:25</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
