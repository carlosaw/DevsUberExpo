import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  Title,
  Menu,
  Info,
  IntineraryArea,
  IntineraryItem,
  IntineraryLabel,
  IntineraryPoint,
  IntineraryTitle,
  IntineraryValue,
  List,
} from './styled';
import { useSelector } from 'react-redux';

export default function Travels({ navigation }) {
  const travels = useSelector((state) => state.userReducer.travels) || [];
  return (
    <Container>
      <Menu underlayColor="transparent" onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={32} color="black" />
      </Menu>
      <Info>
        <Title>Suas viagens:</Title>
        <List
          data={travels}
          renderItem={({ item, key }) => (
            <IntineraryArea key={String(key)}>
              <IntineraryItem underlayColor="#EEE">
                <>
                  <IntineraryLabel>
                    <IntineraryPoint color="#0000FF" />
                    <IntineraryTitle>Origem</IntineraryTitle>
                  </IntineraryLabel>
                  <IntineraryValue>{item.from}</IntineraryValue>
                </>
              </IntineraryItem>
              <IntineraryItem underlayColor="#EEE">
                <>
                  <IntineraryLabel>
                    <IntineraryPoint color="#00FF00" />
                    <IntineraryTitle>Destino</IntineraryTitle>
                  </IntineraryLabel>
                  <IntineraryValue>{item.to}</IntineraryValue>
                </>
              </IntineraryItem>
            </IntineraryArea>
          )}
          keyExtractor={(item, key) => String(key)}
        />
      </Info>
    </Container>
  );
}
