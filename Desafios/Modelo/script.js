// criar as variaveis
function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // verificar se os valores sao numero(isNaN) || (isNaN)
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, digite valores válidos.');
        return;
    }
    var resultado = num1 + num2;

    document.getElementById('resultado').innerText = 'Resultado:' + resultado;
}