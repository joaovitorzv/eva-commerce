import { Container, Main } from './styles'

import Header from '../Header'
import Banner from '../Banner'
import SalesForce from '../SalesForce'
import Categories from '../Categories'

function Layout() {
  return (
    <Container>
      <Header />
      <Banner />
      <Main>
        <SalesForce />
        <Categories />
      </Main>
    </Container>
  );
}

export default Layout;
