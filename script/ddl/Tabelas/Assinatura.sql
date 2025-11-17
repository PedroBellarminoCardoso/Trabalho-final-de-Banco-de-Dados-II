CREATE TABLE Assinatura (
    assinatura_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    aluno_id INT NOT NULL,
    plano_id INT NOT NULL,
    inicio DATE NOT NULL,
    termino DATE NOT NULL,
    status BIT NOT NULL DEFAULT 1,
    criado_em DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (aluno_id) REFERENCES Alunos(aluno_id),
    FOREIGN KEY (plano_id) REFERENCES Planos(plano_id)
);
