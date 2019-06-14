<!DOCTYPE html>
<html>

<header>
    <meta charset="utf-8">
    <title>Esmiuçado</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name=”description” content="Faça um resumo da sua página aqui neste espaço">
    <!-- Estilos Css -->
    <link rel="stylesheet" type="text/css" href="main.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="./css/reset.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="./components/header/header.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="./components/lastNews/lastNews.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="./components/esmiucado-list/esmiucado-list.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="./components/footer/footer.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="./components/esmiucado-list/esmiucado-list.css" media="screen" />
    
    <!-- Bootstrap e Jquery -->
    <link rel="stylesheet" type="text/css" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen" />
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

</header>


<body>
<div class="col-md-12">
    <?php include "./components/header/header.html"; ?>
<div class="body col-md-12">
    <div class="sessionRight col-md-5">
        <?php include "./components/esmiucado-list/esmiucado-list.html"; ?>
    </div>
    
    <div class="sessionLeft col-md-7">

            <div class="sessionLeftTop col-md-12">
                <?php include "./components/lastNews/lastNews.html"; ?>
            </div>
            
            <div class="sessionLeftMedium col-md-12">

            </div>
            <div class="sessionLeftBottom col-md-12">

            </div>
    </div>
    </div>
    
    

    <?php include "./components/footer/footer.html"; ?>
    </div>
    
    <!-- Scripts js --> 
    <script type="text/javascript" src="./node_modules/axios/dist/axios.min.js"></script>  
    <script type="text/javascript" src="./node_modules/jquery/dist/jquery.min.js"></script>   
    <script type="text/javascript" src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="./components/header/header.js"></script>
    <script type="text/javascript" src="./service/esmiucado-service.js"></script>
    <script>
    showLatestNews()
    showEsmiuList()
    </script>
</body>

</html>