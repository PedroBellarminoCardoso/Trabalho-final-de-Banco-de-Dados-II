CREATE FUNCTION fn_ContarFaltasAluno (@AlunoID INT)
RETURNS INT
AS
BEGIN
    DECLARE @TotalFaltas INT;

    SELECT @TotalFaltas = COUNT(presenca_id)
    FROM Presencas
    WHERE aluno_id = @AlunoID
    AND presente = 0;

    RETURN ISNULL(@TotalFaltas, 0); 
END;
GO
