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


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el id ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encuentra salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(2).then((empleado) => {
    getSalario(empleado).then((salario) => {
        console.log(`EL salario de ${ salario.nombre }, es de ${salario.salario}`);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});