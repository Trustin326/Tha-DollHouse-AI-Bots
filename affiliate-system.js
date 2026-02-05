const AFF = {

click(){
let c = Number(localStorage.getItem("AFF_CLICKS")||0)
c++
localStorage.setItem("AFF_CLICKS",c)
},

sale(){
let e = Number(localStorage.getItem("AFF_EARN")||0)
e+=8
localStorage.setItem("AFF_EARN",e)
},

stats(){
return {
clicks: localStorage.getItem("AFF_CLICKS")||0,
earn: localStorage.getItem("AFF_EARN")||0
}
}

}
