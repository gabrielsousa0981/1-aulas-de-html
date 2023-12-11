// RECEBE A CHAVE DA API

 const apiKey = '45ff4559a579cc97190a8340f04a8a36';

// ASSICRONA

  async function getWeather(){


  const cityInput = document.getElementById('city');


  const city = cityInput.value;



//CHAMADA DA API

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br`);



//RESPOSTA DA API E TRANSFORMANDO EM JSON








}



