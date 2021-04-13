import { useState } from 'react'
import styled from 'styled-components'

import { Container, Menu } from './styles';

interface Props {
  menuOptions: string[];
}

const DropDownMenu: React.FC<Props> = ({ children, menuOptions }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Container
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {children}

      <Menu isShown={isShown}>
        {menuOptions.map(menuOption => (
          <li key={menuOption}>{menuOption}</li>
        ))}
      </Menu>
    </Container>
  );
}

export default DropDownMenu;