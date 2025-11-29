CREATE INDEX IX_Assinatura_Inicio ON Assinatura (inicio);
CREATE INDEX IX_Presencas_Falta_Aluno ON Presencas (presente, aluno_id);
CREATE INDEX IX_Treinos_ModalidadeID ON Treinos (modalidade_id);
CREATE INDEX IX_Alunos_Sexo_Nascimento ON Alunos (sexo, data_nascimento);
