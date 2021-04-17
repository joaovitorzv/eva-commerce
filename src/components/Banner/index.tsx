import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import BannerBackground from '../../assets/images/banner.jpeg'
import OfficeBackground from '../../assets/images/category-2.jpeg'
import ClothesBackground from '../../assets/images/category-3.jpeg'
import BooksBackground from '../../assets/images/category-1.jpeg'

import {
  Container,
  Content,
  BannerInfo
} from './styles';


const Banner: React.FC = () => {
  SwiperCore.use([Autoplay, Pagination])

  return (
    <Container>
      <Swiper
        slidesPerView='auto'
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}
      >
        <SwiperSlide>
          <Content bannerBackground={BannerBackground}>
            <BannerInfo>
              <h4>Seus livros favoritos</h4>
              <h4 style={{ fontSize: '24px' }}>estão te esperando aqui</h4>
            </BannerInfo>
          </Content>
        </SwiperSlide>

        <SwiperSlide>
          <Content bannerBackground={OfficeBackground}>
            <BannerInfo>
              <h4>Eleve o nivel do seu escritório</h4>
              <h4 style={{ fontSize: '24px' }}>qualidade e conforto</h4>
            </BannerInfo>
          </Content>
        </SwiperSlide>


        <SwiperSlide>
          <Content bannerBackground={ClothesBackground}>
            <BannerInfo>
              <h4>Renove seu guarda-roupa</h4>
              <h4 style={{ fontSize: '24px' }}>moda feminina &amp; masculina</h4>
            </BannerInfo>
          </Content>
        </SwiperSlide>

        <SwiperSlide>
          <Content bannerBackground={BooksBackground}>
            <BannerInfo>
              <h4>30% OFF</h4>
              <h4 style={{ fontSize: '24px' }}>para compras no boleto</h4>
            </BannerInfo>
          </Content>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </Container>
  );
}

export default Banner;