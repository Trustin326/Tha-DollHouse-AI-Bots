const LIVE_AI = {

saveKey(key){
localStorage.setItem("LIVE_API_KEY",key)
alert("API Key Saved In Browser")
},

getKey(){
return localStorage.getItem("LIVE_API_KEY")
},

async runLive(prompt){

const key = this.getKey()
if(!key) return "No API Key Set"

const res = await fetch("https://api.openai.com/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+key
},
body:JSON.stringify({
model:"gpt-4.1-mini",
messages:[{role:"user",content:prompt}]
})
})

const data = await res.json()
return data.choices[0].message.content

}

}
