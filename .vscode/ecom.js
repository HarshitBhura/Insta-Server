
var addItemID=0;
function addToCart(item)
{
    addItemID +=1;
var selectedItem=document.createElement('div');
selectedItem.classList.add('cartImg');
selectedItem.setAttribute('id',addItemID)
var img=document.createElement('img');
img.setAttribute('src',item.children[0].currentSrc);
var title=document.createElement('div');
title.innerText=item.children[1].innerText;
 var dlelbtn=document.createElement('button');
 dlelbtn.innerText='Delete';
dlelbtn.setAttribute('onclick','dlt("+addItemID+")');

var cartItems=document.getElementById('title');
selectedItem.append(img);
selectedItem.append(title);
selectedItem.append(dlelbtn);
cartItems.append(selectedItem);
}

function dlt(item)
{
    console.log("harsh");
 document.getElementById(item).remove();
}













// let carts=document.querySelectorAll(".add-cart");
// let products=[
//     {
//         name:"grey T-shirt",
//         tag:"grayTshirt",
//         price:15,
//         inCart:0
//     },
//     {
//         name:"grey T-shirt",
//         tag:"grayTshirt",
//         price:15,
//         inCart:0
//     },
//     {
//         name:"grey T-shirt",
//         tag:"grayTshirt",
//         price:15,
//         inCart:0
//     },
//     {
//         name:"grey T-shirt",
//         tag:"grayTshirt",
//         price:15,
//         inCart:0
//     }
   
// ];
// for(let i=0;i<carts.length;i++)
// {
//     carts[i].addEventListener("click",()=>{
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     })
// }
// function cartNumbers(product) 
// {
   
//     let productNumbers=localStorage.getItem("cartNumbers");

//     productNumbers=parseInt(productNumbers);
//     if(productNumbers)
//     {
//         localStorage.setItem("cartNumbers",productNumbers+1);
//     }
//     else{
//         localStorage.setItem("cartNumbers",1);
//     }

//     setItems(product);
// }

// function setItems(product)
// {
//    let cartItems=localStorage.getItem("productsInCart");
//    cartItems=JSON.parse(cartItems);
   
//    if(cartItems !=null)
//    {
//     if(cartItems[product.tag] ==undefined)
//     {
//         cartItems={
//             ...cartItems,
//             [product.tag]:product
//         }
//     }
//     cartItems[product.tag].inCart +=1;
//    }
//     else{
//     product.inCart=1;
//      cartItems={
//         [product.tag]:product
//      }
//     }
 
//   localStorage.setItem("productsInCart", JSON.stringify
//   (cartItems));
// }

// function totalCost(product)
// {
//     let cartCost=localStorage.getItem("totalCost");

//     if(cartCost !=null)
//     {
//         cartCost=parseInt(cartCost);
//         localStorage.setItem("totalCost", cartCost+product.price);
//     }
//     else{
//    localStorage.setItem("totalCost", product.price);
//     }
// }

// function displayCart()
// {
//  let cartItems=localStorage.getItem("productsInCart");
//  cartItems=JSON.parse(cartItems);
// let productContainer=document.querySelector(".products");
// let cartCost=localStorage.getItem("totalCost");
//  if(cartItems && productContainer )
//  {
//     productContainer.innerHTML=" ";
//     Object.values(cartItems).map(item=>{
//         productContainer.innerHTML +=`
//         <div class="product">
//         <ion-icon name="close-circle"><ion-icon>
//         <img src="./images/${item.tag}.jpg">
//         <span>${item.name}</span>
//         </div>
//         <div class="price">$${item.price},00</div>
//         <div class="quantity">
//         <ion-icon  class="decrease" name="arrow-dropleft-circle"><ion-icon>
//         <span>${item.inCart}</span>

//         <ion-icon  class=increase" name="arrow-dropright-circle"><ion-icon>
//         </div>
//         <div class="total">
//         $${item.inCart*item.price},00
//         </div>
//         `;
//     });

//     productContainer.innerHTML +=`
//     <div class="basketTotalContainer">
//     <h4 class="basketTotalTitle">
//        Basket Total
//        </h4>
//        <h4 class="basketTotal">
//        $${cartCost},00
//        </h4>
//     `
//  }
// }

// displayCart()