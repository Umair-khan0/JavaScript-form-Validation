const form=document.getElementById('form');
const fName=document.getElementById('first-name')
const lName=document.getElementById('last-name')
const email=document.getElementById('email')
const password=document.getElementById('password')
const confirmPassword=document.getElementById('confirm-password')
const phoneNo=document.getElementById('mobile-no')
const cnic=document.getElementById('cnic')
const address=document.getElementById('address')

form.addEventListener('submit', e =>{
    e.preventDefault();

    checkInputs();
})

const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkInputs(){
// Getting input values and removing white spaces from the input values 
const fNameValue=fName.value.trim();
const lNameValue=lName.value.trim();
const emailValue=email.value.trim();
const passwordValue=password.value.trim();
const confirmPasswordValue=confirmPassword.value.trim()
const phoneNoValue=phoneNo.value.trim()
const cnicValue=cnic.value.trim()
const addressValue=address.value.trim();
    // first name
    if(fNameValue===''){
        setError(fName, 'Please fill out this field')
    }else if(lNameValue===''){
        setError(lName, 'Please fill out this field')
    }else if(lNameValue===''){
        setError(lName, 'Please fill out this field')
    }else if(emailValue===''){
        setError(email, 'Please fill out this field')
    }else if(passwordValue===''){
        setError(password, 'Please fill out this field')
    }else if(confirmPasswordValue===''){
        setError(confirmPassword, 'Please fill out this field');
    }else if(phoneNoValue===''){
        setError(phoneNo, 'Please fill out this field')
    }else if(cnicValue===''){
        setError(cnic, 'Please fill out this field')
    }else if(addressValue===''){
        setError(address, 'Please fill out this field')
    }
}
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

    errorMessage.classList.add('success');
    errorMessage.classList.remove('remove')
}

fName.addEventListener('keydown', event=>{
    if(event.target.value.length<2){
        setError(fName, 'Name should be atleast 3 characters')
    }else if(event.target.value.length>20){
        setError(fName, 'Maximum 20 character allowed')
    }else{
        setSuccess(fName, 'Requirement completed')
    }
})
lName.addEventListener('keydown', (event)=>{
    if(event.target.value===''){
        setError(lName, 'Please enter the last name')
    }else{
        setSuccess(lName, 'Requirement completed')
    }
})
email.addEventListener('keydown', event=>{
    if(!validEmail(event.target.value)){
        setError(email, 'Please enter a valid email')
    }else{
        setSuccess(email, 'Valid email')
    }
})

password.addEventListener('keydown', event=>{
    if(event.target.value.length<7){
        setError(password, 'Password must contain atleast 8 characters');
    }else{
        setSuccess(password, 'Valid password');
    }
})
confirmPassword.addEventListener('keyup', event=>{
    if(event.target.value===password.value){
        setSuccess(confirmPassword, 'Password matched')
    }else{
        setError(confirmPassword, 'Password not matched')
    }
})

const digitPattern=/^\d/;
phoneNo.addEventListener('keydown', event=>{
    if(digitPattern.test(event.target.value)===false){
        setError(phoneNo, 'only allowed digits');
    }else if(event.target.value.length<10){
        setError(phoneNo, 'Phone number must contain 11 digits')
    }else if(event.target.value.length>12){
        setError(phoneNo, 'Please enter a valid phone number')
    }else{
        setSuccess(phoneNo, 'Valid Phone number')
    }
})

cnic.addEventListener('keydown', event=>{
    if(digitPattern.test(event.target.value)===false){
        setError(cnic, 'only allowed digits');
    }else if(event.target.value.length<12){
        setError(cnic, 'CNIC should be of 13 digit')
    }else if(event.target.value.length>12){
        setError(cnic, 'Please enter a valid CNIC number')
    }else{
        setSuccess(cnic, 'Valid CNIC number')
    }
})

address.addEventListener('keydown', event=>{
    if(event.target.value.length<5){
        setError(address,'Please enter a valid Address')
    }else{
        setSuccess(address, 'Address is Long enough')
    }
})





  