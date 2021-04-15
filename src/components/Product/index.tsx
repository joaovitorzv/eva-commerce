import React from 'react';

import {
  Container,
  Preview,
  ProductPicture,
  ProductInfo,
  Identification,
  Rating,
  PriceContainer,
  BuyButton
} from './styles';

import { ReactComponent as StarIcon } from '../../assets/svg/estrela.svg';
import BooksBackground from '../../assets/images/category-1.jpeg'


const Product: React.FC = () => {
  return (
    <Container>
      <Preview>
        <ProductPicture productPicture={BooksBackground} />
      </Preview>
      <ProductInfo>
        <Identification>
          <h4>Box de Livros - Senhor Dos Anéis (3 Volumes) + Pôster</h4>
          <Rating>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Rating>
        </Identification>
        <PriceContainer>
          <div className='price'>
            <h4 className='olderPrice'>R$ 114,50</h4>
            <h3>R$ 9458,99</h3>
          </div>
          <h4>Ou R$ 88,20 com 10% off no boleto</h4>
        </PriceContainer>

        <BuyButton className='buyBtn'>Comprar</BuyButton>
      </ProductInfo>
    </Container>
  );
}

export default Product;