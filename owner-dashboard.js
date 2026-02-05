const OWNER = {

open(){
if(AUTH.role()!=="owner"){
alert("Owner only")
return
}
document.getElementById("ownerDash").style.display="block"
},

close(){
document.getElementById("ownerDash").style.display="none"
}

}
