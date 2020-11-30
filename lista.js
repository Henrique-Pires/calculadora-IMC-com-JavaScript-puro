var imc;
var altura;
var peso;
var resultado;

function calcular(){
	peso=document.getElementById('peso').value;
	altura=document.getElementById('altura').value;
	imc=peso/(altura*altura);

	if(imc < 17){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/>seu resultado foi:' + imc.toFixed(2) + ' <h3 style="color:#ff0000">Cuidado voce esta muito a baixo do peso.</h3>';
		document.getElementById('peso').value= '';
		document.getElementById('altura').value= '';
		return false;
	}else if(imc > 17 && imc < 18.49){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/>seu resultado foi:' + imc.toFixed(2) + ' <h3 style="color:#f9d514">Atencao voce esta a baixo do peso.</h3> ';
		document.getElementById('peso').value= '';
		document.getElementById('altura').value= '';
		return false;
	}else if(imc > 18.50 && imc < 24.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/>seu resultado foi:' + imc.toFixed(2) + ' <h3 style="color:#0045ff85">Parabens sei IMC esta normal.</h3> ';
		document.getElementById('peso').value= '';
		document.getElementById('altura').value= '';
		return false;
	}else if(imc > 25 && imc < 29.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/>seu resultado foi:' + imc.toFixed(2) + ' <h3 style="color:#ff0000">Muito cuidado voce esta acima do peso.</h3> ';
		document.getElementById('peso').value= '';
		document.getElementById('altura').value= '';
		return false;
	}else if(imc > 30 && imc < 34.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/>seu resultado foi:' + imc.toFixed(2) + ' <h3 style="color:#ff0000">Cuidado Obesidade I .</h3> ';
		document.getElementById('peso').value= '';
		document.getElementById('altura').value= '';
		return false;
	}else if(imc > 35 && imc < 39.99){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/>seu resultado foi:' + imc.toFixed(2) + ' <h3 style="color:#ff0000">Cuidado Obesidade II (severa).</h3> ';
		document.getElementById('peso').value= '';
		document.getElementById('altura').value= '';
		return false;
	}else if(imc > 40){
		resultado = document.getElementById('resultado');
		resultado.innerHTML = '<br/>seu resultado foi:' + imc.toFixed(2) + ' <h3 style="color:#ff0000">Cuidado Obesidade III (mórbida) .</h3> ';
		document.getElementById('peso').value= '';
		document.getElementById('altura').value= '';
		return false;
	}	
};

