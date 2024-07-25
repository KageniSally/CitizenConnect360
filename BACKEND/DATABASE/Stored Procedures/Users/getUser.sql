CREATE OR ALTER PROCEDURE getUser(
    @email VARCHAR(255) 
)
AS
BEGIN
    SELECT * FROM Users WHERE email=@email AND isDeleted=0 AND isApproved=1
END