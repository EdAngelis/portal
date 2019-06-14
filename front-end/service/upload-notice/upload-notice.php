<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- Estilos -->
    <link rel="stylesheet" type="text/css" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="upload-notice.css">
    <link rel="stylesheet" type="text/css" href="../nav-bar/nav-bar.css">
</head>

<body>
    <?php include "../nav-bar/nav-bar.html" ?>
    <div class="container">
            <div id="noticeUploadDiv" class="col-md-10">
                <span>NOTICIA UPLOAD</span>
                <form>
                    <div class="form-group ">
                        <input id="bigTitle-update" type="text" class="form-control" placeholder="Título da Notícia">
                        <input id="title-upade" type="text" class="form-control" placeholder="Título que irá na Página Principal (Título mais curto)">
                        <input id="subTitle-upade" type="text" class="form-control" placeholder="Sub-Title abaixo do Título da notícia">
                        <textarea id="bodyNotice-upade" type="text" class="form-control" rows="20" placeholder="Corpo da Notícia"></textarea>
                 <!--       <input id="href-upade" type="text" class="form-control" placeholder="Nome do Arquivo  EX: este-e-um-nome-de-arquivo.php"> 
                        
                        <label for="" class="links">Imagens</label>
                        <input id="img0-upade" type="text" class="form-control" placeholder="Imagem 0  EX: imagem.jpeg">
                        <input id="img1-upade" type="text" class="form-control" placeholder="Imagem 1">
                        <input id="img2-upade" type="text" class="form-control" placeholder="Imagem 2">  -->
                        <label for="" class="links">LINKS</label>
                        <input id="titleLink0-upade" type="text" class=" form-control" placeholder="Descrição do link">
                        <input id="urlLink0-upade" type="text" class="urlLink-upade form-control" placeholder="Endereço do Link">
                        <input id="titleLink1-upade" type="text" class=" form-control" placeholder="Descrição do link">
                        <input id="urlLink1-upade" type="text" class="urlLink-upade form-control" placeholder="Endereço do Link">
                        <input id="titleLink2-upade" type="text" class=" form-control" placeholder="Descrição do link">
                        <input id="urlLink2-upade" type="text" class="urlLink-upade form-control" placeholder="Endereço do Link">
                    </div>
                    <span class="btnSend" Onclick="uploadNotice()">ENVIAR</span>
                    <button class="btnSend" Onclick="uploadNotice()">ENVIAR</button>
                </form>

            </div>
            
    </div>
    <script type="text/javascript" src="../../node_modules/axios/dist/axios.min.js"></script>  
    <script type="text/javascript" src="../../node_modules/jquery/dist/jquery.min.js"></script>   
    <script type="text/javascript" src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="upload-notice.js"></script>
    <script type="text/javascript" src="../nav-bar/nav-bar.js"></script>
</body>
</html>
