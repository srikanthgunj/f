let  userName=document.querySelector("#user")

let  password=document.querySelector("#pass")
let button=document.querySelector("#login")
let wrong=document.querySelector("#wrong")
 button.onclick=logi
function logi(){
   let x=userName.value
   let y=password.value
   if ( x=='srikanth' && y =='1234')
   {
      window.location.replace("afterlog.html");
   }
   else
   {
      wrong.textContent="wrong password and user name"
   }
}
