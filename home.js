var content="Welcome ";
function getName(){
    if(localStorage.getItem("Name")!=null){
       content+=localStorage.getItem("Name"); 
   console.log(content);
   hamada.innerHTML=content;
    }
  
     
 }
 getName();

 var logout = document.getElementById("logout");
 console.log(logout);

 function logOut(){
    console.log("logout");
    window.location='./index.html';
 }
 logout.addEventListener('click',logOut);

