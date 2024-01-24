const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");


// buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active"); //ne eklenecekse o
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){ //composedPath tıkladığını bulma
            searchForm.classList.remove("active");
        }
    })
})

cartBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active"); //ne eklenecekse o
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)){ //composedPath tıkladığını bulma
            cartItem.classList.remove("active");
        }
    })
})

menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active"); //ne eklenecekse o
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)){ //composedPath tıkladığını bulma
            navbar.classList.remove("active");
        }
    })
})
