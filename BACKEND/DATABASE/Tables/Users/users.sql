USE CitizenConnect360

CREATE TABLE Users
(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profileImage VARCHAR(255),
    isApproved INT,
    isDeleted INT DEFAULT 0,
    isEmailSent INT DEFAULT 0,
    role VARCHAR(255),
    FOREIGN KEY (role) REFERENCES Role(name)
)