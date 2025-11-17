CREATE TABLE Alunos (
    aluno_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE,
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(20),
    data_nascimento DATE,
    sexo VARCHAR(1) DEFAULT 'O',
    criado_em DATETIME DEFAULT GETDATE(),
    ativo BIT NOT NULL DEFAULT 1
);
