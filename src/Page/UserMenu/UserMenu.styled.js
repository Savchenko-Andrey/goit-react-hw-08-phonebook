import styled from 'styled-components';
import { Conteier } from 'commonStyle/Common.styled';

export const ConteierContacts = styled(Conteier)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/IPhone_13_vector.svg/1200px-IPhone_13_vector.svg.png');
`;

export const NameText = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.sx};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.background};
`;
