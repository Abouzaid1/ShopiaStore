var typed = new Typed('.typed', {
  strings: ['New Fashion trends', 'Designs with high quality','Stunning Fashion Experience'],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true
});





let newArrivContainer = document.getElementById("newArrivals")
let data = []
async function getData() {
  data = await fetch("data.json")
  data = await data.json()
  newArrival(data)
}
getData()



function newArrival(data) {
    for (let i = data.length-1; i >data.length-4 ; i--) {
      
        
        newArrivContainer.innerHTML += `<div class="col-lg-4 col-md-6 p-2 ">
        <div class="w-100 overflow-hidden product-div text-center ">
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
  
  document.title =localStorage.getItem("user")!=null && localStorage.getItem("user")!="null"? `Shopia | Hi ${localStorage.getItem("user") }`:`Shopia | Hi Guest`