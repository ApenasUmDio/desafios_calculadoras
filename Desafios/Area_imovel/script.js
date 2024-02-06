function calcularArea() {
    var largura = parseFloat(document.getElementById('largura').value);
    var comprimento = parseFloat(document.getElementById('comprimento').value);

    if (isNaN(largura) || isNaN(comprimento)) {
        alert('Por favor digite numeros validos.');
        return;
    }
    var resultado = largura * comprimento;
    document.getElementById('resultado').innerText = "A area do imovel sera de:" + resultado;
}