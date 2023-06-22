let input = document.querySelector(".input")
let textArea = document.querySelector(".textArea")
let submit= document.querySelector(".submit")
let messages = []
let dataObj = []
if (localStorage.getItem("contact")!=null) {
for (let i = 0; i < JSON.parse(localStorage.getItem("contact")).length; i++) {
    dataObj= JSON.parse(localStorage.getItem("contact"))[i]
    messages.push(dataObj)
}
}
else{
    dataObj = []
}
console.log(localStorage.getItem("contact"));
console.log(messages);


submit.addEventListener("click",()=>{
    if (input.value!=""&&textArea.value!=""){
        dataObj = {
            username : new URLSearchParams(window.location.search).get("username"),
            subject:input.value,
            textArea:textArea.value
        }
        messages.push(dataObj)
        localStorage.setItem("contact",JSON.stringify(messages))
        input.value=""
        textArea.value=""
        
    }
})
document.title = `Shopia | We will reply on mail`