import styled from 'styled-components';

export const Container = styled.article`
  height: 180px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.5rem;

  .divider {
    width: 1px;
    background: var(--white-2);
    height: 75px;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    height: auto;

    .divider {
      width: 120px;
      height: 1px;
    }
  }
`;

export const InfoItem = styled.div`
  height: 100%;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--primary);

  h4 {
    font-size: 16px;
  }

  svg {
    margin-bottom: 5px;
    height: 40px;
  }

  @media (max-width: 820px) {
    padding: 3rem 0;
  
    svg {
      height: 60px;
    }
  }
`;