CREATE TABLE Presencas (
    presenca_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    aluno_id INT NOT NULL,
    treino_id INT NOT NULL,
    presente BIT NOT NULL DEFAULT 0,
    registrado_em DATETIME DEFAULT GETDATE(),
    observacao VARCHAR(200),
    FOREIGN KEY (aluno_id) REFERENCES Alunos(aluno_id),
    FOREIGN KEY (treino_id) REFERENCES Treinos(treino_id)
);
