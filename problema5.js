let numero = +prompt("Ingresar el número a calcular")

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1; 
    }else {
        return (numero * factorial(numero - 1));
    }
  }
alert(`El factorial de ${numero} es ${factorial(numero)}`)