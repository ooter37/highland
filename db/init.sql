CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(30),
    hashed_password TEXT
);