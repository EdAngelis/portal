//document.addEventListener("DOMContentLoaded", 
//()=> { document.getElementById("facebook-share-btt").href = "https://www.facebook.com/sharer/sharer.php?u=https://www.rhbinformatica.com.br/dicas/como-fazer-links-de-compartilhamento-para-as-redes-sociais?cn-reloaded=1" 
//}, false);

// transformar endereço do site para formato url
//var url = encodeURIComponent(window.location.href);
socialShare()

function socialShare () {document.addEventListener("DOMContentLoaded", function() {            
        // Facebook 
    document.getElementById("facebook-share-btt").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
    var url = encodeURIComponent(window.location.href);
    
        // Twitter 
    var titulo = encodeURIComponent(document.title);
    //var via = encodeURIComponent("usuario-twitter"); //nome de usuário do twitter do seu site
    document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo;    
    //se for usar o atributo via, utilize a seguinte url
    //document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo+"&via="+via;
    
        // Whats app 
    var conteudo = encodeURIComponent(document.title + " " + window.location.href);
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);

}