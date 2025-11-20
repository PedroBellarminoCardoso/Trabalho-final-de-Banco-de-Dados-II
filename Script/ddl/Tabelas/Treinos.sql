CREATE TABLE Treinos (
    treino_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    modalidade_id INT NOT NULL,
    instrutor_id INT NOT NULL,
    data_hora SMALLDATETIME NOT NULL,
    duracao_min TINYINT NOT NULL,
    local VARCHAR(80) NOT NULL,
    max_vagas SMALLINT DEFAULT 30,
    FOREIGN KEY (modalidade_id) REFERENCES Modalidades(modalidade_id),
    FOREIGN KEY (instrutor_id) REFERENCES Instrutores(instrutor_id)
);
