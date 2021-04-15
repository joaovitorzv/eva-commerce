import styled from 'styled-components';

import { PrimaryButton } from '../../styles'

type Props = {
  productPicture: string;
}

export const Container = styled.div`
  height: 460px;
  width: 240px;

  border: 1px solid transparent;

  &:hover {
    transition-duration: .5s;
    border: 1px solid var(--color-primary);

    .buyBtn {
      display: block;
    }
  }
`;

export const Preview = styled.figure`
  padding: 18px;
  cursor: pointer;
`;


export const ProductPicture = styled.div`
  height: 200px;
  width: 200px;

  background: url(${(props: Props) => props.productPicture}) center center;
  background-size: cover;
`;

export const ProductInfo = styled.div`
  text-align: center;
  padding: 16px 8px;

  background-color: var(--white-1);
  color: black;
`;

export const Identification = styled.div`
  text-align: center;
  cursor: pointer;

  h4 {
    font-size: 14px;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 8px 0;

  svg {
    height: 14px;
    color: var(--warning);
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 10px;

  h3 {
    color: var(--color-primary);
    font-size: 32px;
  }

  h4 {
    font-size: 10px;
  }

  .price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding: 2px 0;
  }

  .olderPrice {
    font-size: 12px;
    text-decoration: line-through;
  }
`;

export const BuyButton = styled(PrimaryButton)`
  width: 100%;
  display: none;
`;