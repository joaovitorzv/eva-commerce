import styled from 'styled-components';

type Props = {
  isShown: boolean;
}

export const Container = styled.a`
  display: flex;
  align-items: center;
  
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 2.5rem;
  }

  svg {
    margin-left: 5px;
    transform: rotate(180deg);
    transition-duration: 300ms;
  }

  .menu {
    max-height: 0;
    overflow: hidden;

    -webkit-transition: max-height .3s ease-in;
    transition: max-height .3s ease-in;
  }

  &:hover {
    .menu {
      max-height: 300px;
    }

    svg {
      transform: rotate(360deg);
      transition-duration: 300ms;
    }
  }


`

export const Menu = styled.ul`
  position: absolute;
  transition-duration: 200ms;

  top: 50px;
  border-radius: 4px;
  
  list-style: none;
  background-color: white;

  li {
    padding: 10px;
    width: 150px;
    color: var(--color-primary-dark);

    &:not(:first-child) {
      border-top: 1px solid var(--gray-light);
    }
  }
`;
