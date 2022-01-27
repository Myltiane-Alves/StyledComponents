import React from 'react';
import { Feather } from '@expo/vector-icons'
import {
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting, 
    UserName,
    Icon,

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
                <Icon name="power" />
              </UserWrapper>
          </Header>
        </Container>
    )
}