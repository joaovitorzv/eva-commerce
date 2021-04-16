import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1.5rem;
`;

export const HighlightTitle = styled.div`
  padding-bottom: 2.5rem;

  color: var(--black);

  .contrast-bar {
    width: 64px;
    height: 4px;
    background-color: var(--primary);
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 460px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .control {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    padding: 20px 10px 20px 0;
    
    svg {
      color: var(--primary);
      height: 32px;
    }
  }

  .back {
    left: 5px;
  }

  .next {
    right: 5px;
  }

  @media (min-width: 860px) {
    .back {
      left: 30px;
    }

    .next {
      right: 30px;
    }
  }
`;

