<?php 
    include('protect.php')

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Bem-vindo ao painel <?php echo $_SESSION['nome']; ?>
    <p>
        <a href="logout.php">Sair</a>
    </p>
</body>
</html>
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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="historia.html">História</a></li>
                    <li><a href="gastronomia.html">Gastronomia</a></li>
                    <li><a href="">Mais Informações</a></li>
                    <li><a href="">Contato</a></li>
                  </ul>

                </div>

              </div>
            </div>
          </div>
          <!-- fim topo-->

          
           
	<style type="text/css">
		.container {
			margin-top: 50px;
		}
	</style>
</head>
<body>
    <hr>
    <h1>reserva</h1>
    <hr>
	<div class="container">
		<form class="form-inline">
			<div class="form-group mx-sm-3 mb-2">
				<label for="entrada" class="sr-only">Data de Entrada:</label>
				<input type="date" class="form-control campos-form" id="entrada" placeholder="Dia/Mês/Ano">
			</div>
			<div class="form-group mx-sm-3 mb-2">
				<label for="saida" class="sr-only">Data de Saída:</label>
				<input type="date" class="form-control campos-form" id="saida" placeholder="Dia/Mês/Ano">
			</div>
			<div class="form-group mx-sm-3 mb-2">
				<label for="adultos" class="sr-only">Adultos:</label>
				<input type="number" class="form-control campos-form" id="adultos" placeholder="Adultos">
			</div>
			<div class="form-group mx-sm-3 mb-2">
				<label for="criancas" class="sr-only">Crianças:</label>
				<input type="number" class="form-control campos-form" id="criancas" placeholder="Crianças">
			</div>
			<button type="submit" class="btn-disponibilidade mb-2">Checar Disponibilidade</button>
		</form>
	</div>
    <div class="container">
        <h2 class="text-center texto">Serviços Exclusivos</h2>
        <div class="row  justify-content-center">
            <div class="col-lg-2 col-md-6 col-sm-12  text-center">
                <p class="servicos-exclusivos">Wi-fi Grátis</p>
                <i class="fas fa-wifi icones"></i>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12  text-center">
                <p class="servicos-exclusivos">Estacionamento Grátis</p>
                <i class="fas fa-car icones"></i>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12  text-center">
                <p class="servicos-exclusivos">Pet Friendly</p>
                <i class="fas fa-paw icones"></i>
            </div>
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


