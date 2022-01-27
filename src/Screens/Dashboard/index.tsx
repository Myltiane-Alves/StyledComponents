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
    HighlightCards,
    Transactions,
    Title,
    TransactionList

} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard() {
    const data = [{
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category:{
         name: 'Vendas',
         icon: 'dollar-sign',
        },
        date: "13/04/2022" 
    }];

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

          <HighlightCards >
            <HighlightCard
             type="up"
             title="Entradas"
             amount="R$ 17.400,00" 
             lastTransaction="última entrada dia 13 de abril"
            />
            <HighlightCard
             type="down"
             title="Saídas"
             amount="R$ 1.259,00" 
             lastTransaction="última saída dia 03 de abril"
            />
            <HighlightCard
             type="total"
             title="Total"
             amount="R$ 16.141,00" 
             lastTransaction="01 á 16 de abril"
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>
            
            <TransactionList
                data={transactions}
                keyExtractor={}
            />
            <TransactionCard data={data}/>
          </Transactions>
        </Container>
    )
}