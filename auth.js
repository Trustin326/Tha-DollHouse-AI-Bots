const AUTH = {
login(email){
if(email === "owner@thadollhouse.ai"){
localStorage.setItem("ROLE","owner")
}
else{
localStorage.setItem("ROLE","buyer")
}
},

logout(){
localStorage.removeItem("ROLE")
},

role(){
return localStorage.getItem("ROLE") || "guest"
}
}
