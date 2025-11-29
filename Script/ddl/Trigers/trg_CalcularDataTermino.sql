CREATE TRIGGER trg_CalcularDataTermino
ON Assinatura
INSTEAD OF INSERT
AS
BEGIN
    INSERT INTO Assinatura (aluno_id, plano_id, inicio, termino, status, criado_em)
    SELECT
        i.aluno_id,
        i.plano_id,
        i.inicio,
        DATEADD(month, P.meses, i.inicio) AS termino_calculado,
        i.status,
        i.criado_em
    FROM inserted i
    JOIN Planos P ON i.plano_id = P.plano_id;
END;
GO
