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
import { ReactComponent as FilledStarIcon } from '../../assets/svg/filled-star.svg';

import { ToLocaleString, ToLocaleStringPercentDiscount } from '../../utils'

export interface IProduct {
  id: string;
  name: string;
  stars: number;
  price: string;
  promotional_price: string;
  category_id: string;
  category: {
    id: string,
    bankslip_discount: number
  }
  images: [
    { path: string }
  ]
}

export interface Props {
  productData: IProduct;
}

const Product: React.FC<Props> = ({ productData }) => {
  var stars = [];

  var x = 0;
  while (x < 5) {
    if (x < productData.stars) {
      stars.push(<FilledStarIcon key={x} />)
    } else {
      stars.push(<StarIcon key={x} />)
    }
    x++
  }

  return (
    <Container>
      <Preview>
        {productData.images[0]?.path ? (
          <ProductPicture productPicture={productData.images[0].path} />
        ) : (
          <p>Foto indisponível</p>
        )}
      </Preview>
      <ProductInfo>
        <Identification>
          <h4>{productData.name}</h4>
          <Rating>
            {stars}
          </Rating>
        </Identification>
        <PriceContainer>
          <div className='price'>
            <h4 className='olderPrice'>{ToLocaleString(productData.price)}</h4>
            <h3>{ToLocaleString(productData.promotional_price)}</h3>
          </div>
          {productData.category.bankslip_discount && (
            <h4>
              Ou {ToLocaleStringPercentDiscount(productData.promotional_price, productData.category.bankslip_discount)} com {productData.category.bankslip_discount}% off no boleto
            </h4>
          )}
        </PriceContainer>

        <BuyButton className='buyBtn'>Comprar</BuyButton>
      </ProductInfo>
    </Container>
  );
}

export default Product;