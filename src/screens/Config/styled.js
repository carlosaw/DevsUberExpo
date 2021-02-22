import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const NameInput = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  color: #000;
`;

export const Menu = styled.TouchableHighlight`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.View`
  margin: 20px;
`;
