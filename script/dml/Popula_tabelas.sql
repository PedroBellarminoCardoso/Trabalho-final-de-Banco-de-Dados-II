INSERT INTO Planos (nome, meses, preco_mensal, descricao, ativo) VALUES
('Mensal', 1, 79.90, 'Plano mensal básico', 1),
('Trimestral', 3, 69.90, 'Plano trimestral com desconto', 1),
('Semestral', 6, 59.90, 'Plano semestral', 1),
('Anual', 12, 49.90, 'Plano anual completo', 1),
('Premium', 1, 119.90, 'Acesso completo premium', 1),
('Musculação', 1, 89.90, 'Apenas musculação', 1),
('Crossfit', 1, 129.90, 'Plano de crossfit diário', 1),
('Funcional', 1, 99.90, 'Treino funcional', 1),
('Yoga', 1, 59.90, 'Aulas de Yoga', 1),
('Pilates', 1, 89.90, 'Aulas de Pilates', 1);

INSERT INTO Instrutores (nome, cpf, telefone, registro_CREF, ativo, contratado_em) VALUES
('João Silva', '12345678901', '48999910001', 'Pleno', 1, '2023-01-10'),
('Maria Souza', '12345678902', '48999910002', 'Senior', 1, '2022-05-20'),
('Carlos Lima', '12345678903', '48999910003', 'Junior', 1, '2021-03-15'),
('Ana Santos', '12345678904', '48999910004', 'Pleno', 1, '2020-09-10'),
('Bruno Rocha', '12345678905', '48999910005', 'Master', 1, '2023-02-01'),
('Fernanda Alves', '12345678906', '48999910006', 'Pleno', 1, '2022-11-22'),
('Ricardo Dias', '12345678907', '48999910007', 'Senior', 1, '2019-10-14'),
('Paula Gomes', '12345678908', '48999910008', 'Junior', 1, '2024-01-02'),
('Thiago Melo', '12345678909', '48999910009', 'Pleno', 1, '2021-06-18'),
('Juliana Prado', '12345678910', '48999910010', 'Senior', 1, '2020-02-10');

INSERT INTO Modalidades (nome, descricao, instrutor_principal_id, ativo) VALUES
('Musculação', 'Treino de força', 1, 1),
('Crossfit', 'Treino de alta intensidade', 2, 1),
('Yoga', 'Aulas de relaxamento e equilíbrio', 3, 1),
('Pilates', 'Alongamento e postura', 4, 1),
('Funcional', 'Treino funcional dinâmico', 5, 1),
('Zumba', 'Dança e cardio', 6, 1),
('Boxe', 'Treino de luta', 7, 1),
('HIIT', 'Treino intervalado intenso', 8, 1),
('Alongamento', 'Flexibilidade e postura', 9, 1),
('Aeróbico', 'Cardio leve e moderado', 10, 1);

INSERT INTO Alunos (nome, cpf, email, telefone, data_nascimento, sexo) VALUES
('Pedro Cardoso', '11111111111', 'pedro@email.com', '48999920001', '2000-01-10', 'M'),
('Ana Clara', '11111111112', 'ana@email.com', '48999920002', '1999-03-22', 'F'),
('João Pedro', '11111111113', 'jp@email.com', '48999920003', '1998-07-18', 'M'),
('Mariana Silva', '11111111114', 'mary@email.com', '48999920004', '2001-11-09', 'F'),
('Carlos Eduardo', '11111111115', 'cadu@email.com', '48999920005', '2003-04-07', 'M'),
('Letícia Rocha', '11111111116', 'leti@email.com', '48999920006', '1997-12-01', 'F'),
('Rafael Lima', '11111111117', 'rafa@email.com', '48999920007', '1996-06-28', 'M'),
('Julia Mendes', '11111111118', 'julia@email.com', '48999920008', '1999-10-20', 'F'),
('Gabriel Costa', '11111111119', 'gabriel@email.com', '48999920009', '2002-09-10', 'M'),
('Sofia Andrade', '11111111120', 'sofia@email.com', '48999920010', '2004-05-03', 'F');

INSERT INTO Assinatura (aluno_id, plano_id, inicio, termino, status) VALUES
(1, 1, '2024-01-01', '2024-02-01', 1),
(2, 2, '2024-01-15', '2024-04-15', 1),
(3, 3, '2024-02-01', '2024-08-01', 1),
(4, 4, '2024-01-10', '2025-01-10', 1),
(5, 5, '2024-03-01', '2024-04-01', 1),
(6, 6, '2024-04-01', '2024-05-01', 1),
(7, 7, '2024-03-20', '2024-04-20', 1),
(8, 8, '2024-02-15', '2024-03-15', 1),
(9, 9, '2024-04-10', '2024-05-10', 1),
(10, 10, '2024-05-01', '2024-06-01', 1);

INSERT INTO Treinos (modalidade_id, instrutor_id, data_hora, duracao_min, local, max_vagas) VALUES
(1, 1, '2024-06-01 08:00', 60, 'Sala A', 30),
(2, 2, '2024-06-01 09:00', 50, 'Sala B', 25),
(3, 3, '2024-06-01 10:00', 45, 'Sala C', 20),
(4, 4, '2024-06-01 11:00', 40, 'Sala D', 15),
(5, 5, '2024-06-01 12:00', 60, 'Sala E', 30),
(6, 6, '2024-06-01 13:00', 50, 'Sala F', 25),
(7, 7, '2024-06-01 14:00', 45, 'Sala G', 20),
(8, 8, '2024-06-01 15:00', 40, 'Sala H', 15),
(9, 9, '2024-06-01 16:00', 60, 'Sala I', 30),
(10, 10, '2024-06-01 17:00', 50, 'Sala J', 25);

INSERT INTO Pagamento (assinatura_id, valor, data_pagamento, metodo, status, referencia) VALUES
(1, 79.90, '2024-01-01', 'Pix', 1, 'REF001'),
(2, 209.70, '2024-01-15', 'Pix', 1, 'REF002'),
(3, 359.40, '2024-02-01', 'Cartao', 1, 'REF003'),
(4, 598.80, '2024-01-10', 'Pix', 1, 'REF004'),
(5, 119.90, '2024-03-01', 'Pix', 1, 'REF005'),
(6, 89.90, '2024-04-01', 'Cartao', 1, 'REF006'),
(7, 129.90, '2024-03-20', 'Pix', 1, 'REF007'),
(8, 99.90, '2024-02-15', 'Pix', 1, 'REF008'),
(9, 59.90, '2024-04-10', 'Pix', 1, 'REF009'),
(10, 89.90, '2024-05-01', 'Cartao', 1, 'REF010');

INSERT INTO Presencas (aluno_id, treino_id, presente, observacao) VALUES
(1, 1, 1, 'Compareceu'),
(2, 2, 1, 'Bom desempenho'),
(3, 3, 0, 'Faltou'),
(4, 4, 1, 'Chegou atrasada'),
(5, 5, 1, 'Compareceu'),
(6, 6, 0, 'Faltou'),
(7, 7, 1, 'Compareceu'),
(8, 8, 1, 'Bom treino'),
(9, 9, 1, 'Compareceu'),
(10, 10, 0, 'Justificou falta');
