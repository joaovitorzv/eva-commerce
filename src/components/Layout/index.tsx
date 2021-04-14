import { Container, Main } from './styles'

import Header from '../Header'
import Banner from '../Banner'
import SalesForce from '../SalesForce'
import Categories from '../Categories'
import Newsletter from '../Newsletter'
import Footer from '../Footer'
import Highlights from '../Highlights'

function Layout() {
  return (
    <Container>
      <Header />
      <Banner />
      <Main>
        <SalesForce />
        <Categories />
        <Highlights title='Destaques' products={['teste']} />
      </Main>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Layout;
