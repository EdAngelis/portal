const URL_PRODUCTION = "https://esmiu.herokuapp.com/"
const URL_DEVELOPER = "http://localhost:3000/"
const URL_PAGE = "http://www.xn--esmiuado-w0a.com.br"
var listNumber = 0
// Exibir Eventos por tema e cronologia 
 function postNotice(){
  const noticeURL = window.location.href
  const splitURL = noticeURL.split("/")
  const pageName = splitURL[splitURL.length - 1]
    axios.get(URL_PRODUCTION+'notice/find'+pageName)
        .then(res=>{
          const data = res.data
               //Atribuindo valores aos Elmentos com dados tirados do Banco
            document.querySelector('.titleNotice').innerHTML = data.bigTitle
            document.querySelector('.subTitle').innerHTML = data.subTitle
            document.querySelector('.date').innerHTML = moment(data.date).format('DD/MM/YYYY')
            document.querySelector('.body').innerHTML = data.body
            document.querySelector('.linkTitle').innerHTML = data.links[0].title
            document.querySelector('.linkUrl').innerHTML = data.links[0].url
            document.querySelector('.linkUrl').href = data.links[0].url
            document.querySelector('.imgTopNotice').src = "../../assets/img/noticias/"+data.img[0].img
              //Format src to put in alt atribute
            const srcImg = data.img[0].img.split(".")
            const imgName = srcImg[0].replace(/-/g,' ')
            document.querySelector('.imgTopNotice').alt = imgName
              //Preencher meta Tags og para compartilhamento em rede sociais
            document.getElementById('ogUrl').content = URL_PAGE +"/pages/noticias/"+ data.href
            document.getElementById('ogTitle').content = data.title
            document.getElementById('ogDescription').content = data.subTitle
            document.getElementById('ogImg').content = URL_PAGE + "/assets/img/noticias/" + data.img[0].img          
              //Preencher metas Seos
            document.getElementById('seoTitle').innerHTML = data.title
            document.getElementById('seoDescription').content = data.subTitle
          })
  } 

function showEvents(){
    //Pegar Nome da Pagina
  const noticeURL = window.location.href
  const splitURL = noticeURL.split("/")
  const pageName = splitURL[splitURL.length - 1]

    father = document.getElementById('father')
    templateChild = document.getElementById('template-child')
    noticeTemplate = document.getElementById('childTemplateNotice')
    BodyTemplate = document.querySelector('#bodyTemplate')
    axios.get(URL_PRODUCTION+"esmiucado/eventList"+pageName)
        .then(res=>{
          function compare(a,b) {
            return new Date(a.date) - new Date(b.date);
          }
          var dataArray = res.data    
      
          dataArray = dataArray.sort(compare)
                   
            for (let i = 0; i < res.data.length; i++) {
                const data = dataArray[i]
                const newElement = templateChild.content.cloneNode(true).children[0];
                newElement.querySelector(".showDescription").addEventListener('click',
                ()=> newElement.querySelector(".descriptEvent").classList.toggle('hide'));
                newElement.querySelector('#titleEvent').innerHTML = data.title
                newElement.querySelector('#date').innerHTML = moment(data.date).format('DD/MM/YYYY')
                
                
                 for (let j = 0; j < data.body.length; j++) {
                    // Template Body event
        
                  const newBody = BodyTemplate.content.cloneNode(true).children[0]
                  newBody.querySelector('#dateBody').innerHTML = moment(data.body[j].date).format('DD/MM/YYYY')
                  newBody.querySelector('#bodyEvent').innerHTML = data.body[j].description
                  newBody.querySelector('#noticesLink').href = data.body[j].links[0].url
                  newBody.querySelector('#noticesLink').innerHTML = data.body[j].links[0].title
                 // newBody.querySelector('#textLink').innerHTML = data.body[j].links[0].title
                    //Adciona no Elemento Pai
                  newElement.querySelector('#descriptEvent').appendChild(newBody) 
                               
                }  
                    
                father.appendChild(newElement);
            }
            
        })
    
      }
