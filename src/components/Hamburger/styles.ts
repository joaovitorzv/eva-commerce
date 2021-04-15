import styled from 'styled-components';

import { InputWrapper, Input, LinkOption } from '../../styles'

type Props = {
  openHamburger: boolean;
}

export const Container = styled.div`
  display: none;

  svg {
    width: 40px;
    height: 40px;
    color: var(--white);
  }
  
  @media (max-width: 1250px) {
    display: block;
  }
`;

export const MenuWrapper = styled.div`
  display: ${(props: Props) => props.openHamburger ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  
  background-color: var(--black);
`;

export const HamburgerMenu = styled.button`
  margin-left: 1rem;
  display: none;

  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 1250px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuInputWrapper = styled(InputWrapper)`
  display: none;
 
  width: 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  a {
    height: 35px;
    width: 50px;
    padding: 0 .5rem;
  }
  svg {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 820px) {
    display: flex;
  }
`;

export const MenuInput = styled(Input)`
  width: 100%;
`;

export const MenuOption = styled(LinkOption)`
  width: 100%;
  justify-content: center;
  padding: 2rem;

  h2 {
    font-size: 24px;
  }

  &:not(:first-child) {
    border-top: 1px solid var(--black-3);
  }
`;