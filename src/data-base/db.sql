CREATE TABLE empleado (
    codigo INT NOT NULL,
    nif VARCHAR(9) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido1 VARCHAR(100) NOT NULL,
    apellido2 VARCHAR(100) NOT NULL,
    codigo_departamento INT NOT NULL,
    PRIMARY KEY (codigo)
);