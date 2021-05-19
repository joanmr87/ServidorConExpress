const contentTable = document.getElementById('contentTable');

//Tomo el template y su contenido (.content)
const templateRow = document.getElementById('contentRow').content;

//clono el template en una nueva variable
const row = templateRow.cloneNode(true);

//Modifico el valor del nodo de texto por el importado por el usuario
row.querySelector('.txtName').innerText = 'Hola';
row.querySelector('.txtAge').innerText = 65;

contentTable.appendChild(row);

console.log("probando conexion del app.js")