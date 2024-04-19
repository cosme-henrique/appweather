import styled, {css} from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons'
import { TextInput, TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 100%;

  gap: 8px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 30px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 52px;

  padding: 16px 12px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_200};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    color: ${theme.COLORS.GRAY_100};
  `};

  border-radius: 8px;
`;

export const BtnSearch = styled(TouchableOpacity)`
  width: 52px;
  height: 52px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(AntDesign).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100
}))``;