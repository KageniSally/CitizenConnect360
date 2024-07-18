CREATE OR ALTER PROCEDURE updateUser
    (
    @id VARCHAR(255),
    @name VARCHAR(255),
    @profileImage VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255)
)
AS
BEGIN
    UPDATE Users SET email=@email,name=@name,password=@password, profileImage=@profileImage
WHERE id=@id AND isDeleted=0
END