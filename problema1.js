let compra = +prompt("Ingrese el importe de la compra")

if (compra >= 150) {
    alert(`Accedió a un descuento de S/.${compra*0.12}. Precio total = S/.${compra*0.78}`)
} else {
    alert(`Precio total S/.${compra}`)
}