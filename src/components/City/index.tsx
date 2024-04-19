import { Container, Icon, Location, NameCity } from './styles';

type Props = {
  namecity: string;
};

export function City({ namecity }: Props) {
  return (
    <Container>
      <Location>
        <Icon 
          name="location-pin"
        />

        <NameCity>
          {namecity}
        </NameCity>
      </Location>
    </Container>
  );
}