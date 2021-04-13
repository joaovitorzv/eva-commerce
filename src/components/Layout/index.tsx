import { Container, Main } from './styles'

import Header from '../Header'
import Banner from '../Banner'
import SalesForce from '../SalesForce'
import Categories from '../Categories'
import Newsletter from '../Newsletter'
import Footer from '../Footer'

function Layout() {
  return (
    <Container>
      <Header />
      <Banner />
      <Main>
        <SalesForce />
        <Categories />
      </Main>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Layout;
