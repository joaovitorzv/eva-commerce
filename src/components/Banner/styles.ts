import styled from 'styled-components';

import BannerBackground from '../../assets/images/banner.jpeg'

export const Container = styled.div`

  width: 100%;
  height: 375px;
  background: url(${BannerBackground}) 50% 35%;

  transform: skewY(-2deg);
  transform-origin: left;

  overflow: hidden;

  -webkit-box-shadow:inset 450px 0 250px 20px rgba(0,0,0,0.8);
  box-shadow:inset 450px 0 250px 20px rgba(0,0,0,0.8);
`

export const Content = styled.section`
  transform: skewY(2deg);
  height: 100%;
  padding-top: 2%;
  padding-bottom: 2%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BannerInfo = styled.div`
  width: 70%;
  height: 100%;

  padding-top: 10%;

  h4 {
    font-size: 42px;
  }
`
export const BannerSelector = styled.div`
  display: flex;
`

export const Bullet = styled.span`
  width: 10px;
  height: 10px;

  background-color: var(--color-primary-light);
  border-radius: 25px;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 8px;
  }
`