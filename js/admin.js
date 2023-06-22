
let tap = document.querySelectorAll(".tap")
let taps = document.querySelectorAll(".taps")
let messageBlock = document.getElementById("messageBlock")
let orderBlock = document.getElementById("orderBlock")
let complete =0
let message
let order
tap.forEach((item) => {

    item.addEventListener("click", (e) => {
        tap.forEach(test => {
            test.classList.add("notactive")
            test.classList.remove("ms-5")
        })
        attr = item.getAttribute("admin_page")
        item.classList.remove("notactive")
        item.classList.add("ms-5")
        item.style.transition = "0.3s"
        taps.forEach(blocks => {
            if (item.getAttribute("admin_page") == blocks.getAttribute("admin_page")) {
                blocks.classList.add("d-block")
                blocks.classList.remove("d-none")
                blocks.style.transition = "0.3s"
            }
            if (item.getAttribute("admin_page") != blocks.getAttribute("admin_page")) {
                blocks.classList.remove("d-block")
                blocks.classList.add("d-none")
                blocks.style.transition = "0.3s"
            }
        })

    })
})

if (localStorage.getItem("contact") != null) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("contact")).length; i++) {

        message = JSON.parse(localStorage.getItem("contact"))[i]

        messageBlock.innerHTML += `<h5 class="m-0 fw-bolder">${message.username}</h5>
    <p class=" fw-lighter">${message.subject}</p>
    <p>${message.textArea}</p>
    <hr>`
    }
}
if (localStorage.getItem("order") != null) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("order")).length; i++) {

        order = JSON.parse(localStorage.getItem("order"))[i]

        orderBlock.innerHTML += ` <div class="d-md-flex justify-content-between align-items-end w-100">
        <div>

            <h5 class="m-0 fw-bolder">${order.firstName + "" + order.lastName} </h5>
            <p class=" fw-lighter">${order.emailAddress}</p>
            <p>${order.adress}</p>
            <p>${order.phone}</p>
            <p>TotalPrice = ${order.price}</p>
        </div>
        <div class="">

            <button class="bg-transparent border-1 border px-4 py-2 rounded-pill btn-shop" id="complete"> Processing </button>
        </div>
    </div>
    <hr>`
    complete = document.querySelectorAll("#complete")
    complete.forEach(item=>{
    
        item.addEventListener("click",()=>{
            console.log("DKFJ");
            item.innerHTML = "Completed"
        })
    })
    }
}
document.title = `Shopia | Hi Admin`