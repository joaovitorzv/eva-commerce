import React from 'react';

import {
  Container,
  Category
} from './styles';

import BooksBackground from '../../assets/images/category-1.jpeg'
import OfficeBackground from '../../assets/images/category-2.jpeg'
import ClothesBackground from '../../assets/images/category-3.jpeg'

const Categories: React.FC = () => {
  return (
    <Container>
      <Category backgroundImage={BooksBackground}>
        <h3>Livros</h3>
      </Category>

      <Category backgroundImage={OfficeBackground}>
        <h3>Escritório</h3>
      </Category>

      <Category backgroundImage={ClothesBackground}>
        <h3>Vestuário</h3>
      </Category>
    </Container>
  );
}

export default Categories;