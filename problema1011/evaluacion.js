function volumen(){
    var resultado = document.getElementById("resultadof");
    var dato = document.getElementById("datop");
    var radio = parseFloat(dato.value);
    var calculo = ((4.0/3)*3.14159)*(radio*radio*radio);
    //resultado.value = calculo.toString;
    resultado.innerHTML = "Volumen = " + calculo.toFixed(5);
}