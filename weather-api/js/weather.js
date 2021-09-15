const search =()=> {
    const input = document.getElementById('search-field');
    const inputText = input.value;
    console.log(inputText);
    const apiKey = 'fcf4b7f25cf09e8cea2a0d54a12cca65';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}`
    console.log(apiKey)
 fetch(url)
 .then(res => res.json())
 .then(data => diplayData(data))
}

const diplayData = (data) => {
    console.log(data);
    const weatherReport = document.getElementById('weather-report');
    const div = document.createElement('div');
    const temp = Math.round(data.main.temp-273);
    div.innerHTML = `
                    <h2>${data.name}</h2> 
                    <h3>${data.weather[0].description}</h3> 
                    <h4>${temp}&deg;C</h4>  `
    weatherReport.appendChild(div);
}