alert('Seja Bem-Vindo ao Jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto =  parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroDigitado; 
let tentativas = 1;

while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);
    if (numeroDigitado == numeroSecreto) {
        break;
    } else {
        if (numeroDigitado > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroDigitado}.`);
         } else {
            alert(`O número secreto é maior que ${numeroDigitado}.`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você descobriu o número segreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
