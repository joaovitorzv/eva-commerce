import {
  Container,
  Category
} from './styles';

import BooksBackground from '../../assets/images/category-1.jpeg'
import OfficeBackground from '../../assets/images/category-2.jpeg'
import ClothesBackground from '../../assets/images/category-3.jpeg'

import Spinner from '../Spinner';
import { IProduct } from '../Product'

export interface ICategory {
  id: string;
  name: string;
  product: IProduct[];
}

interface Props {
  categories: ICategory[];
  isLoading: boolean;
}

const Categories: React.FC<Props> = ({ categories, isLoading }) => {

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
          {categories.map((category, idx) => (
            <Category
              key={category.id}
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
