
USE CitizenConnect360;
CREATE TABLE Views
(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    user_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);