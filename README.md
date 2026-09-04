PontoCanaan

Sistema web para controle de ponto desenvolvido em Node.js.

Tecnologias :
Node.js, 
Express, 
EJS, 
MySQL, 
Express Session, 
Luxon, 
Funcionalidades, 
Cadastro de usuários, 
Registro de entrada, 
Registro de intervalo, 
Registro de retorno, 
Registro de saída, 
Exportação de relatórios .
-------------------------------------

-- ============================================
-- CRIAÇÃO DO BANCO DE DADOS
-- ============================================

CREATE DATABASE IF NOT EXISTS db_canaan
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;

USE db_canaan;


-- ============================================
-- TABELA: users
-- ============================================

CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    nascimento DATE NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    ativo TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    UNIQUE KEY uk_users_cpf (cpf)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_general_ci;


-- ============================================
-- TABELA: livro_de_ponto
-- ============================================

CREATE TABLE IF NOT EXISTS livro_de_ponto (
    id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    data DATE NOT NULL,
    entrada VARCHAR(50) NULL,
    saida_intervalo VARCHAR(50) NULL,
    retorno_intervalo VARCHAR(50) NULL,
    saida VARCHAR(50) NULL,
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    INDEX idx_livro_de_ponto_user_id (user_id),

    CONSTRAINT fk_livro_de_ponto_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE

) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_general_ci;
