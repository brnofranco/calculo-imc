function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = document.getElementById('altura').value;

    const imc =  (peso / ((altura*(10**(-2)))**2)).toFixed(2);

    document.querySelector('.valor-imc').innerHTML = imc;

        if (imc < 18.5) {
            document.querySelector('.resultado').innerHTML = "Abaixo do Peso";
        } else if (imc >= 18.5 && imc < 25) {
            document.querySelector('.resultado').innerHTML = "Peso Normal";
        } else if (imc >= 25 && imc < 30){
            document.querySelector('.resultado').innerHTML = "Sobrepeso";
        } else if (imc >= 30 && imc < 35){
            document.querySelector('.resultado').innerHTML = "Obesidade Grau I";
        } else if (imc >= 35 && imc < 40){
            document.querySelector('.resultado').innerHTML = "Obesidade Grau II";
        } else {
            document.querySelector('.resultado').innerHTML = "Obesidade Grau III";
        }
}