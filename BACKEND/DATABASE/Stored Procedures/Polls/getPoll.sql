CREATE OR ALTER PROCEDURE getPoll
    @id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Polls WHERE id = @id;
END
