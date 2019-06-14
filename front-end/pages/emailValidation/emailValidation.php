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
    <div class=" container">
      <div class="nav row" style="background:red">
        <span class="navText">CONFIRMAÇÂO DE E-MAIL</span>
        </div>
      </div>
      <form >
        <div class="form-group">
          <div class="row">
            <div class="divCode form-item col-md-6">
              <label  type="text" class="center-text">Digite o código que enviamos para seu E-mail</label>
              <input id="emailCod" type="text" class="text-center ValiInput" name="codValidation" >
            </div>
          </div>
          <div>
          </div>
          <button Onclick="registerUser()" type="submit" class="btn btn-success">
            VALIDAR
          </button>
          
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
    <script type="text/javascript" src="../../service/user-service.js"></script>
</body>

</html>