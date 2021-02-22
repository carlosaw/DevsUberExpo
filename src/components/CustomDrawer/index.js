import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  Container,
  Item,
  Header,
  Avatar,
  Info,
  Name,
  Logout,
  LogoutText,
} from './styled';

export default function CustomDrawer(props) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.userReducer.name);

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });

    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  };
  return (
    <Container>
      <Item>
        <Header>
          <Avatar
            source={{
              uri:
                'https://www.gravatar.com/avatar/3fefcffd132a31977368a615b12e60a7?s=120',
            }}
          />
          <Info>
            <Name>{name}</Name>
            <Logout onPress={logout} underlayColor="transparent">
              <LogoutText>Sair</LogoutText>
            </Logout>
          </Info>
        </Header>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </Item>
    </Container>
  );
}
