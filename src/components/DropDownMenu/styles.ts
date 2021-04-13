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
  }
`

export const Menu = styled.ul`
  display: ${(props: Props) => props.isShown ? 'block' : 'none'};
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
