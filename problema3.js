let nombre = prompt("Ingresar el nombre del trabajador")
let sueldo = prompt("Ingresar su sueldo básico")
let hijos = prompt("Ingresar cuantos hijos tiene")

if (hijos>0) {
    alert(`El trabajador ${nombre} tiene una bonificación de ${sueldo*0.07} y su sueldo será de ${sueldo*1.07}`)
} else {
    alert(`El trabajador ${nombre} tiene un sueldo de ${sueldo}`)
}