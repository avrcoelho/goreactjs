import React from 'react';

import { Container, Repository } from './styles';

const CompareList = () => (
  <Container>
    <Repository>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="Facebook" />
        <strong>React</strong>
        <small>Facebook</small>
      </header>

      <ul>
        <li>
            99 <strong>stars</strong>
        </li>
        <li>
            99 <strong>forks</strong>
        </li>
        <li>
            99 <strong>issues</strong>
        </li>
        <li>
            99 <strong>last commit</strong>
        </li>
      </ul>
    </Repository>
  </Container>
);

export default CompareList;
