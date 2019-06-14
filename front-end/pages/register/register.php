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
    
    <!-- Bootstrap e Jquery -->
    <link rel="stylesheet" type="text/css" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen" />
    
</header>


<body>
<div class="col-md-12">
    <?php include "../../components/header/header.html"; ?>

    <div class="container">
    <form >
      <div class="form-group">
        <div class="row">
          <div class=" form-item col-md-6">
            <label>Nome Completo</label>
            <input id="registerName" name="name" class="form-control">
          </div>
          
        </div>
        <div class="row">
          <div class="form-item col-md-6">
            <label>E-mail</label>
            <input id="registerEmail" name="email" class="form-control" >
          </div>
          <div class="  col-md-6">
            <label>Confirmar E-Mail</label>
            <input id="confEmail" name="cemail" class="emailInput form-control" >
          </div>
        </div>
        <div class="row">
          <div class=" form-item col-md-6">
            <label>Senha</label>
            <input id="registerPass" name="password" class="form-control" >
              
          </div>
          <div class="form-item col-md-6">
            <label>Confirmar Senha</label>
            <input id="confPassword" name="confirmPass" Onclick="emailValidation()" class="form-control">
          </div>
        </div>
        <div class="row">
          <div class="btn objets colSign col-md-6 ">
              <div>
            </div>
            <button type="submit" class="btn btn-success" style="margin-top:10px">
              Registrar
            </button>
            <div class="login row">
              <span class="font center-text">Se já é Registrado</span>
              <button class="font" href="../login/login.php" >faça Login</button>
            </div>           
          </div>
        </div>
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
    <script type="text/javascript" src="register.js"></script>
</body>

</html>