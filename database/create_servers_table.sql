CREATE TABLE servers (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    server_name VARCHAR(20) NOT NULL,
    owner_name VARCHAR(20) NOT NULL,
    ip_address INET NOT NULL
);