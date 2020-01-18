import React, { useState, useEffect } from 'react';
import { Spinner, Stack, Flex } from '@chakra-ui/core';
import { usePosition } from 'use-position';
import {
  ThemeProvider,
  ErrorMessage,
  Header,
  WeatherDesc,
  ShowTemps,
  Icon,
} from '../../components';
import { getWeatherInfo, getWeatherIcon } from '../../utils';

function App() {
  const { latitude, longitude, error } = usePosition(true, {
    enableHighAccuracy: true,
  });
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [weatherIconUrl, setWeatherIconUrl] = useState(null);

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined)
      getWeatherInfo(latitude, longitude, setWeatherInfo);
  }, [latitude, longitude]);

  useEffect(() => {
    getWeatherIcon(weatherInfo?.weather[0]?.id, setWeatherIconUrl);
  }, [weatherInfo]);

  return (
    <ThemeProvider>
      <Header city={weatherInfo?.name} country={weatherInfo?.sys?.country} />
      <Stack align="center" justify="center" bg="#58a9dc" w="100%" h="85vh" color="white">
        {!error ? (
          <>
            {weatherInfo ? (
              <Flex align="center" justify="center" direction={{ base: 'column', md: 'row' }}>
                <Stack align="center" justify="center">
                  <Icon src={weatherIconUrl} />
                  <WeatherDesc>{weatherInfo.weather[0].description}</WeatherDesc>
                </Stack>
                <ShowTemps
                  temp={weatherInfo.main.temp}
                  maxTemp={weatherInfo.main.temp_max}
                  minTemp={weatherInfo.main.temp_min}
                />
              </Flex>
            ) : (
              <Spinner size="xl" />
            )}
          </>
        ) : (
          <ErrorMessage>
            Você precisa permitir o acesso a localização no seu navegador!
          </ErrorMessage>
        )}
      </Stack>
    </ThemeProvider>
  );
}

export default App;
