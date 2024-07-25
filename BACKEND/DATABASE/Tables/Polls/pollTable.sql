Use CitizenConnect360

CREATE TABLE Polls(
    id VARCHAR(255) PRIMARY KEY,
    question VARCHAR(255) NOT NULL,
    createdBy VARCHAR(255),
    creatorName VARCHAR(255),
    FOREIGN KEY (createdBy) REFERENCES Users(id)
)