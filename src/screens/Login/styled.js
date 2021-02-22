import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  height: 150px;
  background-color: #3574cb;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 27px;
`;

export const Menu = styled.View`
  background-color: #3574cb;
  flex-direction: row;
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const MenuItem = styled.TouchableHighlight`
  flex: 1;
  padding: 20px;
  border-bottom-width: 5px;
  border-bottom-color: ${(props) => (props.active ? '#fff' : '#3574cb')};
`;

export const MenuItemText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const Input = styled.TextInput`
  margin: 10px 20px;
  border-bottom-width: 2px;
  border-bottom-color: #ccc;
  height: 50px;
  font-size: 16px;
  color: #333;
`;

export const ButtonAction = styled.TouchableHighlight`
  background-color: #3574cb;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 0px 2px 2px #999;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Loading = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
