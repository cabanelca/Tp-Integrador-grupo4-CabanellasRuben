create database if not exists ejercicio_bd;

use ejercicio_bd;

create table if not exists usuarios (
	id int(11) not null auto_increment primary key, 
	nombre varchar(40) character SET latin1 COLLATE latin1_swedish_ci not null,
	apellido varchar(40) character set latin1 collate latin1_swedish_ci not null,
	edad tinyint(2) not null,
	fecha timestamp not null default current_timestamp,
	provincia varchar(30) character set latin1 collate latin1_swedish_ci not null
) character set latin1 collate latin1_swedish_ci;

insert into usuarios (nombre, apellido, edad, provincia) values 
	('Juan', 'Gonzalez', 21, 'Buenos Aires'),
	('Jose', 'Garcia', 30, 'Neuquen'),
	('Ana', 'Martinez', 45, 'La Pampa'),
	('Celeste', 'López', 50, 'Catamarca'),
	('Pedro', 'Alonso', 15, 'Jujuy');


