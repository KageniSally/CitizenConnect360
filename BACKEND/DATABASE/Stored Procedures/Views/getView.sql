CREATE OR ALTER PROCEDURE getView(@id VARCHAR(255))
AS
BEGIN
SELECT * FROM Views WHERE id=@id
END