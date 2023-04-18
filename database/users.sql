

CREATE DATABASE AGAPE;

USE AGAPE;

CREATE TABLE usuarios (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255)
);

INSERT INTO usuarios (nome, email, senha) VALUES ('admin', 'pedroxlzmm@gmail.com', '123456');