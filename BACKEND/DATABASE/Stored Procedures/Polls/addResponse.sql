CREATE OR ALTER PROCEDURE addResponses(
    @id VARCHAR(255),
    @pollId VARCHAR(255),
    @userId VARCHAR(255),
    @pollChoiceId VARCHAR(255)
)
AS
BEGIN
INSERT INTO PollResponses(id, pollId,userId,pollChoiceId)
VALUES (@id,@pollId,@userId,@pollChoiceId)
END