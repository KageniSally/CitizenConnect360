CREATE OR ALTER PROCEDURE forgotPass(@email VARCHAR(255),@password VARCHAR(255))
AS
BEGIN
UPDATE Users SET password=@password WHERE email=@email AND isDeleted=0
END