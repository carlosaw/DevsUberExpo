import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Item = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ddd;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const Logout = styled.TouchableHighlight`
  height: 25px;
  justify-content: center;
`;

export const LogoutText = styled.Text`
  font-size: 15px;
  color: #000;
`;
