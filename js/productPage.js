let urlParams = new URLSearchParams(window.location.search);
let prodId = urlParams.get('prodId');
let productPageContainer = document.getElementById("productPageContainer")
console.log(prodId);
let data = []
let mainImg = 0
let imgs = 0
let star = 0
let newArrivContainer = document.getElementById("newArrivals")
let btnToCart=0
let wishlistBtn = 0
let dataObject = {}
let itemAdded = document.getElementById("itemAdded")
let clicked = true
let clicked2 = true
let alldataArr
let wishDataArr
if (localStorage.getItem("data") != null) {
     alldataArr = JSON.parse(localStorage.getItem("data"))
}else{
    alldataArr= []
}
if (localStorage.getItem("wishlist") != null) {
     wishDataArr = JSON.parse(localStorage.getItem("wishlist"))
}else{
    wishDataArr= []
}

//---------------------------------------------------------------------------------------------
// getting the products data from the json file that i have made 
async function getData() {
    data = await fetch("data.json")
    data = await data.json()
    console.log(data);
    renderItems(data)
    newArrival(data)
}
getData()


function renderItems(data) {
    for (let i = 0; i < data.length; i++) {
        if (i == prodId) {
            console.log("yes");
        dataObject={
            id:data[i].id,
            username:localStorage.getItem("user"),
            product_img:data[i].product_img,
            product_name:data[i].product_name,
            product_price:data[i].product_price
        }
            productPageContainer.innerHTML = `<div class="row p-lg-5">
            <div class="col-lg-6 px-lg-5 m-auto">
            <div class="overflow-hidden product-page-div mb-5">
                <img src="${data[i].product_img}" width="100%" alt="" id="mainImg"></div>
               
            </div>
            <div class="col-lg-6 ">
                <h1 class="fw-bolder fs-1">${data[i].product_name}</h1>
                <p>${data[i].product_desc}</p>
                <hr>
                <p class="fw-bolder ">Rate</p>
                <div>
                    <button class="bg-transparent border-0 p-0"><i class="fa-regular fa-star fs-5" style="color: #fb701f;"></i></button>
                    <button class="bg-transparent border-0 p-0"><i class="fa-regular fa-star fs-5" style="color: #fb701f;"></i></button>
                    <button class="bg-transparent border-0 p-0"><i class="fa-regular fa-star fs-5" style="color: #fb701f;"></i></button>
                    <button class="bg-transparent border-0 p-0"><i class="fa-regular fa-star fs-5" style="color: #fb701f;"></i></button>
                    <button class="bg-transparent border-0 p-0"><i class="fa-regular fa-star fs-5" style="color: #fb701f;"></i></button>
                </div>
                <hr>
                <p class="fw-bolder ">Price</p>
                <h4 class="mx-1 fs-1 fw-bolder " style="color: #fb701f;">${data[i].product_price} L.E</h4>
                <hr>
                <p class="fw-bolder ">Select size</p>
                <div>
                    
                    <button class="bg-transparent border-1 border border-black rounded-pill p-2 px-4 btn-watch ">Lg</button>
                    <button class="bg-transparent border-1 border border-black rounded-pill p-2 px-4 btn-watch ">Md</button>
                    <button class="bg-transparent border-1 border border-black rounded-pill p-2 px-4 btn-watch ">sm</button>
                   
                </div>
                <hr>
                <p class="fw-bolder ">Colors Available</p>
                <div class="d-flex gap-2">
                    <div class=" rounded-circle color-product" style="background-color: ${data[i ].product_colors.c_1};"></div>
                    <div class=" rounded-circle color-product" style="background-color: ${data[i ].product_colors.c_2};"></div>
                    <div class=" rounded-circle color-product" style="background-color: ${data[i ].product_colors.c_3};"></div>
                </div>
                <hr>
                <p class="fw-bolder ">Photos</p>
                <div class="w-100 d-flex gap-5 px-lg-5 m-auto">
                <div class="overflow-hidden product-page-imgs">   
                    <img src="${data[i].product_imgs.img_1}" id="imgs" width="100%" alt="">
                </div>
                <div class="overflow-hidden product-page-imgs">   
                    <img src="${data[i].product_imgs.img_2}" id="imgs" width="100%" alt="">
                </div>
                <div class="overflow-hidden product-page-imgs">   
                    <img src="${data[i].product_imgs.img_3}" id="imgs" width="100%" alt="">
                </div>
            </div>
            <hr>
                <div class="p-lg-5 w-100 d-lg-flex align-items-center gap-5">
                    <button id="btnToCart" class="w-100 fw-bolder fs-6 border-0 btn-shop rounded-pill px-3 py-1 bg-dark text-light py-3 px-5">Add to cart</button>
                    <i class="fs-1 fa-regular fa-heart" style="color: #ff0000; cursor:pointer;" id="wishlistBtn"></i>
                    </div>
                    </div>
                    </div>`
                    document.title = `Shopia | ${data[i].product_name }`
        // image preview
            mainImg = document.getElementById("mainImg")
            imgs = Array.from(document.querySelectorAll("#imgs"))
            console.log(imgs);
            console.log(mainImg);


            imgs.forEach((item) => {
                
                item.addEventListener("click", (e) => {
                    for (let i = 0; i < imgs.length; i++) {
                        imgs[i].classList.remove("active2")
        
                    }
                    console.log(e.target.src);
                    mainImg.src = e.target.src
                    item.classList.add("active2")
                    mainImg.style.transition = "0.3s"
                })

            })

            // rate function 
            star =Array.from(document.querySelectorAll(".fa-star")) 
            for (let j = 0; j < star.length; j++) {
                    if(j<data[i].product_rate){
                        star[j].classList.add("fa-solid")
                    }
                
            }
            //Add to cart btn localstorage
            btnToCart = document.getElementById("btnToCart")
            console.log(btnToCart);
            btnToCart.addEventListener("click",()=>{
                
                if (localStorage.getItem("role") != "null" && clicked == true){
                    btnToCart.innerHTML = "Added"
                    alldataArr.push(dataObject)
                    localStorage.setItem("data", JSON.stringify(alldataArr))
                    itemAdded.classList.add("d-block")
                    itemAdded.classList.remove("d-none")
                    clicked = false
                }else if(localStorage.getItem("role") == "null"){
                    btnToCart.innerHTML = "Can't add this item"
                    btnToCart.classList.add("text-danger")
                    itemAdded.classList.add("d-block")
                    itemAdded.classList.remove("d-none")
                    itemAdded.innerHTML = `<h3 class="text-danger">You Need to Signin</h3>`
                }else if (clicked == false){
                    btnToCart.innerHTML = "Already in cart" 
                }
                
            })
            // Add to wish list 
            wishlistBtn = document.getElementById("wishlistBtn")
            wishlistBtn.addEventListener("click",()=>{
                if (localStorage.getItem("role") != "null" && clicked2 == true){
                    wishlistBtn.classList.add("fa-solid")
                    wishDataArr.push(dataObject)
                    localStorage.setItem("wishlist", JSON.stringify(wishDataArr))
                    itemAdded.classList.add("d-block")
                    itemAdded.classList.remove("d-none")
                    clicked2 = false
                }else if(localStorage.getItem("role") == "null"){
                    btnToCart.innerHTML = "Can't add this item"
                    btnToCart.classList.add("text-danger")
                    itemAdded.classList.add("d-block")
                    itemAdded.classList.remove("d-none")
                    itemAdded.innerHTML = `<h3 class="text-danger">You Need to Signin</h3>`
                }else if (clicked2 == false){
                    
                }
            })
        }
    }

}

function newArrival(data) {
    for (let i = data.length-1; i >data.length-4 ; i--) {
        console.log("s;lkdfm");
        console.log(data);
        
        newArrivContainer.innerHTML += `<div class="col-lg-4 col-md-6 p-2 ">
        <div class="w-100 overflow-hidden product-div text-center">
         <a href="product.html?prodId=${data[i].id}"><img src="${data[i].product_img}"
                    alt="" width="100%" class="m-auto product-img"></a>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <h4 class="mx-1 fw-bolder mt-4">${data[i].product_name}</h4>
            <h4 class="mx-1 fw-bolder " style="color: #fb701f;"> ${data[i].product_price} L.E</h4>
          </div>
          <div class="d-flex gap-2">
            <div class=" rounded-circle color-product" style="background-color: ${data[i].product_colors.c_1};"></div>
            <div class=" rounded-circle color-product" style="background-color: ${data[i].product_colors.c_2};"></div>
            <div class=" rounded-circle color-product" style="background-color: ${data[i].product_colors.c_3};"></div>
          </div>
        </div>
      </div>`
        
    }
 
}


