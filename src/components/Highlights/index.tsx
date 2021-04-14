import React from 'react';

import { ReactComponent as BackIcon } from '../../assets/svg/back.svg';
import { ReactComponent as NextIcon } from '../../assets/svg/next.svg';

import {
  Container,
  Products,
  HighlightTitle
} from './styles';

interface Props {
  title: string;
  products: string[]
}

const Highlights: React.FC<Props> = ({ title, products }) => {
  return (
    <Container>
      <HighlightTitle>
        <div className='contrast-bar'></div>
        <h3>{title}</h3>
      </HighlightTitle>

      <Products>
        <button className='control-back'>
          <BackIcon />
        </button>

        <button className='control-next'>
          <NextIcon />
        </button>
      </Products>
    </Container>
  );
}

export default Highlights;