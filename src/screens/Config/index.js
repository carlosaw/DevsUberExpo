import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title, NameInput, Menu, Info } from './styled';

export default function Config({ navigation }) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.userReducer.name) || '';

  const handleName = (name) => {
    if (!name) {
      alert('Favor, informe seu nome.');
    } else {
      dispatch({
        type: 'SET_NAME',
        payload: { name },
      });
    }
  };

  return (
    <Container>
      <Menu underlayColor="transparent" onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={32} color="black" />
      </Menu>
      <Info>
        <Title>Seu nome completo:</Title>
        <NameInput value={name} onChangeText={(t) => handleName(t)} />
      </Info>
    </Container>
  );
}
