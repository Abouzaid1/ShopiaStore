// slide on scroll animation
const boxes = document.querySelectorAll(".box");
const checkBoxes = () => {
const triggerBottom = (window.innerHeight / 5) * 4;
boxes.forEach((box) => {
const boxTop = box.getBoundingClientRect().top;
if (boxTop < triggerBottom){

 box.classList.add("show");
}
else{
 box.classList.remove("show");
}
})
}
window.addEventListener("scroll", checkBoxes);
checkBoxes()




// url params to get the same user every time



if (localStorage.getItem("role") != "null" && localStorage.getItem("user") != "null" && localStorage.getItem("user") != null && localStorage.getItem("role") != null){
  function addOrUpdateURLParam(key, value) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
    history.pushState(null, "", newRelativePathQuery);
    console.log("sdf");
  }

  addOrUpdateURLParam("role", localStorage.getItem("role"));
  addOrUpdateURLParam("username", localStorage.getItem("user"));
  loginBtn.innerHTML = `<div class="d-flex gap-3 align-items-center border border-1 rounded p-1 px-2"><i class="fa-solid fa-user" style="color: #ff7b00;"></i> <p class="m-0">Hi  ${localStorage.getItem("user")}</p></div>`
}else if(localStorage.getItem("role") == "null" && localStorage.getItem("user") == "null" && localStorage.getItem("user") == null && localStorage.getItem("role") == null){
  loginBtn.innerHTML = `<button  class="Btn">
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div>
  
  <div class="text" >Login</div>
</button>`
document.title = "Shopia"
}


// Admin Pages

let adminPages = document.getElementById("adminPages")
if (localStorage.getItem("role") == "admin"){
  adminPages.innerHTML = `<a class="nav-link" href="admin.html?role=null&username=null" >
  Admin Page
</a>
`
}

// Dark mode function


let darkMode = document.getElementById("darkMode")
let root = document.documentElement

if(localStorage.getItem("theme")!=null){
  root.setAttribute("dataTheme",localStorage.getItem("theme"))
}


darkMode.addEventListener("click",()=>{
  if(root.getAttribute("dataTheme")=="light"){
    root.setAttribute("dataTheme","dark")
    localStorage.setItem("theme","dark")
}
else if(root.getAttribute("dataTheme")=="dark"){
    root.setAttribute("dataTheme","light")
    localStorage.setItem("theme","light")
}
})


//logOut


let logout = document.getElementById("logout")

logout.addEventListener("click",()=>{
  localStorage.setItem("role","null") 
  localStorage.setItem("user","null") 
  addOrUpdateURLParam("role", "null");
  addOrUpdateURLParam("username","null");
  loginBtn.innerHTML = `<button  class="Btn">
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div>
  
  <div class="text" >Login</div>
</button>`

})