import styled from 'styled-components';

export const Container = styled.footer`
  background-color: var(--color-primary-dark);
  padding: 2.5rem 4rem;
`;

export const FooterHeader = styled.div`
  display: flex;

  h3 {
    color: var(--color-primary);

    padding-bottom: 8px;
    border-bottom: 3px solid var(--gray-light);
  }
`;

export const FooterBody = styled.div`
  display: flex;

`;

export const AboutList = styled.div`
  margin-top: 1rem;

  svg {
    height: 18px;
    color: var(--color-primary);
  }

  ul {
    list-style: none;
    padding-right: 120px;

    li {
      display: flex;
      align-items: center;

      font-size: 16px;
      font-weight: 300;

      &:not(:first-child) {
        margin-top: 10px;
      }

      a {
        font-size: 16px;
        font-weight: 400;
      }

      svg {
        margin-right: 10px;
      }

      .white {
        color: white;
      }
    }
  }
`;