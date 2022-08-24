function Mudarestado(el,el2) {
    var display = document.getElementById(el).style.display;

    if (display == "block") {
        document.getElementById(el).style.display = 'none';
        document.getElementById(el2).style.display = 'block';
    } 
    else {
        document.getElementById(el).style.display = 'none';
        document.getElementById(el2).style.display = 'block';
    }
}



var botaoCalcular = document.querySelector('button#botaoCalcular');
botaoCalcular.addEventListener("click", function(e){
    var peso = document.querySelector("input#peso");            
    if(peso.value == 0 || peso.value == null){
        alert("Digite o peso.");
        peso.focus();
        return;
    }
    
    var altura = document.querySelector("input#altura");
    if(altura.value == 0 || altura.value == null){
        alert("Digite o altura.");
        altura.focus();
        return;
    }
    
    altura = altura.value / 100;
    var imc = (peso.value / (altura * altura));
    
    var resultado = document.querySelector("p#imc");
    if (imc < 18.5) {
        resultado.innerHTML = "Magreza, quando o resultado é menor que 18,5 kg/m2";
        resultado.style.color = "orange";
    } else if (imc >= 18.5 && imc < 24.9){
        resultado.innerHTML = "Normal, quando o resultado está entre 18,5 e 24,9 kg/m2";
        resultado.style.color = "green";
    } else if (imc >= 24.9 && imc < 30){
        resultado.innerHTML = "Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2";
        resultado.style.color = "orange";
    } else if (imc >= 30){
        resultado.innerHTML = "Obesidade, quando o resultado é maior que 30 kg/m2";
        resultado.style.color = "red";
    }
    Mudarestado('entrada','resultado');
});



    var botaoCalcularNovamente = document.getElementById("botaoCalcularNovamente");
    botaoCalcularNovamente.addEventListener("click", 
    function(){
    document.querySelector("input#peso").value = null;
    document.querySelector("input#altura").value = null;});

