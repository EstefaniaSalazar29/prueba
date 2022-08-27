const { Request, Response } = require ('express');
const pool = require ('../data-base/conection');
const { QueryResult } = require ('pg');

//CRUD
getEmpleado = async (req, res) => {
    const response = await pool.query('SELECT * FROM empleado');
    try {
        return res.status(201).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al traer los empleados',
        });
    }
}


 postEmpleado = async (req, res) => {
    const { codigo, nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
    const response = await pool.query
        ('INSERT INTO empleado (codigo, nif, nombre, apellido1, apellido2, codigo_departamento) VALUES ($1, $2, $3, $4, $5, $6)',
            [codigo, nif, nombre, apellido1, apellido2, codigo_departamento]);
    try {
        return res.status(201).json(`Empleado creado con exito`);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al crear el empleado',
        });
    } 
};

 putEmpleado = async (req, res) => {
    const codigo_empleado = req.params.codigo;
    const { nif, nombre, apellido1, apellido2, codigo_departamento} = req.body;
    const response = await pool.query
        ('UPDATE empleado SET nif=$1, nombre=$2, apellido1=$3, apellido2=$4, codigo_departamento=$5 WHERE codigo=$6',
            [nif, nombre, apellido1, apellido2, codigo_departamento, codigo_empleado]);
    try {
        return res.status(201).json(`Empleado con codigo: ${codigo_empleado}, editado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al editar el empleado',
        });
    }
}

 deleteEmpleado = async (req, res) => {
    let codigo = req.params.codigo;
    const response = await pool.query('DELETE FROM empleado WHERE codigo = $1', [codigo]);
    try {
        return res.status(201).json(`Empleado con codigo: ${codigo}, eliminado satisfactoriamente`);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al eliminar el empleado',
        });
    }
}

module.exports = { getEmpleado, postEmpleado, putEmpleado, deleteEmpleado }
