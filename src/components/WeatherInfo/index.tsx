import { ReactNode } from 'react';
import { Container, Description, Info } from './styles';

type Props = {
  icon?: ReactNode,
  info: string,
  description: string
}

export function WeatherInfo({ icon, info, description }: Props) {
  return (
    <Container>
      {icon}

      <Info>{info}</Info>

      <Description>{description}</Description>
    </Container>
  );
}