// Exibir Ultimas Notícias na Home
function showLatestNews (){
father = document.getElementById('father');
template = document.getElementById('newsTemplate')

axios.get(URL_PRODUCTION+'notice')
.then( res  =>{
   for (let i = 0; i < 10; i++) 
   {                  
        function compare(a,b) {
            if(new Date(a.date)>new Date(b.date)){return -1}
            if(new Date(a.date)<new Date(b.date)){return 1}
            else {return 0}
        }
      const resSort = res.data.sort(compare)
        const data = resSort[i]
        const newElement = template.content.cloneNode(true).children[0]
        newElement.querySelector('#imgNotice').src ="assets/img/noticias/"+data.img[0].img;
        newElement.querySelector('#titleNotice').innerHTML = data.title;
        //Format img name to put in img alt tag
        const srcImg = data.img[0].img.split(".")
        const imgName = srcImg[0].replace(/-/g,' ')
        newElement.querySelector('.imgNotice').alt = imgName
        //Adcionar Link para Noticia no Titulo da Latest news
            newElement.querySelector(".news").addEventListener('click',
        ()=> window.location.href = "pages/noticias/"+ data.href);
        father.appendChild(newElement)       
    }
    //Criar Elemento para mostrar mais noticias
    const showMore =  document.createElement('span')
    showMore.innerHTML = "Mostrar Mais"
    showMore.classList.add('showMore')
      //  showMore.addEventListener('click', ()=>{
       //   listNumber = listNumber + 5, console.log(listNumber), showLatestNews() })
          father.appendChild(showMore)
    
}).catch(error=>{
    console.log(error)
}) 
}
// Exibir lista de Eventos na home
function showEsmiuList (){
  listTemplate = document.getElementById('listTemplate')
  esmiuFather = document.getElementById('esmiuFather');

axios.get(URL_PRODUCTION+'esmiucado/getEsmiu')
.then( res  =>{
   const data = res.data
   for (let i = 0; i < res.data.length; i++) 
   {       
        const newElement = listTemplate.content.cloneNode(true).children[0]
        newElement.querySelector('#esmiuImg').src = "assets/img/esmiucados-icons/"+ data[i].img;
        newElement.querySelector('#esmiuTitle').innerHTML = data[i].esmiucado
    
        //Adcionando Link para Esmiu Pages 
        newElement.querySelector('#esmiuTitle').addEventListener('click',
        ()=> window.location.href = "pages/esmiucados/"+data[i].src);
        
        esmiuFather.appendChild(newElement)

   }
    
}).catch(error=>{
    console.log(error)
}) 
}
// Exibir Noticia na page


// Salvar Comentario
function sendComent(){

  //Take Page Name
  const noticeURL = window.location.href
  const splitURL = noticeURL.split("/")
  const pageName = splitURL[splitURL.length - 1]

  const nameComent = document.getElementById('nameComent').value
  const msgComent = document.getElementById('msgComent').value
  form = {name:nameComent,msg:msgComent, pageName:pageName}
  axios.post(URL_PRODUCTION+"notice/addComent", form)
  .then(res=>{
      console.log(res)
  }).catch(error =>{
      console.log(error)
  })
}
// Exibir comentarios
function getComents(){
  //Take Page Name
  const noticeURL = window.location.href
  const splitURL = noticeURL.split("/")
  const pageName = splitURL[splitURL.length - 1]
   fatherDiv = document.getElementById('fatherComent')
   axios.get(URL_PRODUCTION+"notice/coments"+pageName)
   .then(res =>{
       // Ordenar por data, usando função do Repositorio
       const data = sortPerDate(res.data);
       for (let i = 0; i < data.length; i++) {
           const newComent = document.getElementById('comentsTemplate').content.cloneNode(true).children[0];
           
           // Mostrar form Responder
           newComent.querySelector(".shareComent").addEventListener('click',
           ()=> newComent.querySelector(".replyComent").classList.toggle('hide'));
           // Show Replys hidden
           newComent.querySelector(".showReplys").addEventListener('click',
           ()=> newComent.querySelector(".replysDiv").classList.toggle('hide'));

           newComent.querySelector('.nameComent2').innerHTML = data[i].name
           newComent.querySelector('.dateComent').innerHTML = moment(data[i].date).format("DD/MM/YYYY HH:MM")
           newComent.querySelector('.comentBody').innerHTML = data[i].msg
           newComent.querySelector('.showReplys').innerHTML = "Mostrar "+data[i].reply.length+" Respostas"
           newComent.querySelector('#btnReply').id = data[i]._id
           // Adcionar Template a Div Pai
           

           // Add replys to coments
           if(data[i].reply.length>0){
               for (let j = 0; j < data[i].reply.length; j++) {
                   const newReplic = document.getElementById('templateReplic').content.cloneNode(true).children[0];   
                   newReplic.querySelector('.nameComent2').innerHTML = data[i].reply[j].name
                   newReplic.querySelector('.dateComent').innerHTML = moment(data[i].reply[j].date).format("DD/MM/YYYY HH:MM")
                   newReplic.querySelector('.replyBody').innerHTML = data[i].reply[j].msg
                   newComent.querySelector('#replyFather').appendChild(newReplic)
               } 
             }
             fatherDiv.appendChild(newComent)
       }
   })
}
//Salvar Replys
function sendReplicComent(id){
   const nameReply = document.getElementById('nameReply').value
   const msgReply = document.getElementById('msgReply').value
   form = {name:nameReply,msg:msgReply,_id:id}
   axios.post(URL_PRODUCTION+'notice/replic', form)
   .then(res=>{
       console.log(res.data)
   })
}





