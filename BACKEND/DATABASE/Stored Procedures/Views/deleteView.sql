CREATE OR ALTER PROCEDURE deleteView(@id VARCHAR(255))
AS
BEGIN
DELETE FROM Views WHERE id=@id
END