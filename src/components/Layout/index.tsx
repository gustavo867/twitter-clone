import React from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar';

import { Container, Wrapper } from './styles';
import SideBar from '../SideBar';

const Layout: React.FC = () => {
  return (
     <Container>
         <Wrapper>
             <MenuBar/>
             <Main/>
             <SideBar/>
         </Wrapper>
     </Container>
    );
}

export default Layout;