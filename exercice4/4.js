function validation(){
  if (password.value != confirmPassword.value){
    confirmPassword.style.border = '2px solid red';
  }else {
    confirmPassword.style.border = '2px solid green';
  }
}
