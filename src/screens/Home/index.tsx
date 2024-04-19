import { useTheme } from 'styled-components';
import { 
  BackgroundTypeStyleProps,
  Container,
  Content, 
  TextWeather, 
  Temperature, 
  ContentInfoWeather 
} from './styles';

import { useEffect, useState } from 'react';
import { Wind, DropHalf, Thermometer } from 'phosphor-react-native';

import { Header } from '../../components/Header';
import { City } from '../../components/City';
import { WeatherInfo } from '../../components/WeatherInfo';

import IconSunny from '../../assets/svg/IconSunny';
import IconCloudy from '../../assets/svg/IconCloudy';
import IconThunderstorms from '../../assets/svg/IconThunderstorms';

import { api } from '../../services/api';
import { API_KEY } from '../../services/config';
import { WeatherApi } from '../../interfaces/WeatherApi';

function convertKelvinToCelsius(num: number) {
  return num - 273.15
}

export function Home() {
  const [dados, setDados] = useState<WeatherApi | null>(null);
  const [background, setBackground] = useState<BackgroundTypeStyleProps>('SUNNY');
  const [nameCity, setNameCity] = useState('');
  const [searchCity, setSearchCity] = useState('');

  async function loadData() {
    if (searchCity) {
      try {
        const nomeCidade = searchCity;

        const params = {
          q: nomeCidade,
          appid: API_KEY,
          lang: "pt"
        };
        const response = await api.get("weather", { params });

        setDados(response.data);

        const weatherMain = response.data.weather[0].main;

        if (weatherMain === 'Clear') {
          setBackground('SUNNY');
        } else if (weatherMain === 'Clouds') {
          setBackground('CLOUDY');
        } else {
          setBackground('THUNDERSTORMS');
        }
      } catch (error: any) {
        if (error instanceof Error) {
          console.error('Erro ao buscar dados climáticos:', error.message);
        } else if (error && error.response && error.response.status === 404) {
          console.error('Cidade não encontrada:', error.response.status);
        } else {
          console.error('Erro desconhecido:', error);
        }
      }
    }
  }

  useEffect(() => {
    loadData()
  }, [searchCity])

  const { COLORS } = useTheme();

  function selectWeatherIcon() {
    if (!dados) return null;

    const weatherMain = dados.weather[0].main;

    if (weatherMain === 'Clear') {
      return <IconSunny />;
    } else if (weatherMain === 'Clouds') {
      return <IconCloudy />;
    } else {
      return <IconThunderstorms />;
    }
  }

  return (
    <Container type={background}>

      <Header
        placeholder="Digite o nome da cidade"
        onChangeText={setNameCity}
        onPress={() => setSearchCity(nameCity)}
      />

      {dados && (
        <>
          <City
            namecity={dados ? dados.name : ""}
          />

          <Content>
            {selectWeatherIcon()}

            <TextWeather>
              {dados && dados.weather[0].description}
            </TextWeather>

            <Temperature>{convertKelvinToCelsius(dados ? dados.main.temp : 0)?.toFixed(0)}°</Temperature>
          </Content>

          <ContentInfoWeather>
            <WeatherInfo
              icon={<Wind size={32} color={COLORS.GRAY_100} />}
              info={`${dados ? dados.wind.speed : ""} km/h`}
              description="Vento"
            />

            <WeatherInfo
              icon={<DropHalf size={32} weight="fill" color={COLORS.GRAY_100} />}
              info={`${dados ? dados.main.humidity : ""} %`}
              description="Umidade"
            />

            <WeatherInfo
              icon={<Thermometer size={32} color={COLORS.GRAY_100} />}
              info={`${dados ? convertKelvinToCelsius(dados ? dados.main.feels_like : 0)?.toFixed(0) : ""}°`}
              description="Sensação Térmica"
            />
          </ContentInfoWeather>
        </>
      )}

    </Container>
  );
}