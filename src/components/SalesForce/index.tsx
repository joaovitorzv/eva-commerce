import React from 'react';

import { ReactComponent as LockerIcon } from '../../assets/svg/cadeado.svg'
import { ReactComponent as CardIcon } from '../../assets/svg/cartao.svg'
import { ReactComponent as TruckIcon } from '../../assets/svg/caminhao.svg'

import { Container, InfoItem } from './styles';

const SalesForce: React.FC = () => {
  return (
    <Container>
      <InfoItem>
        <LockerIcon />
        <h4>Site seguro</h4>
      </InfoItem>
      <div className='divider'></div>
      <InfoItem>
        <CardIcon />
        <h4>Até 12x sem juros</h4>
      </InfoItem>
      <div className='divider'></div>
      <InfoItem>
        <TruckIcon />
        <h4>Entrega para todo brasil</h4>
      </InfoItem>
    </Container>
  );
}

export default SalesForce;