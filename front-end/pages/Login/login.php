<!DOCTYPE html>
<html>

<header>
    <meta charset="utf-8">
    <title>Esmiuçado</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Estilos Css -->
    <link rel="stylesheet" type="text/css" href="../../css/reset.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../../components/header/header.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../../components/footer/footer.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="login.css" media="screen" />
    <!-- Bootstrap e Jquery -->
    <link rel="stylesheet" type="text/css" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen" />
    
</header>


<body>
<div class="col-md-12">
    <?php include "../../components/header/header.html"; ?>
<div class="container">
<form class="form col-md-6">
      <div class="objets colSign col-md-12">
            <p class="text-center">E-Mail</p>
            <input id="loginEmail" class=" objets" type="email"  name="email">
      </div>
      <div class="objets colSign col-md-12">
            <p class="text-center">Senha</p>
            <input id="loginPassword" class=" objets" type="password" name="password">
      </div>
      <div class="btn objets colSign col-md-12">
            <span type="submit" class="btn btn-success" Onclick="login()">
            ENTRAR
            </span>               
      </div>
      <div class="col-md-12" Onclick="login()">
            <button class="btnRegister" href="../register.register.php">Faça seu Registro</button>
      </div> 
</form>
</div>
    

    <?php include "../../components/footer/footer.html"; ?>
    </div>
    <!-- Scripts js --> 
    <script type="text/javascript" src="../../node_modules/axios/dist/axios.min.js"></script>  
    <script type="text/javascript" src="../../node_modules/jquery/dist/jquery.min.js"></script>   
    <script type="text/javascript" src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../../components/header/header.js"></script>
    <script type="text/javascript" src="login.js"></script>
</body>

</html>