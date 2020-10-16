function plano(){
    var resultado = document.getElementById("resultadof");
    var ejeX = document.getElementById("ejex");
    var ejeY = document.getElementById("ejey");
    var x = parseFloat(ejeX.value);
    var y = parseFloat(ejeY.value);
    if(x>0 && y>0){
        resultado.innerHTML = "Primer Cuadrante";
    }else if(x<0 && y>0){
        resultado.innerHTML = "Segundo Cuadrante";
    }else if(x<0 && y<0){
        resultado.innerHTML = "Tercer Cuadrante";
    }else if(x>0 && y<0){
        resultado.innerHTML = "Cuarto Cuadrante";
    }else if(x==0 && y==0){
        resultado.innerHTML = "Origen";
    }
}