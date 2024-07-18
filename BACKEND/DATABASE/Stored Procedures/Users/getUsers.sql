CREATE OR ALTER PROCEDURE dbo.getUsers
AS 
BEGIN
    SELECT * FROM Users WHERE role <> 'Admin' AND isDeleted = 0
END