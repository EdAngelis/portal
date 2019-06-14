<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>

    <!-- Estilos Css -->
    
    <link rel="stylesheet" type="text/css" href="notice.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../../components/coments/coments.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../../css/reset.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../../components/header/header.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="../../components/footer/footer.css" media="screen" />
    <!-- Bootstrap e Jquery -->
    <link rel="stylesheet" type="text/css" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen" />
</head>
<body>
<div class="col-md-12">
    <?php include "../../components/header/header.html"; ?>
    <!-- Ads Session Top -->
    <div class="ads col-md-12 top">
    
    </div>
    <!-- Noticia Header -->
    <div class="headerNews col-md-12">
        <h1 class="titleNotice"></h1>
        <p class="subTitle"></p>
        <div class="row">
        <span class="date"></span>
        <!-- Social Share Icons -->
        </div>
    </div>

<div class="row">
    <div class="right col-md-3"></div>

    <div class="midle col-md-6">
                
        <p class="body"></p>
        <span class="linkTitle"></span>
        <a class="linkUrl"></a>
        <!-- Coments -->
        <div class="comentsDiv col-md-12">
           
        </div>
    </div>

    <div class="left col-md-3"></div>
</div>
    <div class="col-md-12">
        <?php include "../../components/coments/coments.html" ?>    
    </div>

    <?php include "../../components/footer/footer.html"; ?>
</div>
    <!-- Scripts js --> 
    <script type="text/javascript" src="../../node_modules/moment/min/moment.min.js"></script>
    <script type="text/javascript" src="../../node_modules/axios/dist/axios.min.js"></script>  
    <script type="text/javascript" src="../../node_modules/jquery/dist/jquery.min.js"></script>   
    <script type="text/javascript" src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../../components/header/header.js"></script>
    <script type="text/javascript" src="../../repositorio/repositorio.js"></script>
    <script type="text/javascript" src="../../service/esmiucado-service.js"></script>
    <script type="text/javascript" src="notice.js"></script>
    <!-- Requisição DataBase -->
    <script>
        const noticeCod = 0
        postNotice(noticeCod)
        getComents(noticeCod)    
    </script>
    
</body>
</html>