

//email Validation
export function validateEmail(email)
{
  if (!(/[a-zA-Z_.0-9]+@[a-zA-Z]+[.][a-zA-Z][a-zA-Z]+$/.test(email))){
    return true;
  }
  else {
    return false
  }

}

//mobileno Validation
export function validateMobile(mobile)
{
  var reg = new RegExp("^[-]?[0-9]+$");
  if(!reg.test(mobile)||mobile.length!=10){
    return true;
  }
  else if (mobile == '0000000000') {
    return true;
  }
  return false;
}

//name Validation
export function validateName(name)
{
  // !/^[a-zA-ZÀ-ÿ ]{2,30}$/.test(name);
 if (!/^[a-zA-Z ]{2,30}$/.test(name)) {
   return true;
 } else {
   return false;
 }
}

//password Validation
export function validatePassword(password)
{
  if(password.length<8 || password=='')
  {
    return true;
  }
  else{
    return false
  }
}
