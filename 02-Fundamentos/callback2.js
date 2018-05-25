let empleados = [{
    id: 1,
    nombre: 'Leonardo'
}, {
    id: 2,
    nombre: 'Carlos'
}, {
    id: 3,
    nombre: 'Cristian'
}];


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id, cbGetEmpleado) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        cbGetEmpleado(`No existe un empleado con el ID ${ id }`);
    } else {
        cbGetEmpleado(null, empleadoDB);
    }
}

let getSalario = (empleado, cbGetSalario) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        cbGetSalario(`No se encuentra salario para el usuario ${empleado.nombre}`);
    } else {
        cbGetSalario(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log(`EL salario de ${ salario.nombre }, es de ${salario.salario}`);
    });
});