import styled from 'styled-components';

type Props = {
  bannerBackground: string;
}

export const Container = styled.div`
  width: 100%;
  height: 375px;

  transform: skewY(-2deg);
  transform-origin: left;
  overflow: hidden;

  .swiper-container {
    width: 100vw;
    height: 400px;
    
    transform: skewY(2deg);
    background-color: var(--black);

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .swiper-slide {
    width: 100vw;
  }

  .swiper-pagination {
    padding-bottom: 2.5rem;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;

    background-color: var(--white);
    border-radius: 25px;
    cursor: pointer;
    opacity: 1;

    -webkit-box-shadow: -23px 28px 35px -8px rgba(0,0,0,0.68);
    -moz-box-shadow: -23px 28px 35px -8px rgba(0,0,0,0.68);
    box-shadow: -23px 28px 35px -8px rgba(0,0,0,0.68);
  }

  .swiper-pagination-bullet-active {
    background-color: var(--primary-light);
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  height: 400px;

  padding: 1.5% 0 4% 0;

  background: url(${(props: Props) => props.bannerBackground}) 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-shadow:inset 450px 0 250px 20px rgba(0,0,0,0.8);
  box-shadow:inset 450px 0 250px 20px rgba(0,0,0,0.8);
`;

export const BannerInfo = styled.div`
  width: 70%;
  height: 100%;

  padding-top: 10%;

  h4 {
    font-size: 42px;
  }

  @media (max-width: 820px) {
    width: 90%;
    padding-top: 20%;
  }
`