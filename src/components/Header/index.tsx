import { useTheme } from 'styled-components';
import { Container, Input, BtnSearch, Icon } from './styles';

import { TextInputProps, TouchableOpacityProps } from 'react-native';

type Props = TextInputProps & TouchableOpacityProps & {
  placeholder: string;
  onChangeText: (text: string) => void;
  onPress: () => void
};

export function Header({ placeholder, onChangeText, onPress }: Props) {

  const { COLORS } = useTheme();

  return (
    <Container>
      <Input 
        placeholder={placeholder}
        placeholderTextColor={COLORS.GRAY_100}
        onChangeText={onChangeText}
      />

      <BtnSearch
        onPress={onPress}
      >
        <Icon 
          name="search1"
        />
      </BtnSearch>
    </Container>
  );
}