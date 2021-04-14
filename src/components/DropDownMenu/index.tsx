import { Container, Menu } from './styles';

interface Props {
  menuOptions: string[];
}

const DropDownMenu: React.FC<Props> = ({ children, menuOptions }) => {

  return (
    <Container>
      {children}
      <Menu className='menu'>
        {menuOptions.map(menuOption => (
          <li key={menuOption}>{menuOption}</li>
        ))}
      </Menu>
    </Container>
  );
}

export default DropDownMenu;