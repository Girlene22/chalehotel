<?php

if(!isset($_SESSION)) {
    session_start();
}
/*Impede o usuário de acessar a página caso ele não esteja logado*/
if(!isset($_SESSION['id'])) {
    die("Você não pode acessar esta página porque não está logado.<p><a href=\"login.php\">Clique aqui</a></p>");
}


?>