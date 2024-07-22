CREATE OR ALTER PROCEDURE addUser
    @id VARCHAR(255),
    @name VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @role VARCHAR(255),
    @isApproved INT OUTPUT 
AS
BEGIN
    IF @role = 'Government Official'
        SET @isApproved = 0
    ELSE IF @role = 'Citizen'
        SET @isApproved = 1


    INSERT INTO Users(id, name, email, password, role, isApproved)
    VALUES(@id, @name, @email, @password, @role, @isApproved)
END
