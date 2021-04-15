import { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavigationOptions } from 'swiper/types/components/navigation';
import { PaginationOptions } from 'swiper/types/components/pagination';

import Product from '../Product';

import { ReactComponent as BackIcon } from '../../assets/svg/back.svg';
import { ReactComponent as NextIcon } from '../../assets/svg/next.svg';

import {
  Container,
  Products,
  HighlightTitle
} from './styles';

import 'swiper/swiper-bundle.css';

interface Props {
  title: string;
  products: string[]
}

SwiperCore.use([Navigation])

const Highlights: React.FC<Props> = ({ title, products }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    const navigation = Swiper.params.navigation as NavigationOptions;
    navigation.nextEl = nextRef.current;
    navigation.prevEl = prevRef.current;
  }
  return (
    <Container>
      <HighlightTitle>
        <div className='contrast-bar'></div>
        <h3>{title}</h3>
      </HighlightTitle>

      <Products>
        <button className='control back' ref={prevRef}>
          <BackIcon />
        </button>

        <button className='control next' ref={nextRef}>
          <NextIcon />
        </button>
        <Swiper
          slidesPerView={4}
          onBeforeInit={onBeforeInit}
          className='swiper-container'
        >
          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>
        </Swiper>
      </Products>
    </Container>
  );
}

export default Highlights;