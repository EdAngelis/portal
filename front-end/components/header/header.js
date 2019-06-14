const URL_DEV = "http://localhost:3000/"
const URL_PRODUCTIONS = "https://esmiu.herokuapp.com/"
getUser()

function toggleNavbar(){
    var el = document.querySelector('.collapse');
    el.classList.toggle('show');
}

//Config navBar Links to diferents pages
const indexHref = "http://localhost/portal/front-end/index.php"
if (window.location.href === indexHref){
    document.getElementById('homeHref').href = "index.php"
    document.getElementById('linkEntrar').href = "pages/Login/login.php"
    document.getElementById('linkRegister').href = "pages/register/register.php"
}

function getUser (){
    
    const token = {token: sessionStorage.getItem('token')}
    
    axios.post(URL_PRODUCTIONS+"user/getUser", token)
    .then(response=>{
        console.log(response.data)
        document.getElementById('userLoged').innerHTML = response.data.name
    })
}

