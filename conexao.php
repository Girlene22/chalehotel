<?php

$usuario = 'root';
$senha = '';
$database = 'login';
$host = 'localhost';
// Create connection
$mysqli = new mysqli($host, $usuario, $senha, $database);
// Check connection
if($mysqli->error) {
    die("Falha ao conectar ao banco de dados: " . $mysqli->error);
}
