import React from 'react';

import { ReactComponent as ShopIcon } from '../../assets/svg/loja.svg'
import { ReactComponent as MapIcon } from '../../assets/svg/mapa.svg'

import { ReactComponent as WhatsappIcon } from '../../assets/svg/whatsapp.svg'
import { ReactComponent as EmailIcon } from '../../assets/svg/email.svg'

import {
  Container,
  FooterHeader,
  FooterBody,
  AboutList
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterHeader>
        <h3>Eva Shop</h3>
      </FooterHeader>
      <FooterBody>
        <AboutList>
          <ul>
            <li><ShopIcon /></li>
            <li><a href="/">Quem somos</a></li>
            <li><a href="/">Políticas de privacidade</a></li>
            <li><a href="/">Feedback de clientes</a></li>
            <li><a href="/">Trocas e devoluções</a></li>
          </ul>
        </AboutList>

        <AboutList>
          <ul>
            <li><MapIcon /></li>
            <li>Rua Av. Rio Negro, 1100</li>
            <li>Jardim Roselandia</li>
            <li>14406-005</li>
            <li> Franca / SP</li>
          </ul>
        </AboutList>

        <AboutList>
          <ul>
            <li><ShopIcon /></li>
            <li><WhatsappIcon className='white' /> (16) 9 98179-7325</li>
            <li><EmailIcon className='white' /> contato@evacommerce.com.br</li>
          </ul>
        </AboutList>
      </FooterBody>
    </Container>
  );
}

export default Footer;