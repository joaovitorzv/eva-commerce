import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1.5rem;
`;

export const HighlightTitle = styled.div`
  padding-bottom: 2.5rem;

  color: var(--color-primary-dark);

  border: 1px solid red;

  .contrast-bar {
    width: 64px;
    height: 4px;
    background-color: var(--color-primary);
  }
`;

export const Products = styled.div`
  border: 1px solid red;

  display: flex;
  align-items: center;
  height: 450px;  


  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    position: absolute;

    padding: 20px 10px;

    svg {
      color: var(--color-primary);
      height: 32px;
    }
  }

  .control-back {
    left: 40px;
  }

  .control-next {
    right: 40px;
  }
`;

