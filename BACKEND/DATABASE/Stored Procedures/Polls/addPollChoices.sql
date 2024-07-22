CREATE OR ALTER PROCEDURE addPollChoice(
    @id VARCHAR(255),
    @choice VARCHAR(255),
    @pollId VARCHAR(255)
)
AS
BEGIN
INSERT INTO pollChoices(id,choice,pollId)
VALUES(@id,@choice,@pollId)
END