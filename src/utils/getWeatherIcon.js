function getWeatherIcon(id, cb) {
  const iconLink =
    'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/';
  switch (true) {
    case id >= 200 && id < 232:
      cb(`${iconLink}thunder.svg`);
      break;
    case id >= 300 && id <= 321:
      cb(`${iconLink}rainy-2.svg`);
      break;
    case id >= 500 && id <= 521:
      cb(`${iconLink}rainy-6.svg`);
      break;
    case id >= 600 && id <= 622:
      cb(`${iconLink}snowy-6.svg`);
      break;
    case id >= 701 && id <= 781:
      cb(`${iconLink}cloudy.svg)`);
      break;
    case id === 800:
      cb(`${iconLink}cloudy-day-1.svg`);
      break;
    default:
      cb(`${iconLink}cloudy.svg`);
  }
}

export default getWeatherIcon;
