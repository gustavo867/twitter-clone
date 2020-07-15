import React from 'react';

import Feed from '../Feed';

import { 
    Container,
    Banner, 
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>

          <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>
            <h1>Gustavo Santana</h1> 
            <h2>@gustavosantana</h2> 

            <p>
                Mobile Developer
            </p>  

            <ul>
                <li>
                    <LocationIcon/>
                    Ponta Grossa, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 11 de dezembro de 2004
                </li>
            </ul>  

            <Followage>
                <span>
                    seguindo <strong>180</strong>
                </span>
                <span>
                    <strong>800 </strong> seguidores
                </span>
            </Followage>     
          </ProfileData>

          <Feed/>
      </Container>
  )
}

export default ProfilePage;