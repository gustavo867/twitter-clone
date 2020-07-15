import React from 'react';

import StickyBox from 'react-sticky-box';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
 } from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestions';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
      </SearchWrapper>

    <StickyBox>
      <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Rocketseat"
                nickname="@rocketseat"
              />,
              <FollowSuggestion
                name="Allan Ferreira"
                nickname="@alanzoka"
              />,
              <FollowSuggestion
                name="Mateus"
                nickname="@yetz1"
              />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News/>,
              <News/>,
              <News/>,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <News/>,
              <News/>,
              <News/>,
            ]}
          />
          <List
          title="Talvez você curta"
          elements={[
            <News/>,
            <News/>,
            <News/>,
          ]}
        />
        <List
            title="Talvez você curta"
            elements={[
              <News/>,
              <News/>,
              <News/>,
            ]}
          />
      </Body>
    </StickyBox>
      
    </Container>
  );
}

export default SideBar;