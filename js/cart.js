let cartTBody = document.getElementById("cartTBody")
let dataArr = []
let fee = document.getElementById("fee")
let totalPrice = document.getElementById("totalPrice")
let number = 0
let plus = 0
let minus = 0
let overAllPrice = document.getElementById("overAllPrice")
let sum = 0
let total = 0
let overAllPriceValue = 0
let dataObj = 0
let dataObj2 ={}
let checkOut = document.getElementById("checkOut")
let checkOutSection = document.getElementById("checkOutSection")
let back = document.getElementById("back")
let orderArr = []


if (localStorage.getItem("data") != null) { 
  for (let i = 0; i < JSON.parse(localStorage.getItem("data")).length; i++) {   
    if ( JSON.parse(localStorage.getItem("data"))[i].username == localStorage.getItem("user")) {
      dataObj =JSON.parse(localStorage.getItem("data"))[i]
      dataArr.push(dataObj)
      console.log(dataArr);
      cartTBody.innerHTML =``
      renderItems(dataArr)
    }
  }
}
if (localStorage.getItem("order")!=null) {
  for (let i = 0; i < JSON.parse(localStorage.getItem("order")).length; i++) {
      dataObj2= JSON.parse(localStorage.getItem("order"))[i]
      orderArr.push(dataObj2)
  }
}


function renderItems(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    
    cartTBody.innerHTML += `<tr>
    <th scope="row " > 
    <img src="${dataArr[i].product_img}"
    alt="" width="100px" class="rounded">
    </th>
    <td class="py-5"><a href="product.html?prodId=${dataArr[i].id}&"  >${dataArr[i].product_name}</a></td>
    <td class="py-5 fw-bolder">${dataArr[i].product_price} L.E</td>
    <td class="py-5 d-flex gap-3 fs-5 align-items-center"><i class="fa-solid fa-plus border rounded-circle p-1" id="plus" style="color: #000000;"></i> <p id="counter"> 1 </p> <i class="fa-solid fa-minus  border rounded-circle p-1 " id="minus" style="color: #000000;"></i></td>
    <td class="py-5 visually-hidden" id="total">${dataArr[i].product_price} L.E</td>
    </tr>`
    
  }
}


document.addEventListener(("DOMContentLoaded"),()=>{
  for (let i = 0; i < plus.length; i++) {

    
      for (let j = 0; j < number.length; j++) {
        if (i==j) {
          
          
          // console.log(totalQuantity);
          total[i].innerHTML = dataArr[i].product_price * number[i].innerHTML + " L.E"
        }
      }
       
      // console.log(totalQuantity);
      for (let j = 0; j < total.length; j++) {
        sum += parseInt(total[j].innerHTML ) 
      }
      
      overAllPrice.innerHTML = sum + " L.E"
      sum = 0
      totalPrice.innerHTML = parseInt(overAllPrice.innerHTML) + parseInt(fee.innerHTML) + " L.E"
      
      
    
    }
})


number = Array.from(document.querySelectorAll("#counter"))

plus = Array.from(document.querySelectorAll("#plus"))

minus = Array.from(document.querySelectorAll("#minus"))
total = Array.from(document.querySelectorAll("#total"))



for (let i = 0; i < plus.length; i++) {
  
  plus[i].addEventListener("click",()=>{
    for (let j = 0; j < number.length; j++) {
      if (i==j) {
        number[i].innerHTML ++
        
        // console.log(totalQuantity);
        total[i].innerHTML = dataArr[i].product_price * number[i].innerHTML + " L.E"
      }
    }
    
    // console.log(totalQuantity);
    for (let j = 0; j < total.length; j++) {
      sum += parseInt(total[j].innerHTML ) 
    }
    console.log(sum);
    overAllPrice.innerHTML = sum + " L.E"
    sum = 0
    totalPrice.innerHTML = parseInt(overAllPrice.innerHTML) + parseInt(fee.innerHTML) + " L.E"
    
  })
  
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click",()=>{
    for (let j = 0; j < number.length; j++) {
      if (i==j) {
        if(number[i].innerHTML!=0){

          number[i].innerHTML --
        }
        total[i].innerHTML = dataArr[i].product_price * number[i].innerHTML + " L.E"
      }
    }
    for (let j = 0; j < total.length; j++) {
      sum =sum - parseInt(total[j].innerHTML) 
    }
    console.log(sum);
    overAllPrice.innerHTML = Math.abs(sum) + " L.E";
    sum = 0
    totalPrice.innerHTML = parseInt(overAllPrice.innerHTML) + parseInt(fee.innerHTML) + " L.E"
  })

}


// getting the order details to the order page for the admin 
checkOut.addEventListener("click",()=>{
  checkOutSection.classList.add("d-block")
  checkOutSection.classList.remove("d-none")
})
back.addEventListener("click",()=>{
  checkOutSection.classList.remove("d-block")
  checkOutSection.classList.add("d-none")
})

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let emailAddress = document.getElementById("email")
let adress = document.getElementById("adress")
let phone = document.getElementById("phone")
let submit = document.getElementById("submit")



function sendEmail(){
  orderObj = {
    firstName:firstName.value,
    lastName:lastName.value,
    emailAddress:emailAddress.value,
    adress:adress.value,
    phone:phone.value,
    price:totalPrice.innerHTML,
  }
  orderArr.push(orderObj)
  localStorage.setItem("order",JSON.stringify(orderArr))
  checkOutSection.classList.add("d-none")
}

document.title = `Shopia | Complete the order`





