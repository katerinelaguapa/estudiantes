"use strict"
//recuperar los datos  de la caja de texto y la caja de seleccion
const txtCuenta = document.querySelector("#no_cuenta");
const txtNombre = document.querySelector("#nombre");
const optCarrera = document.querySelector("#carrera");
const txtPromedio = document.querySelector("#promedio");
const btnGuardar = document.querySelector("#btn_guardar");
//recuperar el cuerpo  de la tabla
const listaAlumnos = document.querySelector("#lista_alumnos tbody");

btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();
    //generar un objeto de tipo alumno
    const alumno = {
        nocuenta: txtCuenta.value,
        nombre: txtNombre.value.toUpperCase(),
        carrera: optCarrera.value.toUpperCase(),
        promedio: Number(txtPromedio.value)
    }
    //Insertar dicho alumno en la tabla
    insertarAlumnoATabla(alumno);

});

function insertarAlumnoATabla(alumno) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td><img src="img/${alumno.nocuenta}.png" alt="" width="100" height="100"></td>
    <td>${alumno.nocuenta}</td>
    <td>${alumno.nombre}</td>
    <td>${alumno.carrera}</td>
    <td>${alumno.promedio}</td>
    `;
    listaAlumnos.appendChild(row);

}