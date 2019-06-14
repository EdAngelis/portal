const URL_PRODUCTION2 = "https://esmiu.herokuapp.com"
const URL_DEVELOPER2 = "http://localhost:3000"

function showEsmiuListinEsmiuPage (){
    listTemplate = document.getElementById('listTemplate')
    esmiuFather = document.getElementById('esmiuFather');
  
  axios.get(URL_PRODUCTION2+'/esmiucado/getEsmiu')
  .then( res  =>{
     const data = res.data
     for (let i = 0; i < res.data.length; i++) 
     {       
          const newElement = listTemplate.content.cloneNode(true).children[0]
          newElement.querySelector('#esmiuImg2').src ="../../assets/img/esmiucados-icons/"+ data[i].img;
          newElement.querySelector('#esmiuTitle2').innerHTML = data[i].esmiucado
          newElement.querySelector('#esmiuTitle2').addEventListener('click',
          ()=> window.location.href = "../../pages/esmiucados/"+data[i].src);
          
          esmiuFather.appendChild(newElement)
  
     }
      
  }).catch(error=>{
      console.log(error)
  }) 
  }
