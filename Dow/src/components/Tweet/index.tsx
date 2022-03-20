import React from 'react';

 import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon,RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  
    
  return(
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Witallo</strong>
            <span>@w.i.t.a.l.l.o.19</span>
            <Dot />
            <time>26 de out</time>
          </Header>
          <Description>Tudo que vai, volta!</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              36
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              44
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;