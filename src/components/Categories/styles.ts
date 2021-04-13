import styled from 'styled-components';

import BannerBackground from '../../assets/images/banner.jpeg'

type Props = {
  backgroundImage: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Category = styled.div`
  height: 250px;
  width: 230px;

  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background: url(${(props: Props) => props.backgroundImage}) 50% 35%;
  background-size: cover;
  background-repeat: no-repeat;


  -webkit-box-shadow:inset 0 -10px 80px 5px rgba(0,0,0,0.8);
  box-shadow:inset 0 -10px 80px 5px rgba(0,0,0,0.8);
`;