var product = JSON.parse(localStorage.getItem(`cart_details`))
var cart_2 = document.getElementById(`cart_2`)
let cart_img = product[0].images
let cart_title = product[0].title
let cart_description = product[0].description
let cart_price = product[0].price
let cart_rating = product[0].rating
let cart_brand = product[0].brand
let cart_warrantyInformation = product[0].warrantyInformation

let carousel = ``
for (let i = 0; i < cart_img.length; i++) {
    carousel += `
    <div class="carousel-item${i === 0 ? ' active' : ''} width_height_full p-3" data-bs-interval="2000">
      <div class="d-flex justify-content-center height_full">
        <img src="${cart_img[i]}" class="d-block" alt="...">
      </div>
    </div>
    `
}

if (cart_img.length > 1) {
    cart_2.innerHTML = `
    <div class=" m-auto col-sm-9 col-md-6">
        <div class="div2">
              <div class="img_2_div d-flex justify-content-center py-2">
                <div id="carouselExampleInterval" class="carousel carousel-dark slide width_height_full" data-bs-ride="carousel">
                    <div class="carousel-inner width_height_full">
                       ${carousel}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
              </div>
              <div class="p-3 d-flex">
                <div>
                  <p class="fw-medium fs-3">${cart_title}</p>
                    <p class="fw-semibold mb-1" id="description">${cart_description}</p><button id="show" class="mb-2">Show more</button>
                  <p class="fw-semibold">Price: ${cart_price}$</p>
                  <p class="fw-semibold"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>(${cart_rating})</p>
                </div>
              </div>
        </div>
    </div>
<div class="m-auto col-sm-9 col-md-6 mt-5 mt-md-0">
    <div class="div2 py-4 p-sm-5 container">
         <p class="fw-medium fs-2">${cart_title} 📱</p>
         <p class="fw-semibold fs-5">● Brand: ${cart_brand} 🏷️</p>
         <p class="fw-semibold fs-5">● ${cart_warrantyInformation} 📜</p>
         <div class="d-flex align-items-center mt-4">
           <p class="fw-semibold fs-5 mb-0 me-3">● Quantity</p>
           <div class="d-flex"> 
               <div>
                  <button onclick="update('minus')" class="minus_btn"><i class="bi bi-dash"></i></button>
               </div>
               <div id="quantity" class="fs-4 fw-semibold">1</div>
               <div>
                  <button onclick="update('plus')" class="plus_btn"><i class="bi bi-plus"></i></button>
               </div>
           </div>
         </div>
        <button class="buy_btn fw-bold fs-5 mt-4" onclick="buy()">Buy Now 🛒</button>
        <div class="mt-3" id="comment_box">
             <div class="sticky-top comment_send d-flex align-items-center">
                <input type="text" placeholder="Enter review" class="h-75 comment_input ps-3">
                <button onclick="send()" class="send_btn">
                  <i class="bi bi-send-fill fs-3"></i>
                </button>
             </div>
        </div>
    </div>
</div>
    `
}


else {
    cart_2.innerHTML = `
    <div class=" m-auto col-sm-9 col-md-6">
        <div class="div2">
              <div class="img_2_div d-flex justify-content-center py-2">
                <img src="${cart_img[0]}" alt="" class="img_2">
              </div>
              <div class="p-3 d-flex">
                <div>
                  <p class="fw-medium fs-3">${cart_title}</p>
                    <p class="fw-semibold mb-1" id="description">${cart_description}</p><button id="show" class="mb-2">Show more</button>
                  <p class="fw-semibold">Price: ${cart_price}$</p>
                  <p class="fw-semibold"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>(${cart_rating})</p>
                </div>
              </div>
        </div>
    </div>
<div class="m-auto col-sm-9 col-md-6 mt-5 mt-md-0">
    <div class="div2 py-4 p-sm-5 container">
         <p class="fw-medium font_size">${cart_title} 📱</p>
         <p class="fw-semibold fs-5">● Brand: ${cart_brand} 🏷️</p>
         <p class="fw-semibold fs-5">● ${cart_warrantyInformation} 📜</p>
         <div class="d-flex align-items-center mt-4">
           <p class="fw-semibold fs-5 mb-0 me-3">● Quantity</p>
           <div class="d-flex"> 
               <div>
                  <button onclick="update('minus')" class="minus_btn"><i class="bi bi-dash"></i></button>
               </div>
               <div id="quantity" class="fs-4 fw-semibold">1</div>
               <div>
                  <button onclick="update('plus')" class="plus_btn"><i class="bi bi-plus"></i></button>
               </div>
           </div>
         </div>
        <button class="buy_btn fw-bold fs-5 mt-4" onclick="buy()">Buy Now 🛒</button>
        <div class="mt-3" id="comment_box">
             <div class="sticky-top comment_send d-flex align-items-center">
                <input type="text" placeholder="Enter review" class="h-75 comment_input ps-3">
                <button onclick="send()" class="send_btn">
                  <i class="bi bi-send-fill fs-3"></i>
                </button>
             </div>
        </div>
    </div>
</div>
`
}

