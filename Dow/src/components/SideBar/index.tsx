import React from 'react';
import StyckBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import { Container, SearchWrapper, SearchIcon, SearchInput, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Busca no twitter"/>
        <SearchIcon />
      </SearchWrapper>
      <StyckBox><Body>
        <List 
          title="Talves vôce curta"
          elements={[
            <FollowSuggestion 
              name="Witallo Rodriguês"
              nickname="@w.i.t.a.l.l.o.19"
            />,
            <FollowSuggestion 
              name="Witallo Rodriguês"
              nickname="@w.i.t.a.l.l.o.19"
            />,
            <FollowSuggestion 
              name="Witallo Rodriguês"
              nickname="@w.i.t.a.l.l.o.19"
            />,
          ]}
        />

        <List 
          title="Talves vôce curta"
          elements={[<News />,<News />,<News />]}
        />
        <List 
          title="Talves vôce curta"
          elements={[<News />,<News />,<News />]}
        />
        <List 
          title="Talves vôce curta"
          elements={[<News />,<News />,<News />]}
        />

      </Body></StyckBox>
      
    </Container>
  );
}

export default SideBar;