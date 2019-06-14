const URL_PRODUCTION = "https://esmiu.herokuapp.com/"
const URL_DEVELOPER = "http://localhost:3000/"

function login () {
// taking datas form

const email = document.getElementById('loginEmail').value
const password = document.getElementById('loginPassword').value

//Geting datas form in json
const valueForm = {email:email,password:password}
axios.post(URL_PRODUCTION+"user/login", valueForm)
.then(data =>{
    console.log(data.data.token)
    sessionStorage.setItem('token', data.data.token)
    
    //To go Home page
    window.location.href="../../index.php"
})
}