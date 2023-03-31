<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Chalé Hotel</title>
    <!-- Adiciona o link para o arquivo CSS do Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- Adiciona o caminho para o arquivo CSS  -->
    <link rel="stylesheet" href="style.css">
     <!-- Adiciona o caminho para a biblioteca do Font Awesome  -->
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"  />
     <!-- Adiciona o ícone da janela da página  -->
     <link rel="icon" href="imagens/logo.png" type="image/x-icon">

    

  </head>
  <body>
          <!-- inicio topo-->
          <div id="topo">
            
            <div id="area-logo">
              <h1 class="logo">
                <a href="index.php">Chalé Hotel</a>
              </h1>
            </div>

            <div id="area-menu">
              <div id="conteudo-menu">
                
                <div id="menu-locais">
                  <span class="locais">
                    Chalé Hotel - Olinda
                  </span>
                  <a class="reserva" href="login.php">Login</a>
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

          
          <div class="row frente">
            <div class="col-lg-6 col-md-12 col-sm-12 frente2">
              <div class="principal justify-content-center text-center">
                <p class="texto">Está indo ou planeja ir para o Chalé Hotel? Reserve sua suíte preferida sem filas e sem espera.</p>
                <button type="submit" class="btn-reserva btn-lg" onclick="irParaReserva()">Fazer reserva</button>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="principal d-flex justify-content-center">
                <!-- início Carrossel-->
                  <div id="carouselExampleIndicators" class="carousel slide slides" data-ride="carousel">
                    <div class="carrossel2" >
                      <!-- Indicadores de Posição--> 
                      <ol class="carousel-indicators carrossel">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <!-- Slides das Imagens--> 
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="imagens/suite.jpg" class="d-block w-100" alt="Imagem 1">
                            </div>
                            <div class="carousel-item">
                              <img src="imagens/vista-para-mar.jpg" class="d-block w-100" alt="Imagem 2">
                              <div class="carousel-caption d-none d-md-block">
                              </div>
                            </div>
                            <div class="carousel-item">
                              <img src="imagens/quarto-coletivo.png" class="d-block w-100" alt="Imagem 3">
                              <div class="carousel-caption d-none d-md-block">
                              </div>
                            </div>
                            <div class="carousel-item">
                              <img src="imagens/costela.jpg" class="d-block w-100" alt="Imagem 3">
                              <div class="carousel-caption d-none d-md-block">
                              </div>
                            </div>
                            <div class="carousel-item">
                              <img src="imagens/bilhar.jpg" class="d-block w-100" alt="Imagem 3">
                              <div class="carousel-caption d-none d-md-block">
                              </div>
                            </div>
                            <div class="carousel-item">
                              <img src="imagens/piscina2.jpg" class="d-block w-100" alt="Imagem 3">
                              <div class="carousel-caption d-none d-md-block">
                              </div>
                            </div>
                            <div class="carousel-item">
                              <img src="imagens/pizza.jpg" class="d-block w-100" alt="Imagem 3">
                              <div class="carousel-caption d-none d-md-block">
                              </div>
                            </div>
                          </div>
                      <!-- Botões de navegação--> 
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Próximo</span>
                      </a>
                    </div>
                  </div>

                <!-- Fim Carrossel-->
              </div>
            </div>
          </div>
          
          <script>
            function irParaReserva() {
              window.location.href = "reserva.php";
            }
          </script>
          
          
           
      
          <!-- inicio corpo-->

          <hr>
          <h1>Nossos Serviços</h1>
          <hr>
          <div class="container-cards">
            <div class="servicos d-flex justify-content-center">
              <div class="row  justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center">
                  <div class="card">
                    <img src="imagens/apartamento.jpg" alt="Lugar 1">
                    <h2>Quartos</h2>
                    <p>Descrição do lugar 1.</p>
                    <p><a href="quartos.html">Saiba mais</a></p>
                  </div>
                </div>
          
                <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center">
                  <div class="card">
                    <img src="imagens/restaurante.jpg" alt="Lugar 2">
                    <h2>Gastronomia</h2>
                    <p>Descrição do lugar 2.</p>
                    <p><a href="gastronomia.html">Saiba mais</a></p>
                  </div>
                </div>
          
                <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center">
                  <div class="card">
                    <img src="imagens/piscina.jpg" alt="Lugar 3">
                    <h2>Lazer</h2>
                    <p>Descrição do lugar 3.</p>
                    <p><a href="lazer.html">Saiba mais</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Início Localização--> 
          <hr>
          <h1>Localização</h1>
          <hr> 
          <div class="mapa">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63216.386074297465!2d-34.907047250078435!3d-7.99644482827315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab17fa77c07f29%3A0x78d856ff05dd791!2sOlinda%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1678810116048!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="450"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </div>
          <!-- Fim Localização--> 


          <hr>
          <h1>Pacotes</h1>
          <hr> 
          <div class="container-cards">
            <div class="servicos d-flex justify-content-center">
              <div class="row  justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center">
                  <div class="card">
                    <img src="imagens/casal2.png" alt="Lugar 1">
                    <h2>Casal</h2>
                    <p>Descrição do lugar 1.</p>
                    <p><a href="pacote-casal.html">Saiba mais</a></p>
                  </div>
                </div>
          
                <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center">
                  <div class="card">
                    <img src="imagens/familia.png" alt="Lugar 2">
                    <h2>Familia</h2>
                    <p>Descrição do lugar 2.</p>
                    <p><a href="pacote-familia.html">Saiba mais</a></p>
                  </div>
                </div>
          
                <div class="col-lg-4 col-md-6 col-sm-12 justify-content-center">
                  <div class="card">
                    <img src="imagens/amigos.png" alt="Lugar 3">
                    <h2>LAmigos</h2>
                    <p>Descrição do lugar 3.</p>
                    <p><a href="pacote-amigos.html">Saiba mais</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          

  
    <!-- fim corpo-->

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


