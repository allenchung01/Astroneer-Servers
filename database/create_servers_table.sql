CREATE TABLE servers (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    server_name VARCHAR(20) NOT NULL CHECK (server_name <> ''),
    owner_name VARCHAR(20) NOT NULL CHECK (owner_name <> ''),
    server_description VARCHAR(255) NOT NULL,
    server_status BOOLEAN NOT NULL,
    server_url VARCHAR(50) NOT NULL CHECK (server_url <> '')
);

ALTER TABLE servers ADD COLUMN user_uid VARCHAR(250);