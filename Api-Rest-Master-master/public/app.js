const contentTable = document.getElementById('contentTable');

//Tomo el template y su contenido (.content)
const templateRow = document.getElementById('contentRow').content;


function addRow(name, age) {
//clono el template en una nueva variable
const row = templateRow.cloneNode(true);

//Modifico el valor del nodo de texto por el importado por el usuario
row.querySelector('.txtName').innerText = name;
row.querySelector('.txtAge').innerText = age;

contentTable.appendChild(row);
}

addRow('kaka', 45);
addRow('kakd', 34);



