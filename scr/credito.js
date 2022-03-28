
function sumar(){
    var salario = parseInt(document.getElementById('salario').value)
    var vivienda = parseInt(document.getElementById('vivienda').value)
    
    var result = salario + vivienda;
    document.getElementById('resultado').value = result;
}