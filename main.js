const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const primeiroInput = document.querySelector('.input1')
const segundoInput = document.querySelector('.input2');
const calcular = document.querySelector('.calcular');
const tipoDeImc = document.querySelector('.imc'); 


calcular.addEventListener("click", () => {

	const IMC = peso.value / (altura.value * altura.value);
	const resultadoFinal = (Math.round(IMC * 100) / 100).toFixed(1);

		function checkingTheBmi(){
			if (resultadoFinal <= 16 && resultadoFinal < 16.9){
				tipoDeImc.innerText = `Muito abaixo do peso, o seu IMC é igual à ${resultadoFinal}`;
			}
			else if (resultadoFinal >= 17 && resultadoFinal < 18.4){
				tipoDeImc.innerText = `Abaixo do peso, o seu IMC é igual à ${resultadoFinal}`;
			}
			else if (resultadoFinal >= 18.5 && resultadoFinal < 24.9){
				tipoDeImc.innerText = `Peso ideal, o seu IMC é igual à ${resultadoFinal}`;
			}
			else if (resultadoFinal >= 25 && resultadoFinal < 29.9){
				tipoDeImc.innerText = `Acima do peso, o seu IMC é igual à ${resultadoFinal}`;
			}
			else if (resultadoFinal >= 30 && resultadoFinal < 34.9){
				tipoDeImc.innerText = `Obesidade grau I, o seu IMC é igual à ${resultadoFinal}`;
			}
			else if (resultadoFinal >= 35 && resultadoFinal < 40){
				tipoDeImc.innerText = `Obesidade grau II, o seu IMC é igual à ${resultadoFinal}`;
			}
			else if(resultadoFinal > 40){
				tipoDeImc.innerText = `Obesidade grau III, o seu IMC é igual à ${resultadoFinal}`;
			}
		}
		checkingTheBmi();

		function isTheInputaNaN(){
			if (isNaN(altura) || isNaN(peso)) {
				tipoDeImc.innerText = 'Insira números válidos de maneira correta!';
			}
		}
		function isaNaNTheResult(){
			if (isNaN(resultadoFinal)){
				tipoDeImc.innerText = 'Insira números válidos de maneira correta!';
			}
		}
		isaNaNTheResult();
})
