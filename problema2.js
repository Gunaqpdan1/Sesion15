let alumno = prompt("Ingrese nombre de alumno")
let nota = +prompt("Ingrese la nota de su examen parcial")
let notaF = +prompt("Ingrese la nota de su examen final")
let practicas = +prompt("Ingrese el promedio de prácticas")

promedioF= (nota+practicas+notaF+notaF)/4

if (promedioF>11) {
    alert(`El alumno ${alumno} esta aprobrado y tiene ${promedioF} de promedio final`)
} else {
    
}