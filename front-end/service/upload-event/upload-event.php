<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- Estilos -->
    <link rel="stylesheet" type="text/css" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="upload-event.css">
    <link rel="stylesheet" type="text/css" href="../nav-bar/nav-bar.css">
</head>

<body>
    <?php include "../nav-bar/nav-bar.html" ?>
    <div class="container">
            <div id="noticeUploadDiv" class="col-md-10">
                <span>UPDATE EVENTO</span>
                <form>
                    <div class="form-group ">
                            <!-- Select Option -->
                        <div class="ml-2 mb-2 row">
                            <span class="mr-2">Selecione o Esmiuçado</span>
                            <select id="selectEsmiu">
                                <option>Cadastrar Novo</option>
                            </select>
                        </div>
                            <!-- selection new or update event -->
                        <div id="radioUpdate" class="hide">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input"  Onclick="radioValue(this.value)" type="radio" name="inlineRadioOptions" id="createEventRadio" value="newEvent">
                                <label class="form-check-label" for="createEventRadio">Novo Evento</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" Onclick="radioValue(this.value)" type="radio" name="inlineRadioOptions" id="updateEventRadio" value="updateEvento">
                                <label class="form-check-label" for="updateEventRadio">Update Evento</label>
                            </div>
                        </div>
                        <!-- Select Event -->
                        <div id="eventList" class="hide ml-2 mb-2 row">
                            <span class="mr-2">Selecione o evento</span>
                            <select id="selectEvent">

                            </select>
                            <span class="btnRemover ml-2" Onclick="removeEvent()">Remover</span>
                        </div>
                            <!-- Cadastrar novo Esmiuçado -->
                        <div id="registerEsmiuçado" class="mb-4">
                            <input id="esmiuName" type="text" class="form-control" placeholder="Título do Esmiuçado">
                        </div>

                        <input id="eventTitle" type="text" class="eventTitle form-control" placeholder="Título do Evento">
                        <textarea id="bodyEvent" type="text" class="form-control" rows="5" placeholder="Breve Descrição"></textarea>                        
                        <label for="" class="links">LINKS</label>
                        <input id="titleLink0" type="text" class=" form-control" placeholder="Descrição do link">
                        <input id="urlLink0" type="text" class="urlLink-upade form-control" placeholder="Endereço do Link">
                    </div>
                    <span class="btnSend" Onclick="esmiuPost()">ENVIAR</span>
                </form>

            </div>
            
    </div>
    <script type="text/javascript" src="../../node_modules/axios/dist/axios.min.js"></script>  
    <script type="text/javascript" src="../../node_modules/jquery/dist/jquery.min.js"></script>   
    <script type="text/javascript" src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../nav-bar/nav-bar.js"></script>
    <script type="text/javascript" src="upload-event.js"></script>
</body>
</html>
