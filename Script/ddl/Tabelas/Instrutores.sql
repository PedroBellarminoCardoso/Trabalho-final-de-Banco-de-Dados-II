CREATE TABLE Instrutores (
    instrutor_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    nome VARCHAR(40) NOT NULL,
    cpf CHAR(11) UNIQUE,
    telefone VARCHAR(20),
    registro_CREF VARCHAR(10) DEFAULT 'Pleno',
    ativo BIT NOT NULL DEFAULT 1,
    contratado_em SMALLDATETIME
);