let comment_box = document.getElementById(`comment_box`)
for (let i = 0; i < product[0].reviews.length; i++) {
    let comment = product[0].reviews[i].comment
    let name = product[0].reviews[i].reviewerName
    comment_box.innerHTML += `
    <div class="comment d-flex d-flex align-items-center my-3">
                <div class="comment_profile d-flex justify-content-center align-items-center">
                   <i class="bi bi-person-circle fs-1"></i>
                </div>
                <div>
                   <p class="mb-0 fw-bold">${product[0].reviews[i].reviewerName}:-</p>
                   <p class="mb-0">${product[0].reviews[i].comment}</p>
                </div>
    </div>`
}

var comment_input = document.getElementsByClassName(`comment_input`)[0]
comment_input.addEventListener(`keypress` , function(e){
   if (e.key == `Enter`) {
    send()
   }
})
function send() {
    console.log(comment_input.value);
    if (comment_input.value == ``) {
        Swal.fire("Please enter review !");
    }
    else{
        if (JSON.parse(localStorage.getItem(u_name))) {
            
        }
        Swal.fire("Review Added successfully ✅");
        comment_box.innerHTML += `
    <div class="comment d-flex d-flex align-items-center mb-3">
                <div class="comment_profile d-flex justify-content-center align-items-center">
                   <i class="bi bi-person-circle fs-1"></i>
                </div>
                <div>
                   <p class="mb-0 fw-bold">Anonymous:-</p>
                   <p class="mb-0">${comment_input.value}</p>
                </div>
    </div>`
    
    }
}



let condition = false
let description = document.getElementById(`description`)
let description_text = description.innerText
var show = document.getElementById(`show`)
var div2 = document.getElementsByClassName(`div2`)[0]

if (condition == false) {
    description.innerHTML = `${description_text.slice(0, 80)}....`
}

if (window.matchMedia('(min-width: 768px) and (max-width: 1200px)').matches) {
    show.addEventListener(`click`, function () {
        if (condition == false) {
            description.innerHTML = `${description_text.slice(0)}`
            show.innerHTML = `Show less`
            condition = true
            div2.style.height = `600px`
            
        }
        else if (condition == true) {
            description.innerHTML = `${description_text.slice(0, 80)}....`
            show.innerHTML = `Show more`
            condition = false
            div2.style.height = `500px`
        }
    })
} else if(window.matchMedia('(min-width: 382px) and (max-width: 754px)').matches){
    show.addEventListener(`click`, function () {
        if (condition == false) {
            description.innerHTML = `${description_text.slice(0)}`
            show.innerHTML = `Show less`
            condition = true
            div2.style.height = `600px`
            
        }
        else if (condition == true) {
            description.innerHTML = `${description_text.slice(0, 80)}....`
            show.innerHTML = `Show more`
            condition = false
            div2.style.height = `560px`
        }
    })
}
else if(window.matchMedia('(min-width: 0px) and (max-width: 382px)').matches){
    show.addEventListener(`click`, function () {
        if (condition == false) {
            description.innerHTML = `${description_text.slice(0)}`
            show.innerHTML = `Show less`
            condition = true
            div2.style.height = `660px`
            
        }
        else if (condition == true) {
            description.innerHTML = `${description_text.slice(0, 80)}....`
            show.innerHTML = `Show more`
            condition = false
            div2.style.height = `500px`
        }
    })
}
else{
    show.addEventListener(`click`, function () {
        if (condition == false) {
            description.innerHTML = `${description_text.slice(0)}`
            show.innerHTML = `Show less`
            condition = true
            
        }
        else if (condition == true) {
            description.innerHTML = `${description_text.slice(0, 80)}....`
            show.innerHTML = `Show more`
            condition = false
        }
    })
}




var quantity_num = 1
function update(control) {
    var quantity = document.getElementById(`quantity`)
    if (control == `minus`) {
        if (quantity_num >= 2) {
            quantity_num--
            quantity.innerHTML = quantity_num
        }
    }
    else if (control == `plus`) {
        ++quantity_num
        quantity.innerHTML = quantity_num
    }
}

function buy() {
    Swal.fire({
        title: `${cart_title}`,
        text: "Are you sure you want to buy this item?",
        imageUrl: `${cart_img[0]}`,
        imageHeight: 200,
        showDenyButton: true,
        confirmButtonText: "Yes",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Enter your delivery address",
                input: "text",
                inputAttributes: {
                    autocapitalize: "off"
                },
                showCancelButton: true,
                confirmButtonText: "Save",
                preConfirm: (address) => {
                    if (!address) {
                        Swal.showValidationMessage('Please enter your delivery address');
                    }
                    return address;
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: `${cart_title} Qty: (${quantity_num})`,
                        text: `Your parcel is being processed ✅ and will be shipped to ${result.value} soon.`,
                        imageUrl: `${cart_img[0]}`,
                        imageHeight: 200,
                        confirmButtonText: "Ok",
                    })

                }
            });
        }
    });
}

    

