import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  max-width: 72px;

  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    color: ${theme.COLORS.GRAY_100};
  `};

  text-align: center;
`;