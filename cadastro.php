<?php
session_start();

// Verifica se o usuário está autenticado
if (!isset($_SESSION['siape'])) {
    header('Location: login.php');
    exit;
}

// Define a variável $siape com o valor da sessão
$siape = $_SESSION['siape'];
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/estilo.css">
</head>
<body>
    <!-- Header -->
    <header>
        <nav class="navbar navbar-expand-lg navbar-light cor_cabecalho">
            <a class="navbar-brand" href="index.php">
                <img src="../imagens/logo/logo.png" width="175">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto"> <!-- Adicionado a classe ml-auto -->
                    <li class="nav-item">
                        <a class="nav-link" href="buscar_frequencia.php">Frequência</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cadastro_alunos.php">Cadastrar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="editar_alunos.php">Editar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="logoff.php">Logoff</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Main Content -->
    <main class="conteudo">
        <div class="container">
            <h2>Cadastrar Aluno</h2>
            <form action="" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" class="form-control" id="nome" name="nome" required autofocus>
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="text" class="form-control" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="matricula">Senha:</label>
                    <input type="password" class="form-control" id="senha" name="senha" required>
                </div>
                
                <button type="submit" name="cadastrar" id="cadastrar" class="btn btn-primary">Cadastrar</button>
                <?php
                // Inclui o arquivo de conexão ao banco de dados
                require_once 'conexao.php';
                mysqli_set_charset($conn, "utf8");

                // Verifica se o botão cadastrar foi acionado
                if(isset($_POST['cadastrar'])) {
                    // Obtém os dados do formulário
                    $nome = $_POST['nome'];
                    $email = $_POST['email'];
                    $senha = $_POST['senha'];
                    

                    // Verifica se o usuario já existe na tabela "usuarios"
                    $sql = "SELECT * FROM usuarios WHERE email = '$email'";
                    $result = $conn->query($sql);

                    if($result->num_rows > 0) {
                        // Se o usuario já existe, exibe uma mensagem informando que ele não pode ser cadastrado novamente
                        echo "<div class='alert alert-danger'>O usuário já existe no banco de dados e não pode ser cadastrado novamente.</div>";
                    } else {
                        $dir = "imagens/alunos/";
                        // Move a imagem para o diretório criado
                        $extensao = pathinfo($foto, PATHINFO_EXTENSION);
                        $foto_nome = "$matricula.$extensao";
                        $foto_path = $dir . $foto_nome;
                        if(move_uploaded_file($foto_tmp, $foto_path)) {

                            // Insere os dados na tabela "alunos"
                            $sql = "INSERT INTO alunos (nome, matricula, curso, foto) VALUES ('$nome', '$matricula', '$curso', '$foto_nome')";
                            if($conn->query($sql) === TRUE) {
                                // Se a inserção foi bem sucedida, exibe uma mensagem de sucesso
                                echo "<div class='alert alert-success'>Aluno cadastrado com sucesso!</div>";
                            } else {
                                // Se a inserção falhou, exibe uma mensagem de erro
                                echo "<div class='alert alert-danger'>Erro ao cadastrar aluno.</div>" . $conn->error;
                            }

                        } else {
                            // Se houve um erro ao mover a imagem, exibe uma mensagem de erro
                            echo "<div class='alert alert-danger'>Erro ao salvar imagem.</div>";
                        }
                    }
                }
            ?>


            </form>
        </div>
    </main>
    <!-- Footer -->
    <footer>
        <div class="rodape">
            <a href="#">&copy; 2023 - Chalé Hotel</a>
            <br/>
            <a href="#">Desenvolvido por Girlene Pereira</a>
        </div>
    </footer>
    <script src="css/jquery-3.6.0.min.js"></script>
    <script src="css/popper.min.js"></script>
    <script src="css/bootstrap.min.js"></script>
  </body>
</html>