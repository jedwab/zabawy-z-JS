var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weatherAdjective = ["sunny", "windy", "snowy", "gloomy", "rainy", "cloudy", "foggy"];
var temperature = ["20", "10", "-5", "0"];

var randomWeekDay = weekDay[Math.floor(Math.random() * weekDay.length)];
var randomWeatherAdjective = weatherAdjective[Math.floor(Math.random() * weatherAdjective.length)];
var randomTemperature = temperature[Math.floor(Math.random() * temperature.length)];

var randomWeather = "On " + randomWeekDay + " the weather will be " + randomWeatherAdjective + " and the temperature will be " + randomTemperature +
" Celsius degree. ";

var comunicate = alert(randomWeather);
comunicate();
