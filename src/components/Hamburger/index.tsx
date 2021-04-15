import { useState } from 'react'

import { ReactComponent as HamburgerIcon } from '../../assets/svg/menu-hamburguer.svg'
import { ReactComponent as UserIcon } from '../../assets/svg/usuario.svg'
import { ReactComponent as CartIcon } from '../../assets/svg/carrinho.svg'
import { ReactComponent as SearchIcon } from '../../assets/svg/busca.svg'

import {
  Container,
  MenuWrapper,
  HamburgerMenu,
  MenuOption,
  MenuInputWrapper,
  MenuInput
} from './styles';

const Hamburger: React.FC = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <Container>
      <HamburgerMenu
        onClick={() => setOpenHamburger(!openHamburger)}
      >
        <HamburgerIcon />
      </HamburgerMenu>

      <MenuWrapper openHamburger={openHamburger}>
        <MenuInputWrapper>
          <MenuInput />
          <a href="/">
            <SearchIcon />
          </a>
        </MenuInputWrapper>

        <MenuOption>
          <h2>Carrinho (2) </h2>
          <CartIcon />
        </MenuOption>

        <MenuOption>
          <h2>Minha conta </h2>
          <UserIcon />
        </MenuOption>
      </MenuWrapper>
    </Container>
  );
}

export default Hamburger;