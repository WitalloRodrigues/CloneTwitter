import React from 'react';
import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Witallo Rodriguês</h1>
        <h2>@w.i.t.a.l.l.o.19</h2>
        <p>
          Developer at <a href="https://www.instagram.com/w.i.t.a.l.l.o.19/">@w.i.t.a.l.l.o.19</a>
          <ul>
            <li>
              <LocationIcon />
              Fortaleza, Brasil
            </li>
            <li>
              <CakeIcon />
              Nacido(a) em 09 de outubro de 2021.
            </li>
          </ul>
          <Followage>
            <span>
              seguindo <strong>75</strong>
            </span>
            <span>
            <strong>116 </strong> seguidores
            </span>
          </Followage>
        </p>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;