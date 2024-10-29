// script.js

// step one => fetch data from API, process it
// step two => console.log correct data retrieved
// step three => display data

const locationInput = document.getElementById("location-input");
const btn = document.getElementById("search-btn");
const currentTemp = document.getElementById("current-temp");
const locationTitle = document.getElementById("location-title");
const dailyHigh = document.getElementById("high-temp");
const dailyLow = document.getElementById("low-temp");

const sunriseVal = document.getElementById("sunrise-val");
const sunsetVal = document.getElementById("sunset-val");
const rainVal = document.getElementById("rain-val");
const humidityVal = document.getElementById("humidity-val");
const windsVal = document.getElementById("winds-val");

const feelsVal = document.getElementById("feels-val");
const precipitationVal = document.getElementById("precipitation-val");
const pressureVal = document.getElementById("pressure-val");
const visibilityVal = document.getElementById("visibility-val");
const uvIndexVal = document.getElementById("uvIndex-val");

const weatherSummary = document.getElementById("weather-summary");

btn.addEventListener("click", getWeather);

async function getWeather(e) {
  try {
    let searchVal = locationInput.value;
    e.preventDefault(); // submitting
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchVal}?unitGroup=metric&key=AJC9EQ2NMXWSC4QCNXLXSVMUG&contentType=json`, // unique api key present and search term appended in URL
      { mode: "cors" }
    );
    const selectedWeather = await response.json();

    // DAILY FORECAST

    console.log(selectedWeather);
    console.log(selectedWeather.currentConditions.temp);
    locationTitle.textContent = selectedWeather.resolvedAddress;
    currentTemp.textContent = selectedWeather.currentConditions.temp + "°";
    dailyHigh.textContent = "High: " + selectedWeather.days[0].tempmax + "°";
    dailyLow.textContent = "Low: " + selectedWeather.days[0].tempmin + "°";
    sunriseVal.innerHTML = selectedWeather.currentConditions.sunrise;
    sunsetVal.innerHTML = selectedWeather.currentConditions.sunset;
    rainVal.innerHTML = selectedWeather.currentConditions.precipprob + "%";
    humidityVal.innerHTML = selectedWeather.currentConditions.humidity + "%";
    windsVal.innerHTML = selectedWeather.currentConditions.windgust + "km/hr";
    feelsVal.innerHTML = selectedWeather.currentConditions.feelslike + "°";
    precipitationVal.innerHTML =
      selectedWeather.currentConditions.precip + "mm";
    pressureVal.innerHTML = selectedWeather.currentConditions.pressure + "hPa";
    visibilityVal.innerHTML =
      selectedWeather.currentConditions.visibility + "km";
    uvIndexVal.innerHTML = selectedWeather.currentConditions.uvindex;
    weatherSummary.innerHTML =
      "Today: " +
      selectedWeather.currentConditions.conditions +
      ". " +
      "The temperature will peak at " +
      selectedWeather.days[0].tempmax +
      "°" +
      ". " +
      "The low will be " +
      selectedWeather.days[0].tempmin +
      "°" +
      ".";

    // HOURLY FORECAST

    let twelve = document.getElementById("12hr");
    twelve.innerHTML = selectedWeather.days[0].hours[12].temp;

    let thirteen = document.getElementById("13hr");
    thirteen.innerHTML = selectedWeather.days[0].hours[13].temp;

    let fourteen = document.getElementById("14hr");
    fourteen.innerHTML = selectedWeather.days[0].hours[14].temp;

    let fifteen = document.getElementById("15hr");
    fifteen.innerHTML = selectedWeather.days[0].hours[15].temp;

    let sixteen = document.getElementById("16hr");
    sixteen.innerHTML = selectedWeather.days[0].hours[16].temp;

    let seventeen = document.getElementById("17hr");
    seventeen.innerHTML = selectedWeather.days[0].hours[17].temp;

    let eighteen = document.getElementById("18hr");
    eighteen.innerHTML = selectedWeather.days[0].hours[18].temp;

    let nineteen = document.getElementById("19hr");
    nineteen.innerHTML = selectedWeather.days[0].hours[19].temp;

    let twenty = document.getElementById("20hr");
    twenty.innerHTML = selectedWeather.days[0].hours[20].temp;

    let twentyone = document.getElementById("21hr");
    twentyone.innerHTML = selectedWeather.days[0].hours[21].temp;

    let twentytwo = document.getElementById("22hr");
    twentytwo.innerHTML = selectedWeather.days[0].hours[22].temp;

    let twentythree = document.getElementById("23hr");
    twentythree.innerHTML = selectedWeather.days[0].hours[23].temp;

    let twentyfour = document.getElementById("24hr");
    twentyfour.innerHTML = selectedWeather.days[1].hours[0].temp;

    // WEEKLY FORECAST

    let day1Forecast = document.getElementById("day1Forecast");
    let day1Conditions = document.getElementById("day1Conditions");
    let day1High = document.getElementById("day1High");
    let day1Low = document.getElementById("day1Low");
    let day1Rain = document.getElementById("day1Rain");

    day1Forecast.textContent = new Date(
      selectedWeather.days[1].datetime
    ).toDateString();
    day1Conditions.innerHTML = selectedWeather.days[1].conditions;
    day1High.innerHTML = selectedWeather.days[1].tempmax;
    day1Low.innerHTML = selectedWeather.days[1].tempmin;
    day1Rain.innerHTML = selectedWeather.days[1].precipprob;

    let day2Forecast = document.getElementById("day2Forecast");
    let day2Conditions = document.getElementById("day2Conditions");
    let day2High = document.getElementById("day2High");
    let day2Low = document.getElementById("day2Low");
    let day2Rain = document.getElementById("day2Rain");

    day2Forecast.textContent = new Date(
      selectedWeather.days[2].datetime
    ).toDateString();
    day2Conditions.innerHTML = selectedWeather.days[2].conditions;
    day2High.innerHTML = selectedWeather.days[2].tempmax;
    day2Low.innerHTML = selectedWeather.days[2].tempmin;
    day2Rain.innerHTML = selectedWeather.days[2].precipprob;

    let day3Forecast = document.getElementById("day3Forecast");
    let day3Conditions = document.getElementById("day3Conditions");
    let day3High = document.getElementById("day3High");
    let day3Low = document.getElementById("day3Low");
    let day3Rain = document.getElementById("day3Rain");

    day3Forecast.textContent = new Date(
      selectedWeather.days[3].datetime
    ).toDateString();
    day3Conditions.innerHTML = selectedWeather.days[3].conditions;
    day3High.innerHTML = selectedWeather.days[3].tempmax;
    day3Low.innerHTML = selectedWeather.days[3].tempmin;
    day3Rain.innerHTML = selectedWeather.days[3].precipprob;

    let day4Forecast = document.getElementById("day4Forecast");
    let day4Conditions = document.getElementById("day4Conditions");
    let day4High = document.getElementById("day4High");
    let day4Low = document.getElementById("day4Low");
    let day4Rain = document.getElementById("day4Rain");

    day4Forecast.textContent = new Date(
      selectedWeather.days[4].datetime
    ).toDateString();
    day4Conditions.innerHTML = selectedWeather.days[4].conditions;
    day4High.innerHTML = selectedWeather.days[4].tempmax;
    day4Low.innerHTML = selectedWeather.days[4].tempmin;
    day4Rain.innerHTML = selectedWeather.days[4].precipprob;

    let day5Forecast = document.getElementById("day5Forecast");
    let day5Conditions = document.getElementById("day5Conditions");
    let day5High = document.getElementById("day5High");
    let day5Low = document.getElementById("day5Low");
    let day5Rain = document.getElementById("day5Rain");

    day5Forecast.textContent = new Date(
      selectedWeather.days[5].datetime
    ).toDateString();
    day5Conditions.innerHTML = selectedWeather.days[5].conditions;
    day5High.innerHTML = selectedWeather.days[5].tempmax;
    day5Low.innerHTML = selectedWeather.days[5].tempmin;
    day5Rain.innerHTML = selectedWeather.days[5].precipprob;

    let day6Forecast = document.getElementById("day6Forecast");
    let day6Conditions = document.getElementById("day6Conditions");
    let day6High = document.getElementById("day6High");
    let day6Low = document.getElementById("day6Low");
    let day6Rain = document.getElementById("day6Rain");

    day6Forecast.textContent = new Date(
      selectedWeather.days[6].datetime
    ).toDateString();
    day6Conditions.innerHTML = selectedWeather.days[6].conditions;
    day6High.innerHTML = selectedWeather.days[6].tempmax;
    day6Low.innerHTML = selectedWeather.days[6].tempmin;
    day6Rain.innerHTML = selectedWeather.days[6].precipprob;

    let day7Forecast = document.getElementById("day7Forecast");
    let day7Conditions = document.getElementById("day7Conditions");
    let day7High = document.getElementById("day7High");
    let day7Low = document.getElementById("day7Low");
    let day7Rain = document.getElementById("day7Rain");

    day7Forecast.textContent = new Date(
      selectedWeather.days[7].datetime
    ).toDateString();
    day7Conditions.innerHTML = selectedWeather.days[7].conditions;
    day7High.innerHTML = selectedWeather.days[7].tempmax;
    day7Low.innerHTML = selectedWeather.days[7].tempmin;
    day7Rain.innerHTML = selectedWeather.days[7].precipprob;
  } catch (err) {
    console.log(err);
  }
}

getWeather();
