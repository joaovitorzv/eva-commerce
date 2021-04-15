
import {
  Container,
  Content,
  BannerInfo,
  BannerSelector,
  Bullet
} from './styles';


const Banner: React.FC = () => {
  return (
    <Container>
      <Content>
        <BannerInfo>
          <h4>Seus livros favoritos</h4>
          <h4 style={{ fontSize: '24px' }}>estão te esperando aqui</h4>
        </BannerInfo>
        <BannerSelector>
          <Bullet style={{ backgroundColor: 'var(--primary-light)' }} />
          <Bullet />
          <Bullet />
          <Bullet />
        </BannerSelector>
      </Content>
    </Container>
  );
}

export default Banner;