CREATE TABLE servers (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    server_name VARCHAR(20) NOT NULL CHECK (server_name <> ''),
    owner_name VARCHAR(20) NOT NULL CHECK (owner_name <> ''),
    ip_address INET NOT NULL CHECK (ip_address <> ''),
    server_description VARCHAR(255) NOT NULL,
);