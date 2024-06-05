// Funciones de primera clase, permite asignar una funcion a una variable.
var saludar = function() {
    console.log('DiCreSoft');
}

saludar();

// Tambien se puede usar funcines como parametros
var saludar = function() {
    console.log('DiCresoft');
}

var invitar = function() {
    console.log('infotep');
}

invitar(saludar);

