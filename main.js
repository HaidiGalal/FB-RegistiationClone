var nameInput =document.getElementById("nameInput");
var createBtn =document.getElementById("create-btn");
var signup=document.getElementById("signup");
var signin=document.getElementById("signin");
var haveAccount=document.getElementById("have-account");
var emailInput=document.getElementById("emailInput");
var passwordInput =document.getElementById("passwordInput");
var warningSignUp =document.getElementById("warning-signup");
var warningSignIn =document.getElementById("warning-signin");
var hamada=document.getElementById("hamada");

var users=[];

function checkDb(){
   
   if(localStorage.getItem("usersList")!=null){
  users=JSON.parse(localStorage.getItem("usersList"));
  return true;
} 
}


function addNameInput(){
    nameInput.classList.remove("d-none");
    signup.classList.remove("d-none");
    signin.classList.add("d-none");
    haveAccount.classList.remove("d-none");
    createBtn.classList.add("d-none");
    warningSignIn.classList.add("d-none");
    warning.classList.add("d-none");
    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    clear();


}

createBtn.addEventListener('click',addNameInput);
function toggleBtn(){
    nameInput.classList.add("d-none");
    signup.classList.add("d-none");
    signin.classList.remove("d-none");
    haveAccount.classList.add("d-none");
    createBtn.classList.remove("d-none");
    warningSignUp.classList.add("d-none");
    warning.classList.add("d-none");
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    clear();

}
haveAccount.addEventListener('click',toggleBtn);

function checkName(){
var name=nameInput.value;
console.log(name);
var regex=/^[a-zA-Z]{3,15}$/;
if(regex.test(name)){
console.log('true');
nameInput.classList.add('is-valid');
 nameInput.classList.remove('is-invalid');
 return true;
}else{
console.log('false');
nameInput.classList.remove('is-valid');
nameInput.classList.add('is-invalid');
return false;
}
}
nameInput.addEventListener('input',checkName);
function checkEmail(){
    var email=emailInput.value;
    console.log(email);
    var regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regex.test(email)){
    console.log('true');
    warning.classList.add('d-none');
    emailInput.classList.add('is-valid');
     emailInput.classList.remove('is-invalid');
     return true;
    }else{
    console.log('false');
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
    return false;
    }  
}
emailInput.addEventListener('input',checkEmail);

function checkPassword(){
    var password=passwordInput.value;
    console.log(passwordInput);
    var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(regex.test(password)){
    console.log('true');
    passwordInput.classList.add('is-valid');
     passwordInput.classList.remove('is-invalid');
     warning.classList.add('d-none');

     return true;
    }else{
    console.log('false');
    passwordInput.classList.remove('is-valid');
    passwordInput.classList.add('is-invalid');
    return false;
    }  
}
passwordInput.addEventListener('input',checkPassword);
var warning =document.getElementById("warning");
function signUp(){
    if(nameInput.value=="" || emailInput.value=="" || passwordInput.value==""){
      warning.classList.remove("d-none");
    }
    
    if(checkEmail()&checkName()&checkPassword()){
   
    if(emailExists()){
    console.log("email exist !!");
    warningSignUp.classList.remove("d-none");
    clear();
    }else{
        console.log("new email");
      var    userData={
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value
        }
      users.push(userData);
      localStorage.setItem("usersList",JSON.stringify(users));
      toggleBtn();
       clear();
    }
       
      
    }

    
}
signup.addEventListener('click',signUp);

function signIn(){
 var email=emailInput.value;
 var password=passwordInput.value;
 if( emailInput.value=="" || passwordInput.value==""){
    warning.classList.remove("d-none");
    
  }
 if(checkEmail()& checkPassword()){
    if(checkDb())  {
        for(var i=0;i<users.length;i++){
      
          if(email==users[i].email && password==users[i].password){
           console.log("email and password matched !!!")   ;
           var name=users[i].name;
           localStorage.setItem("Name",name);
           
      
           clear();
           window.location='./home.html';
      
           break;
          }else{
            
            warningSignIn.classList.remove('d-none');
             clear();
             console.log("email and password  Not matched !!!")   ;
       
          }
        }
        // 
      
       } else{
          warningSignIn.classList.remove('d-none');
      
          console.log("email or password incorrect");
           clear();
      
       }
 }
 

}
signin.addEventListener('click',signIn);

function emailExists(){
    if(checkDb()){
       for(var i=0;i<users.length;i++){
        if(users[i].email==emailInput.value){
            return true;
        }
        
       }
       return false;
      
    }else{
        return false;
    }
    
    

}
function clear (){
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";
    nameInput.classList.remove('is-valid');
    emailInput.classList.remove('is-valid');
    passwordInput.classList.remove('is-valid');
}



