import { useEffect, useState } from 'react'

import Header from '../Header'
import Banner from '../Banner'
import SalesForce from '../SalesForce'
import Categories, { ICategory } from '../Categories'
import { IProduct } from '../Product'
import Newsletter from '../Newsletter'
import Footer from '../Footer'
import Highlights from '../Highlights'

import { Container, Main } from './styles'

function Layout() {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [products, setProducts] = useState<IProduct[]>([])

  const [categoriesFetched, setCategoriesFetched] = useState(true)
  const [productsFetched, setProductsFetched] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const categoriesReponse = await fetch('https:eva-test.herokuapp.com/categories')
      const categoriesData: ICategory[] = await categoriesReponse.json();

      const filteredCategories = categoriesData.filter(category => {
        return category.product.length >= 4
      })
      setCategories(filteredCategories)
      setCategoriesFetched(false)


      const productsResponse = await fetch('https://eva-test.herokuapp.com/products')
      const productsData: IProduct[] = await productsResponse.json()

      setProducts(productsData.filter((product: IProduct) => {
        return filteredCategories.map(category => category.id).includes(product.category_id)
      }))
      setProductsFetched(false)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Header />
      <Banner />
      <Main>
        <SalesForce />
        <Categories categories={categories} isLoading={categoriesFetched} />
        <Highlights products={products} isLoading={productsFetched} />
        {categories.map(category => (
          <Highlights title={category.name} products={products.filter(product => product.category_id === category.id)} isLoading={productsFetched} />
        ))}
      </Main>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Layout;
