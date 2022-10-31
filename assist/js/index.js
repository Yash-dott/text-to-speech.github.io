let user_input = document.querySelector("#user_input")
let volume = document.querySelector("#volume")
let pitch = document.querySelector("#pitch")
let speed = document.querySelector("#speed")
let convert_btn = document.querySelector("#convert_btn")
var js_speak = new SpeechSynthesisUtterance();


define=()=>{
    js_speak.text = user_input.value
    js_speak.volume = volume.value
    js_speak.pitch = pitch.value
    js_speak.rate = speed.value
    speechSynthesis.speak(js_speak);
}
convert_btn.addEventListener("click",()=>{
   define()
})
document.addEventListener("keydown",(key)=>{
    if(key.key == "Enter"){
        define()
    }
})