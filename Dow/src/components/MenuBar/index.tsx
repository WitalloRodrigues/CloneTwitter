import React from 'react';
import Button from '../Button';
import { Container, TopSide, Logo, MenuButton, HomeIcon,
   BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, Botside, Avatar ,ProfileData, ExitIcon} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Pagína Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>
            Twittar
          </span>
        </Button>

      </TopSide>
      <Botside>
        <Avatar />
          <ProfileData>
            <strong>Witallo Rodriguês</strong>
            <span>@w.i.t.a.l.l.o.19</span>
          </ProfileData>
          <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;