import { useEffect, useState } from 'react';

import {
  Container,
  Category
} from './styles';

import BooksBackground from '../../assets/images/category-1.jpeg'
import OfficeBackground from '../../assets/images/category-2.jpeg'
import ClothesBackground from '../../assets/images/category-3.jpeg'

import Spinner from '../Spinner';
import { IProduct } from '../Product'

interface ICategory {
  id: string;
  name: string;
  product: IProduct[];
}

const Categories: React.FC = () => {

  const [categoriesWithStock, setCategoriesWithStock] = useState<ICategory[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('https:eva-test.herokuapp.com/categories')
      const categoriesData: ICategory[] = await response.json();

      const filteredCategories = categoriesData.filter(category => {
        console.log(category.name, category.product.length)
        return category.product.length >= 4
      })
      setCategoriesWithStock(filteredCategories)
      setIsLoading(false)
    }
    fetchCategories()
  }, [])

  // API doesn't provides categories background
  // so the position of the elements below can interfere on the result 
  const categoriesBackground = [
    { path: BooksBackground },
    { path: OfficeBackground },
    { path: ClothesBackground }
  ]

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {categoriesWithStock.map((category, idx) => (
            <Category
              backgroundImage={categoriesBackground[idx].path}
            >
              <h3>{category.name}</h3>
            </Category>
          ))}
        </>
      )}
    </Container>
  );
}

export default Categories;