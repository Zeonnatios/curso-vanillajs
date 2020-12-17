function calcularIMC(peso, altura, cb) {
  if (peso === undefined || altura === undefined) {
    throw Error("Informar peso e altura");
  }

  let imc = peso / (altura * altura);

  if (typeof cb === "function") {
    return cb(imc);
  }

  return imc;
}

function classificarIMC(imc) {
  if (imc >= 16 && imc <= 16.9) {
    return "Muito abaixo do peso";
  } else if (imc >= 17 && imc <= 18.4) {
    return "Abaixo do Peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso Normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Acima do Peso";
  } else if (imc >= 30 && imc <= 34.9) {
    return "Obesidade Grau I";
  } else if (imc >= 35 && imc <= 40) {
    return "Obesidade Grau II";
  } else if (imc >= 40) {
    return "Obesidade Grau III";
  } else {
    if (imc === null) {
      console.log("Informar IMC");
    }
  }
}

const imc = calcularIMC(104, 1.75);
const result = calcularIMC(104, 1.75, classificarIMC);

console.log("Seu IMC: ", imc);
console.log("Classificação: ",result);