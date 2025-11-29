CREATE PROCEDURE sp_RelatorioReceitaPorPlano
    @NomePlano VARCHAR(40),
    @Ano INT
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM Planos WHERE nome = @NomePlano)
    BEGIN
        RAISERROR('O plano especificado "%s" não foi encontrado.', 16, 1, @NomePlano);
        RETURN;
    END

    SELECT
        P.nome AS NomeDoPlano,
        @Ano AS AnoReferencia,
        MONTH(PG.data_pagamento) AS Mes,
        SUM(PG.valor) AS ReceitaTotalNoMes
    FROM Pagamento PG
    JOIN Assinatura A ON PG.assinatura_id = A.assinatura_id
    JOIN Planos P ON A.plano_id = P.plano_id
    WHERE P.nome = @NomePlano
      AND YEAR(PG.data_pagamento) = @Ano
    GROUP BY P.nome, MONTH(PG.data_pagamento)
    ORDER BY Mes;
END;
GO
