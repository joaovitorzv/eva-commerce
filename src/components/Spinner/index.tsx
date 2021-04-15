import React from 'react';

import { Container, Spin } from './styles';

const Spinner: React.FC = () => {
  return (
    <Container>
      <Spin>
        <div></div><div></div><div></div><div></div>
      </Spin>
    </Container>
  );
}

export default Spinner;