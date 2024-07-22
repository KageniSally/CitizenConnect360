CREATE OR ALTER PROCEDURE addPoll(@id VARCHAR(255),
@question VARCHAR(255),
@createdBy VARCHAR(255))
AS
BEGIN
INSERT INTO Polls(id,question,createdBy)
VALUES(@id,@question,@createdBy)
END