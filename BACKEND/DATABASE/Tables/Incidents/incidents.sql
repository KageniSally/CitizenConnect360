USE CitizenConnect360;

CREATE TABLE Incidents(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    area VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    reportedBy VARCHAR(255) NOT NULL,
    reporterName VARCHAR(255) 
    FOREIGN KEY (reportedBy) REFERENCES Users(id)
)