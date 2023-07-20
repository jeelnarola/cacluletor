let string=""
let input=document.getElementById("inputbox")
let buttons=document.querySelectorAll("button")

let arr=Array.from(buttons)
arr.map((button) =>{
 button.addEventListener("click",(e)=>{
    if(e.target.innerHTML=="="){
        string=eval(string)
        document.getElementById("inputbox").value=string

    }
    else if(e.target.innerHTML=="AC"){
        string=""
        document.getElementById("inputbox").value=string
    }
    else if(e.target.innerHTML=="DEL"){
        string=string.substring(0,string.length-1)
        document.getElementById("inputbox").value=string

    }
    else{
    console.log(e.target)
    string+=e.target.innerHTML
    document.getElementById("inputbox").value=string
    }
 })
})