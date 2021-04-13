import React from 'react';

import DropDownMenu from '../DropDownMenu'

import {
  Container,
  HtmlHeader,
  Brand,
  HeaderOptions,
  HeaderOption,
  InputSearchWrapper,
  SearchInput
} from './styles';

import EvaLogo from '../../assets/images/logo.png'

import { ReactComponent as UserIcon } from '../../assets/svg/usuario.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/carrinho.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/busca.svg'
import { ReactComponent as ArrowDownIcon } from '../../assets/svg/seta-categorias.svg'

const Header: React.FC = () => {
  const categories = ['Livros', 'Escritorio', 'Vestuario', 'Informática']

  return (
    <Container>
      <HtmlHeader>
        <Brand>
          <h1>
            <a href='/'>
              <img src={EvaLogo} alt='Eva Commerce Logo' />
            </a>
          </h1>
        </Brand>

        <HeaderOptions>

          <DropDownMenu menuOptions={categories}>
            <HeaderOption>
              <h2>Categorias</h2>
              <ArrowDownIcon />
            </HeaderOption>
          </DropDownMenu>

          <InputSearchWrapper>
            <SearchInput />
            <a href="/">
              <SearchIcon />
            </a>
          </InputSearchWrapper>

          <HeaderOption>
            <h2>Minha conta </h2>
            <UserIcon />
          </HeaderOption>

          <HeaderOption>
            <h2>Carrinho (2) </h2>
            <CartIcon />
          </HeaderOption>
        </HeaderOptions>
      </HtmlHeader>
    </Container>
  );
}

export default Header;