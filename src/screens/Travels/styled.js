import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const Menu = styled.TouchableHighlight`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.View`
  margin: 20px;
  flex: 1;
`;

export const IntineraryArea = styled.View`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #999;
  border-color: #eee;
  border-width: 1px;
  margin-bottom: 10px;
`;

export const IntineraryItem = styled.TouchableHighlight`
  padding: 15px 20px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`;

export const IntineraryLabel = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const IntineraryPoint = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.color || '#000'};
`;

export const IntineraryTitle = styled.Text`
  margin-left: 10px;
  color: #999;
`;

export const IntineraryValue = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const IntineraryPlaceholder = styled.Text`
  color: #555;
  font-size: 16px;
  text-align: center;
`;

export const List = styled.FlatList``;
