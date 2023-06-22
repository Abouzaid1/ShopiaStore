let signupbtn = document.getElementById("signin")
let username = document.getElementById("username")
let password = document.getElementById("password")
console.log(signupbtn.href);
let user = []
let admin = []

//---------------------------------------------------------------------------------------------
// getting the products data from the json file that i have made 
async function getUserData() {
    user = await fetch("users.json")
    user = await user.json()
    console.log(user.length);
    signupbtn.addEventListener("click",()=>{
        console.log(user.length);
        for(let i=0;i<user.length;i++){
            if(username.value == user[i].name && password.value == user[i].password ){

                
                localStorage.setItem("user" ,`${username.value}`)
                localStorage.setItem("role" ,`user`)
                signupbtn.href = `index.html?role=${localStorage.getItem("role")}&username=${localStorage.getItem("user")}`
                break
            }
        }
    })
   
}
async function getAdminData() {
    admin = await fetch("admin.json")
    admin = await admin.json()
    console.log(admin);
    signupbtn.addEventListener("click",()=>{

        for(let i=0;i<admin.length;i++){
            if(username.value == admin[i].name && password.value == admin[i].password ){
                let name = username.value
                
                localStorage.setItem("user" ,`${username.value}`)
                localStorage.setItem("role" ,`admin`)
                signupbtn.href = `index.html?role=${localStorage.getItem("role")}&username=${localStorage.getItem("user")}`

                break
            }
        }
    })
}
getUserData()
getAdminData()


document.title = `Shopia | Is this your first time`





