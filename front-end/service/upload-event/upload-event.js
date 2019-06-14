const URL_PRODUCTION = "https://esmiu.herokuapp.com"
const URL_DEVELOPER = "http://localhost:3000"

const esmiuModel = 
{   
    selectEsmiu: "",
    selectEvent:"",
    updateEvent: false,
    esmiucado:"",
    img:"",
    src:"",
    title:"",
    description:"",
    linkTitle:"", 
    url:""
}

// Show all Esmiuçados
getEsmiuList()
function getEsmiuList() {
    const select = document.getElementById('selectEsmiu')
    axios.get(URL_PRODUCTION+"/esmiucado/getEsmiu")
    .then(res =>{
        
        for (var i = 0; i < res.data.length; i++) {
            var option = document.createElement('option')
            option.value = res.data[i].esmiucado
            option.innerHTML = res.data[i].esmiucado
            select.appendChild(option);
    
        }
    })
    
}
 //Hide or Show Register Div
selectEsmiu = document.getElementById('selectEsmiu')
divRadio = document.getElementById('radioUpdate')
registerNew = document.getElementById('registerEsmiuçado')
selectEsmiu.addEventListener('change', () => {
    if (selectEsmiu.value === "Cadastrar Novo") {
        registerNew.classList.remove('hide')
        divRadio.classList.add('hide')

    } else {
        registerNew.classList.add('hide')
        divRadio.classList.remove('hide')
    }
})
//Register new Event or Update a event with already exist
function radioValue(value) {
    if (value === "updateEvento") { 
        document.getElementById('eventTitle').classList.add('hide')
        document.getElementById('eventList').classList.remove('hide')
        const selectEvent = document.getElementById('selectEvent')
       const selectEsmiu = {selectEsmiu: document.getElementById("selectEsmiu").value}
        axios.post(URL_PRODUCTION+"/esmiucado/eventList", selectEsmiu)
        .then(res=>{
            for (var i = 0; i < res.data.eventEsmiu.length; i++) {
                var option = document.createElement('option')
                option.value = res.data.eventEsmiu[i]._id
                option.innerHTML = res.data.eventEsmiu[i].title
                selectEvent.appendChild(option);
            }
        })  
       
    }
    else {
        document.getElementById('eventTitle').classList.remove('hide')
        document.getElementById('eventList').classList.add('hide')
    }
}

function esmiuPost (){
    esmiuModel.selectEsmiu = document.getElementById("selectEsmiu").value
    esmiuModel.selectEvent = document.getElementById("selectEvent").value
    esmiuModel.updateEvent = document.getElementById("updateEventRadio").checked
    esmiuModel.esmiucado = document.getElementById("esmiuName").value
    esmiuModel.title = document.getElementById("eventTitle").value
    esmiuModel.description = document.getElementById("bodyEvent").value
    esmiuModel.linkTitle = document.getElementById("titleLink0").value
    esmiuModel.url = document.getElementById("urlLink0").value
      //formatar  img e arquivo
  var  esmiuFormat = esmiuModel.esmiucado.toLowerCase()
       esmiuFormat = esmiuFormat.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
        esmiuFormat = esmiuFormat.replace(/ /g,'-')
    esmiuModel.img = esmiuFormat + ".jpeg"
    esmiuModel.src = esmiuFormat + ".php"

    axios.post(URL_PRODUCTION+"/esmiucado/add", esmiuModel)
    .then(res=>{
        console.log(res.data)
    }).catch(error=>{
        console.log(error)
    })

}

function removeEvent(){
    const selectEvent = document.getElementById('selectEvent').value
    const selectEsmiu = document.getElementById("selectEsmiu").value
    const datas = {selectEsmiu:selectEsmiu, selectEvent:selectEvent}
    axios.post(URL_PRODUCTION+"/esmiucado/removeEvent", datas )
    .then(res=>{ console.log(res)})
    .catch(error=>{ console.log(error)})
}
