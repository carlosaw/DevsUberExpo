import styled from 'styled-components/native';

export const Area = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
`;

export const Close = styled.TouchableHighlight`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 20px;
`;

export const Text = styled.Text``;

export const Input = styled.TextInput`
  margin-left: 20px;
  font-size: 18px;
  color: #000;
`;

export const Body = styled.View``;

export const Result = styled.TouchableHighlight`
  padding: 15px;
`;

export const ResultText = styled.Text`
  color: #000;
  font-size: 16px;
`;
