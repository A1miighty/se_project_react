function checkResponse(res) {
  return res
    .text() // Read response as text first
    .then((text) => {
      try {
        return JSON.parse(text); // Try parsing JSON
      } catch {
        return Promise.reject(`Invalid JSON response: ${text}`);
      }
    })
    .catch((err) => Promise.reject(`Error: ${err}`));
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return request(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  );
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());
  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset;
};

const getWeatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
};
