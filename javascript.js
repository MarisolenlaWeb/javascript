var a = "hola";
var b = 2;
var c = true;
var d = "3";





// alert("a : "+a+", b : "+b+", c : "+c);

console.log("a : "+a+", b : "+b+", c : "+c);

console.log("suma:" +(b+Number(d)));



//Funcion que hace una suma
function suma(num1, num2){

	var suma = num1 + num2;

	return suma;
}
 



console.log(suma(1,1));


 // Funcion que compara dos datos

function comparar(dato1, dato2){

	var comparacion= "comparacion invalida";

	if (dato1==dato2){
		comparacion= "los datos son iguales"
	}else{
		comparacion= "los datos no son iguales"
	};

	return comparacion;
}

// Funcion que dice si el valor es numerico o no

function validar(parametro1, parametro2){

	var msj = "";

	if ( (typeof(parametro1)== "string")  || (typeof(parametro2)== "string") ) {
		msj="Los datos no son numericos"
	} else{
		var suma = parametro1 + parametro2;
		msj="Los datos son numericos y la suma es: "+suma;
	};

	return msj;
}

// Funcion resultado numerico


function numeros(numero1){

	var respuesta= "No es un numero";

	if (typeof(numero1)=="number") {
		respuesta = numero1;
	}else{
		//No es numero
		if (numero1/1) {
			respuesta = Number(numero1);

		}
	};


