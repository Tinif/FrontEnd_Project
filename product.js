var productcontainer=document.querySelector(".product-display")

var search=document.querySelector("#search-bar-input")

var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredValue = event.target.value.toUpperCase()
    
    console.log(enteredValue)
    
    for (i=0;i<productlist.length;i++){
        var productname =productlist[i].querySelector("h4").textContent
        
        if (productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
            
        }
    }
})

var cartItem=document.querySelector(".cart-item")

var cartItemi=cartItem.querySelector("#i")

function showCart(){
    cartItem.style.top="130px"
    cartItemi.style.display="block"
    
}

function closeCart(){
    cartItem.style.top="100%"
    cartItemi.style.display="none"
}

var cartItemDisplay=document.querySelector(".cart-item")

//Add to cart
function addToCart(event){
    var CartProduct =event.target.parentElement.parentElement

    console.log(CartProduct)

    cartItemDisplay.append(CartProduct)
}