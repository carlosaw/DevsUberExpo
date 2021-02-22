import React, { useState } from 'react';
import { ActivityIndicator, Platform, StatusBar } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import useApi from '../../useApi';

import {
  Container,
  Header,
  HeaderTitle,
  Menu,
  MenuItem,
  MenuItemText,
  Input,
  ButtonAction,
  ButtonText,
  Loading,
} from './styled';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const api = useApi();
  const [active, setActive] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true);
      const response = await api.login(email, password);
      setLoading(false);

      if (response.error) {
        alert(response.error);
      } else {
        // guardar o token no reducer e redirecionar para a Home
        dispatch({
          type: 'SET_TOKEN',
          payload: { token: response.token },
        });

        dispatch({
          type: 'SET_NAME',
          payload: { name: response.name },
        });

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'AppDrawer' }],
          })
        );
      }
    } else {
      alert('Informe o e-mail e a senha');
      return;
    }
  };

  const handleRegister = async () => {
    if (name && email && password) {
      setLoading(true);
      const response = await api.register(name, email, password);
      setLoading(false);

      if (response.error) {
        alert(response.error);
      } else {
        // guardar o token no reducer e redirecionar para a Home
        dispatch({
          type: 'SET_TOKEN',
          payload: { token: response.token },
        });

        dispatch({
          type: 'SET_NAME',
          payload: { name },
        });

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'AppDrawer' }],
          })
        );
      }
    } else {
      alert('Informe seus dados');
      return;
    }
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'pagging' : null}>
      <StatusBar barStyle="light-content" />
      <Header>
        <HeaderTitle>RdnUber</HeaderTitle>
      </Header>
      <Menu>
        <MenuItem
          active={active === 'login'}
          onPress={() => setActive('login')}
          underlayColor="transparent"
        >
          <MenuItemText>Login</MenuItemText>
        </MenuItem>
        <MenuItem
          active={active === 'register'}
          onPress={() => setActive('register')}
          underlayColor="transparent"
        >
          <MenuItemText>Cadastrar</MenuItemText>
        </MenuItem>
      </Menu>

      {active === 'register' && (
        <Input
          placeholder="Nome"
          onChangeText={(t) => setName(t)}
          value={name}
          placeholderTextColor="#999"
          editable={!loading}
        />
      )}

      <Input
        placeholder="E-mail"
        onChangeText={(t) => setEmail(t)}
        value={email}
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        editable={!loading}
      />

      <Input
        placeholder="Senha"
        onChangeText={(t) => setPassword(t)}
        value={password}
        placeholderTextColor="#999"
        secureTextEntry={true}
        editable={!loading}
      />

      {active === 'login' && (
        <ButtonAction
          onPress={handleLogin}
          underlayColor="transparent"
          disabled={loading}
        >
          <ButtonText>Login</ButtonText>
        </ButtonAction>
      )}

      {active === 'register' && (
        <ButtonAction
          onPress={handleRegister}
          underlayColor="transparent"
          disabled={loading}
        >
          <ButtonText>Cadastrar</ButtonText>
        </ButtonAction>
      )}

      {loading && (
        <Loading>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </Loading>
      )}
    </Container>
  );
}
