function sortPerDate (arrayObject){
    function compare (a,b){
        if(new Date(a.date)>new Date(b.date)){return -1}
        if(new Date(a.date)<new Date(b.date)){return 1}
        else {return 0}}

    const objectSort = arrayObject.sort(compare)
    return objectSort
}
// Mandar URL da Pagina para o Botão do Facebook
//document.querySelector('.facebook-share-button').href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href

