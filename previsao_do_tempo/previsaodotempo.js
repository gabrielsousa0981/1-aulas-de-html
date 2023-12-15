// RECEBE A CHAVE DA API.
const apiKey = '45ff4559a579cc97190a8340f04a8a36';

// A função getWeather é assíncrona para buscar os dados do clima.
async function getWeather() {
  const cityInput = document.getElementById('city');
  const city = cityInput.value;

  try {
    // CHAMADA DA API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br`);

    // RESPOSTA DA API E TRANSFORMANDO EM JSON.
    const data = await response.json();

    // Verifica se a resposta foi bem-sucedida (código de resposta 200).
    if (data.cod === 200) {
      const divvazia = document.getElementById('weatherInfo');

      const descricaoTempo = data.weather[0].description;
      const temperature = (data.main.temp - 273.15).toFixed(1);
      const humidade = data.main.humidity;
      const tempMin = (data.main.temp_min - 273.15).toFixed(1);
      const tempMax = (data.main.temp_max - 273.15).toFixed(1);

      divvazia.innerHTML = `
        <h2>Previsão para ${city}</h2>
        <p>Descrição do Tempo: ${descricaoTempo}</p>
        <p>Temperatura: ${temperature}°C</p>
        <p>Umidade: ${humidade}%</p>
        <p>Temperatura Mínima: ${tempMin}°C</p>
        <p>Temperatura Máxima: ${tempMax}°C</p>
      `;
    } else {
      // Mostra uma mensagem se a cidade não foi encontrada
      const divvazia = document.getElementById('weatherInfo');
      divvazia.innerHTML = `<p>Cidade não encontrada</p>`;
    }
  } catch (error) {
    // Manipulação de erros caso ocorra algum problema na requisição
    const divvazia = document.getElementById('weatherInfo');
    divvazia.innerHTML = `<p>Ocorreu um erro ao obter os dados do clima. Por favor, tente novamente mais tarde.</p>`;
  }
}
