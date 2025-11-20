CREATE TABLE Planos (
    plano_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    nome VARCHAR(40) NOT NULL,
    meses INT NOT NULL,
    preco_mensal DECIMAL(8,2) NOT NULL,
    descricao VARCHAR(200),
    ativo BIT NOT NULL DEFAULT 1
);
