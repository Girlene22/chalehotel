<?php
include('conexao.php');

if(isset($_POST['email']) || isset($_POST['senha'])) {

    if(strlen($_POST['email']) == 0) {
        echo "Preencha seu e-mail";
    } else if(strlen($_POST['senha']) == 0) {
        echo "Preencha sua senha";
    } else {

        $email = $mysqli->real_escape_string($_POST['email']);
        $senha = $mysqli->real_escape_string($_POST['senha']);

        $sql_code = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
        $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

        $quantidade = $sql_query->num_rows;

        if($quantidade == 1) {
            
            $usuario = $sql_query->fetch_assoc();

            if(!isset($_SESSION)) {
                session_start();
            }

            $_SESSION['id'] = $usuario['id'];
            $_SESSION['nome'] = $usuario['nome'];

            header("Location: reserva.php");

        } else {
            echo "Falha ao logar! E-mail ou senha incorretos";
        }

    }

}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Catálogo de lugares para passeio</title>
    <!-- Adiciona o link para o arquivo CSS do Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- Adiciona o caminho para o arquivo CSS  -->
    <link rel="stylesheet" href="style.css">
     <!-- Adiciona o caminho para a biblioteca do Font Awesome  -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"  />
    

  </head>
  <body>
          <!-- inicio topo-->
          <div id="topo">
            
            <div id="area-logo">
              <h1 class="logo">
                <a href="index.html">Chalé Hotel</a>
              </h1>
            </div>

            <div id="area-menu">
              <div id="conteudo-menu">
                
                <div id="menu-locais">
                  <span class="locais">
                    Chalé Hotel - Olinda
                  </span>
                  <a class="reserva" href="login.html">Login</a>
                  <div style="clear: both;"></div>
                </div>

                <div id="menu">
                  <ul id="navegacao">
                    <li><a href="">Home</a></li>
                    <li><a href="">História</a></li>
                    <li><a href="">Imprensa</a></li>
                    <li><a href="">Gastronomia</a></li>
                    <li><a href="">Contato</a></li>
                  </ul>

                </div>

              </div>
            </div>
          </div>
          <!-- fim topo-->

          <div class="d-flex justify-content-center">
            <div class="login">
              <form action="" method="$_POST">
                <div class="form-group">
                  <label for="email">E-mail</label>
                  <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail">
                </div>
                <div class="form-group">
                  <label for="senha">Senha</label>
                  <input type="password" class="form-control" id="senha" placeholder="Digite sua senha">
                </div>
                <div class="text-center">
                  <button type="submit" class="btn " id="botao-login"><a href="reserva.php">Continuar</a></button>
                </div>
                <p>ou ultilize uma dessas opções </p>
                <div class="formas-login">
                    <a href="#" class="social-icon"><i class="fab fa-facebook-square"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-google"></i></a>
                    <a href="#" class="social-icon"><i class="fas fa-mobile-alt"></i></a>
                </div>
                <a href="cadastro.html"><p>ainda não tenho cadastro </p></a>
                <p class="texto-login">Ao iniciar sessão numa conta, concorda com os nossos Termos e Condições e com a Declaração de Privacidade.</p>
              </form>
            </div>
          </div>
          
        

          <!-- início footer-->
          <footer>
            <div class="container">
              <div class="redes-sociais">
                <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                
              </div>
              <div class="row">
                <div class="col-12">
                  <p class="text-center texto-footer">&copy; 2023 Chalé Hotel. Todos os direitos reservados.</p>
                </div>
              </div>
            </div>
          </footer>
          
          
          
          <!-- fim footer-->

  

  <!-- Adicionando o jQuery e o JavaScript do Bootstrap -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

  <!-- Adiciona o link para o arquivo JavaScript do Bootstrap -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>


  </body>
</html>


