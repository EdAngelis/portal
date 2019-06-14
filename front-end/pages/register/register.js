const URL_PRODUCTION = "https://esmiu.herokuapp.com/"
const URL_DEVELOPER = "http://localhost:3000/"

// Send email to validate user email
function emailValidation(){

    // taking datas form
    const name = document.getElementById('registerName').value
    const email = document.getElementById('registerEmail').value
    const confEmail = document.getElementById('confEmail').value
    const password = document.getElementById('registerPass').value
    const confPassword = document.getElementById('confPassword').value
    //Geting datas form in json
    const valueForm = {name:name,email:email,confEmail:confEmail,password:password,confPassword:confPassword, code:""}

    axios.post(URL_PRODUCTION+"user/vl", valueForm)
    .then(data =>{
        console.log(data)
        //Salve value form in sessionStorage
        sessionStorage.setItem('userToRegister', JSON.stringify(valueForm))
       // To go validation page
        window.location.href="../emailValidation/emailValidation.php"
    })
}

function registerUser () {
    valueForm = JSON.parse(sessionStorage.getItem('userToRegister'))
    const emailCodValidation = document.getElementById('emailCod').value
    valueForm.code = emailCodValidation
    axios.post(URL_PRODUCTION+"user/register", valueForm)
    .then(data=>{
        console.log(data)
        window.location.href="../../index.php"
    }).catch(error=>{
        console.log(error)
    })
    
    
}