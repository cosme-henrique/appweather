import styled, { css } from 'styled-components/native';

import { Entypo } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  
  align-items: center;
  justify-content: center;

  gap: 8px;
`;

export const Location = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const NameCity = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Icon = styled(Entypo).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.GRAY_100,
}))``;

