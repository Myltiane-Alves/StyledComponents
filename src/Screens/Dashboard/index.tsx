import React from 'react';
import {
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting, 
    UserName,


} from './styles';

export function Dashboard() {
    return (
        <Container>
          <Header>
              <UserWrapper>
                <UserInfo>
                    <Photo source={{ uri: 'https://github.com/Myltiane-Alves.png'}}/>
                    <User>
                        <UserGreeting>olá,</UserGreeting>
                        <UserName>Myltiane</UserName>    
                    </User>
                </UserInfo>
              </UserWrapper>
          </Header>
        </Container>
    )
}