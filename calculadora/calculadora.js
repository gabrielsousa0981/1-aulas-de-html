//Declaração de variáveis
var operandoA = 0;
var operandoB = 0;
var operador = "";

//Função para limpar a calculadora
function limpar() {
  operandoA = 0;
  operandoB = 0;
  operador = "";
  document.getElementById("resultado").textContent = "";
}

//Função para somar dois números
function somar() {
   operandoA = parseInt(document.getElementById ("operandoA").value);
   operandoB = parseInt(document.getElementById ("operandoB").value);

  resultado = operandoA + operandoB;
  mostrarResultado(resultado);
}

//Função para subtrair dois números
function subtrair() {
    operandoA = parseInt(document.getElementById ("operandoA").value);
    operandoB = parseInt(document.getElementById ("operandoB").value);



  resultado = operandoA - operandoB;
  mostrarResultado(resultado);
}

//Função para multiplicar dois números

function multiplicar() {
  resultado = operandoA * operandoB;
  mostrarResultado(resultado);
}

//Função para dividir dois números


function dividir() {
  if (operandoB === 0) {
    alert("Divisão por zero não é permitida.");
  } else {
    resultado = operandoA / operandoB;
    mostrarResultado(resultado);
  }
}

//Função para mostrar o resultado
function mostrarResultado(resultado) {
  document.getElementById("resultado").textContent = resultado;
}

//Eventos de clique nos botões
document.getElementById("limpar").addEventListener("click",limpar);
document.getElementById("somar").addEventListener("click",somar);
document.getElementById("subtrair").addEventListener("click",subtrair);
document.getElementById("multiplicar").addEventListener("click",multiplicar);
document.getElementById("dividir").addEventListener("click",dividir);
