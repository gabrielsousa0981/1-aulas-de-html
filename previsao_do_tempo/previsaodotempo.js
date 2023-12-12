// RECEBE A CHAVE DA API.


    const apiKey = '45ff4559a579cc97190a8340f04a8a36';


// A declaração async function define uma função assíncrona, que retorna um objeto.


    async function getWeather() {



       const cityInput = document.getElementById('city');



    const city = cityInput.value;



    }


// CHAMADA DA API


   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br`);



// RESPOSTA DA API E TRANSFORMANDO EM JSON.


   const data = await response.json();



// 200 indica uma resposta bem-sucedida da cidade encontrada na API.

if (data.cod === 200) {


   const divvazia = document.getElementById('weatherInfo');



   const descricaoTempo = data.weather[0].description;




     const temperature = (data.main.temp - 273.15).toFixed[1];




     const humidade = (data.main.humidity);



     const tempMin = (data.main.temp_min - 273.15).toFixed[1];



   const tempMax = (data.main.temp_max - 273.15).toFixed[1]


   divvazia.innerHTML = `

<h2>Previsão para ${city}</h2>
<p>Descrição do Tempo: ${descricaoTempo}</p>
<p>Temperatura: ${temperature}°C</p>
<p>Umidade: ${humidade}%<p>
<p>Temperatura Mínima: ${tempMin}%<p>
<p>Temperatura Máxima: ${tempMax}%<p>

`;


}


  
