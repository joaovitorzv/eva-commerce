import { useEffect, useState } from 'react';

import {
  Container,
  Category
} from './styles';

import BooksBackground from '../../assets/images/category-1.jpeg'
import OfficeBackground from '../../assets/images/category-2.jpeg'
import ClothesBackground from '../../assets/images/category-3.jpeg'

import Spinner from '../Spinner';

const Categories: React.FC = () => {
  const [categoriesData, setCategoriesData] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch('https:eva-test.herokuapp.com/categories')
      .then(response => response.json())
      .then(
        (result) => {
          setCategoriesData(result)
        },
        (error) => {
          setFetchError(true)
        }
      )
  }, [])

  return (
    !fetchError ? (
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Category backgroundImage={BooksBackground}>
              <h3>Livros</h3>
            </Category>

            <Category backgroundImage={OfficeBackground}>
              <h3>Escritório</h3>
            </Category>

            <Category backgroundImage={ClothesBackground}>
              <h3>Vestuário</h3>
            </Category>
          </>
        )}
      </Container>
    ) : null
  );
}

export default Categories;