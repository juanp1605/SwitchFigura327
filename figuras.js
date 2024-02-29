var lado, base, altura, radio, opcion, resultado;
const pi= 3.1416;
opcion = parseInt(prompt("Seleccione la figura que desea encontrar su area: 1. cuadrado 2. triangulo 3. circulo" ));
switch (opcion ) {
    case 1:
lado = parseInt(prompt("Ingrese el valor del lado en cm"));
resultado = lado*lado;
alert("el area del cuadrado es igual a" + resultado +  "centimetros cuadrados");

        break;
 case 2:
base = parseInt(prompt("Ingrese el valor de la base en cm"));
altura = parseInt(prompt("Ingrese el valor de la altura en cm"));
resultado = (base*altura)/2;
alert("el area de triangulo es igual a" + resultado +  "centimetros cuadrados");
  break;
case 3:
radio = parseInt(prompt("Ingrese el valor del raido en cm"));
resultado = radio*raido*pi;
alert("el area del circulo es igual a" + resultado +  "centimetros cuadrados");

break;
default: 
alert( "la opcion escogida no es valida")
break;
}