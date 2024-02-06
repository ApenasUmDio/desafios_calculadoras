function calcularDivisaoLucros() {
    var lucro = parseFloat(document.getElementById('lucro').value);
    var socios = parseFloat(document.getElementById('socios').value);

    if (isNaN(lucro) || isNaN(socios)) {
        alert('Por favor digite numeros validos');
        return;
    }
    var resultado = lucro / socios
    document.getElementById('resultado').innerText = 'O lucro dividido será de: R$' + resultado;
}