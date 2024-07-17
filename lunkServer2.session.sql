--@block
CREATE TABLE users (
    userID BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255)
);

CREATE TABLE subject (
    subjectID BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(7)
);

CREATE TABLE task (
    taskID BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    timeStart TIME NOT NULL,
    timeEnd TIME NOT NULL,
    notes TEXT
);

CREATE TABLE schedule (
    scheduleID BIGINT AUTO_INCREMENT PRIMARY KEY,
    subjectID BIGINT NOT NULL,
    userID BIGINT NOT NULL,
    weekday VARCHAR(255) NOT NULL,
    timeStart TIME NOT NULL,
    timeEnd TIME NOT NULL,
    FOREIGN KEY (subjectID) REFERENCES subject(subjectID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);

CREATE TABLE taskConnector (
    taskConnID BIGINT AUTO_INCREMENT PRIMARY KEY,
    userID BIGINT,
    subjectID BIGINT,
    taskID BIGINT NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (subjectID) REFERENCES subject(subjectID),
    FOREIGN KEY (taskID) REFERENCES task(taskID)
);


--@block
CREATE TABLE subjectConnector (
    subjectConnID BIGINT AUTO_INCREMENT PRIMARY KEY,
    userID BIGINT,
    subjectID BIGINT,
    FOREIGN KEY (userID) REFERENCES users(userID),
    FOREIGN KEY (subjectID) REFERENCES subject(subjectID)
)

--@block
DELETE FROM subject WHERE subjectID=1;
ALTER TABLE subject AUTO_INCREMENT=1;
