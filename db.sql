create database apifilmes;

use apifilmes;

create table tb_filmes (
  id_filmes  int primary key auto_increment,
  nome_filme  varchar(30) not null,
  genero_filme  varchar(30) not null,
  lancamento_filme  int not null,
  img_filme  varchar(200) not null
);

CREATE TABLE tb_login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomeUsuario VARCHAR(70),
    senha VARCHAR(70),
    tipo VARCHAR(20)
);

INSERT INTO tb_login (nomeUsuario, senha, tipo) 
VALUES ('Admin', '1234', 'Admin');

select * from tb_filmes;

insert into  tb_filmes (nome_filme, genero_filme, lancamento_filme, img_filme) values ("teste", "teste", 9, "teste");
