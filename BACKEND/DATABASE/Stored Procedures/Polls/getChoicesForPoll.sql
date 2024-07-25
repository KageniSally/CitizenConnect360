CREATE OR ALTER PROCEDURE getChoicesForPoll(@pollId VARCHAR(255))
AS
BEGIN
    SELECT * FROM PollChoices WHERE pollId = @pollId
END