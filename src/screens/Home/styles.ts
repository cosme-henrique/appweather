import styled, {css} from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context'

export type BackgroundTypeStyleProps = 'SUNNY' | 'CLOUDY' | 'THUNDERSTORMS';

type Props = {
  type: BackgroundTypeStyleProps;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  padding: 24px;

  background-color: ${({ theme, type }) => type === 'SUNNY' ? theme.COLORS.BLUE_500 : type === 'CLOUDY' ? theme.COLORS.BLUE_600 : theme.COLORS.BLUE_700};
`;

export const Content = styled.View`
  margin-top: 32px;

  align-items: center;
`;

export const TextWeather = styled.Text`
  margin-top: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Temperature = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ContentInfoWeather = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  padding-top: 12px;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-top: 20px;
`;