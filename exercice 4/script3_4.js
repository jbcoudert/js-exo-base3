var mdp = document.getElementById("motdepasse")
var conf = document.getElementById("confirmation")
var btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click",function(){
    if(mdp.value===conf.value){
        mdp.style.border="3px solid green"
        conf.style.border="3px solid green"
    }else{
        mdp.style.border="3px solid red"
        conf.style.border="3px solid red"
    }
})