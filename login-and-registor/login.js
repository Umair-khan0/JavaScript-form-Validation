const form=document.getElementById('form');
const email=document.getElementById('email');
const password=document.getElementById('password');
form.addEventListener('submit', e =>{
    e.preventDefault();

    checkInputs();
})

function setError(element, message){
    const inputBox=element.parentElement;
    const errorMessage=inputBox.querySelector('.error');
    errorMessage.innerHTML=message;

    errorMessage.classList.add('error');
    errorMessage.classList.remove('success');
}

function setSuccess(element, message){
    const inputBox=element.parentElement;
    const errorMessage=inputBox.querySelector('.error');
    errorMessage.innerHTML=message;

    errorMessage.classList.remove('error');
    errorMessage.classList.add('success');
}
const inValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkInputs(){
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    if(emailValue===''){
        setError(email, 'email required');
    }
    if(passwordValue===''){
        setError(password, 'password required');
    }
}
email.addEventListener('keydown', event=>{
    if(!inValidEmail(event.target.value)){
        setError(email, 'Please enter a valid email');
    }else{
        setSuccess(email, 'Valid email')
    }
});
password.addEventListener('keydown', event=>{
    if(event.target.value.length<7){
        setError(password, 'Password must contain 8 characters')
    }else{
        setSuccess(password, 'Requirement completed');
    }
})