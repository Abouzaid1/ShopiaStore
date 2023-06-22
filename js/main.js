let product_container = document.getElementById("product-container")
let data = []
// search declarartion
let searchBtn = document.getElementById("search-btn")
let searchInput = document.getElementById("search-input")
// rate declaration
let star = 0



// filter declaration 
let filter_btn = document.getElementById("filter-btn")
let filter_page = document.getElementById("filter-page")

// filter btns  declaration
let rate_nums = document.querySelectorAll("#rate-num")


//Categieroies declaration
let men_btn = document.getElementById("men-btn")
let women_btn = document.getElementById("women-btn")
let kids_btn = document.getElementById("kids-btn")
// Gender Check
let genderCheck = 0
//---------------------------------------------------------------------------------------------
// getting the products data from the json file that i have made 
async function getData() {
    data = await fetch("data.json")
    data = await data.json()
    console.log(data);
    renderItems(data)
}
getData()

// function resbonsible for putting the data in to the container
function putDataInConrainer(data, i) {
    product_container.innerHTML += `<div class="col-12 col-lg-4  col-md-5 mb-5">
    <div class=" overflow-hidden product-div m-auto">
    <a href="product.html?prodId=${data[i].id}&"><img src="${data[i].product_img}"
            alt="" width="100%" class="m-auto product-img"></a>
    </div>
    <div class="d-flex align-items-center justify-content-between px-3 px-xl-2">
        <div>
            <h4 class="mx-1 fw-bolder mt-4  ">${data[i].product_name}</h4>
            <h4 class="mx-1 fw-bolder " style="color: #fb701f;">${data[i].product_price} L.E</h4>
            <div class="d-flex justify-content-between">
            <p class="fw-bolder">${data[i].product_stock} <span class="fw-lighter">InStock</span></p>
            <p class="fw-bolder">${data[i].product_rate} <span class="fw-lighter">Rate</span></p>
            </div></div>
            <div class="d-flex gap-2">
            <div class=" rounded-circle color-product" style="background-color: ${data[i].product_colors.c_1};"></div>
            <div class=" rounded-circle color-product" style="background-color: ${data[i].product_colors.c_2};"></div>
            <div class=" rounded-circle color-product" style="background-color: ${data[i].product_colors.c_3};"></div>
            </div>
            </div>
            
</div>`
}



// showing the data the i have got from the fetching module 
function renderItems(data) {
    product_container.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        if (genderCheck == 0) {

            putDataInConrainer(data, i)
        } else {
            if (data[i].product_gender == genderCheck) {
                console.log("yes")
                putDataInConrainer(data, i)
            }
        }
    }

}

rate_nums.forEach(item => {
    item.addEventListener("click", () => {
        console.log(item.innerHTML);
        product_container.innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            if (data[i].product_rate >= JSON.parse(item.innerHTML) ) {
                console.log(data[i]);
                putDataInConrainer(data,i)
            }
        }
    })
})

// showing the filter page when clicking on the filter btn 
filter_btn.addEventListener("click", () => {
    filter_page.classList.toggle("d-block")
    console.log("ajkdh");
    filter_page.style.transition = "0.3s"
    filter_page.style.animationName = "show"
})

//Shoeing the products acourding the categories the user chooses
men_btn.addEventListener("click", () => {
    genderCheck = "male"
    renderItems(data)
})
// women
women_btn.addEventListener("click", () => {
    genderCheck = "female"
    renderItems(data)
})
// kids
kids_btn.addEventListener("click", () => {
    genderCheck = "kids"
    renderItems(data)
})
// filter btns
function sortLowToHigh() {
    product_container.innerHTML = ""
    const sortedItems = [...data].sort((a, b) => a.product_price - b.product_price);
    renderItems(sortedItems);
}
sortLowToHigh()
function sortHighToLow() {
    product_container.innerHTML = ""
    const sortedItems = [...data].sort((a, b) => b.product_price - a.product_price);
    renderItems(sortedItems);
}
sortHighToLow()

function reset() {
    genderCheck = 0
    product_container.innerHTML = ""
    renderItems(data)
}

//search btn

searchBtn.addEventListener("click", () => {
    let term = searchInput.value
    product_container.innerHTML = ""
    for (var i = 0; i < data.length; i++) {
        if (data[i].product_name.includes(term.trim()) == true || data[i].product_gender.includes(term.trim()) == true || data[i].product_price == term) {
            searchInput.value = ""
            putDataInConrainer(data, i)
        }
    }
})


document.title =localStorage.getItem("user")!=null && localStorage.getItem("user")!="null"? `Shopia | Hi ${localStorage.getItem("user") }`:`Shopia | Hi Guest`
