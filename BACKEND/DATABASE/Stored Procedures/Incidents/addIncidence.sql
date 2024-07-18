CREATE OR ALTER PROCEDURE addIncidence(
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(255),
    @area VARCHAR(255),
    @image VARCHAR(255),
    @contact VARCHAR(255),
    @reportedBy VARCHAR(255)
)
AS 
BEGIN
INSERT INTO Incidents(id,title,description,area,image,contact,reportedBy)
VALUES(@id,@title,@description,@area,@image,@contact,@reportedBy)
END