import styled from 'styled-components';

import { Input, InputWrapper } from '../../styles'

export const Container = styled.div`
  width: 100%;
  height: 64px;

  position: sticky;
  top: 0;
  z-index: 5;

  background-color: #0C0D0D;
`;

export const HtmlHeader = styled.header`
  width: 85vw;
  height: 100%;

  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const Brand = styled.div`
  img {
    width: 80px;
    height: 32px;
  }
`

export const HeaderOptions = styled.div`
  display: flex;

  svg {
    height: 18px;
    width: 18px;
  }
`

export const HeaderOption = styled.a`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 2.5rem;
  }
  
  cursor: pointer;

  svg {
    margin-left: 5px;
  }
`

export const InputSearchWrapper = styled(InputWrapper)`
  margin-left: 2.5rem;

  a {
    padding: 0 5px;
    height: 100%;
    border-bottom: 1px solid var(--gray-light);
  }

  svg {
    height: 100%;
  }

`;

export const SearchInput = styled(Input)`
  width: 450px;
`;