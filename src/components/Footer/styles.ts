import styled from 'styled-components';

export const Container = styled.footer`
  background-color: var(--black);
  padding: 2.5rem 4rem;

  @media (max-width: 820px) {
    padding: 2.5rem 2rem;
  }
`;

export const FooterHeader = styled.header`
  display: flex;

  h3 {
    color: var(--primary);

    padding-bottom: 8px;
    border-bottom: 3px solid var(--white-2);
  }
`;

export const FooterBody = styled.div`
  display: flex;

  flex-wrap: wrap;

`;

export const AboutList = styled.div`
  margin-top: 1rem;

  svg {
    height: 18px;
    color: var(--primary);
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

  @media (max-width: 530px) {
    ul {
      padding-right: 0;
      border: 1px solid red;
    }
  }
`;