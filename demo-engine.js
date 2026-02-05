const DEMO_ENGINE = {

run(bot,input){

const role = AUTH.role()

if(role==="guest"){
return "Please login first"
}

if(role==="buyer" || role==="owner"){
return `${bot} AI Result:\n${input}\n\n✔ Generated Successfully`
}

}

}
