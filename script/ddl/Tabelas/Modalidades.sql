CREATE TABLE Modalidades (
    modalidade_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    descricao VARCHAR(200),
    instrutor_principal_id INT NULL,
    ativo BIT NOT NULL DEFAULT 1,
    FOREIGN KEY (instrutor_principal_id)
        REFERENCES Instrutores(instrutor_id)
);
