CREATE DATABASE vetdb;

USE vetdb;

CREATE TABLE
    usuarios(
        id INTEGER NOT NULL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        apellido VARCHAR(100) NOT NULL,
        correo VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        rol VARCHAR(50) NOT NULL,
        estado BOOLEAN NOT NULL,
        celular VARCHAR(20) NOT NULL,
        createdAt TIMESTAMP,
        updatedAt TIMESTAMP
    );