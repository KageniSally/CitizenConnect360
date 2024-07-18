CREATE OR ALTER PROCEDURE addView(
    @id VARCHAR(255),
    @title VARCHAR(255),
    @description VARCHAR(255),
    @user_id VARCHAR(255)
)
AS
BEGIN 
INSERT INTO Views(id,title,description,user_id)
VALUES(@id,@title,@description,@user_id)
END
