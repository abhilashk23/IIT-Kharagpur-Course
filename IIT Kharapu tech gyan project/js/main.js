function myFunction(){
    var x = document.getElementById("myTopnav");

    if(x.className === "topnav"){
        x.className += " responsive"; 
    }
    else{
        x.className = "topnav";
    }

    var icon = document.getElementById("bars");
    if(icon.className === "fas fa-bars"){
        icon.className += "fas fa-times";
    }
    else{
        icon.className="fas fa-bars";
    }
}


const signupButton = document.getElementById('signUp');
const signinButton = document.getElementById('signIn');
const container = document.getElementById('container');

signupButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});


signinButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});