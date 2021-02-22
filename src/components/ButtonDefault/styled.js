import styled from 'styled-components/native';

export const ButtonDefault = styled.TouchableHighlight`
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ bgcolor }) => bgcolor || '#EEE'};
  padding: 10px 20px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
