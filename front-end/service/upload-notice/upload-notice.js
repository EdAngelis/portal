const URL_PRODUCTION = "https://esmiu.herokuapp.com"
const URL_DEVELOPER = "http://localhost:3000"

function uploadNotice(){
    const noticeModel = {	
      bigTitle:"",
      title : "",
      subTitle : "",
      body: "",
      img:
          [
            {img:""},
            {img:""},
            {img:""}
          ],
      href : "",
      date : 0,
      links: 
            [
                { title:"", url:"" },
                { title:"", url:"" },
                { title:"", url:"" }   
            ]
    }	

noticeModel.bigTitle = document.getElementById('bigTitle-update').value
noticeModel.title = document.getElementById('title-upade').value
noticeModel.subTitle = document.getElementById('subTitle-upade').value
//noticeModel.href = document.getElementById('href-upade').value
noticeModel.body = document.getElementById('bodyNotice-upade').value
//noticeModel.img[0].img = document.getElementById('img0-upade').value
//noticeModel.img[1].img = document.getElementById('img1-upade').value
//noticeModel.img[2].img = document.getElementById('img2-upade').value
noticeModel.links[0].title = document.getElementById('titleLink0-upade').value
noticeModel.links[0].url = document.getElementById('urlLink0-upade').value
noticeModel.links[1].title = document.getElementById('titleLink1-upade').value
noticeModel.links[1].url = document.getElementById('urlLink1-upade').value
noticeModel.links[2].title = document.getElementById('titleLink2-upade').value
noticeModel.links[2].url = document.getElementById('urlLink2-upade').value

//Configurar titulo para formato url
noticeModel.href = noticeModel.title.toLowerCase()
noticeModel.href = noticeModel.href.normalize('NFD').replace(/[\u0300-\u036f]/g,'') // tira todos acentos e caracteres especiais
noticeModel.href = noticeModel.href.replace(/ /g,'-')+".php"
console.log(noticeModel.href)
 axios.post(URL_PRODUCTION+"/upload/notice", noticeModel)
.then(res=>{

}).catch(error=>{

})
  }//Function end 

  const eventUpdate = {	
    esmiucado : "",
    title : "",
    body:"",
  
    date : 0,
    links: 
    [
        {
          title:"",
          url:""
        }
    ] 
  }	