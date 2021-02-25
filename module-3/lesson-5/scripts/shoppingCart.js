let shoppingCart = [
  {
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
  },
  { 
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
},
{ 
  name:"mushrooms",
  type:"food",
  quantity:10,
  price:.1
},
{
  name:"can of beer",
  type:"alcohol",
  quantity:4,
  price:1.1
},
{
  name:"prosecco",
  type:"alcohol",
  quantity:1,
  price:8.99
},
{
  name:"steak",
  type:"food",
  quantity:2,
  price:3.99
},
{
  name:"blue cheese",
  type:"food",
  quantity:1,
  price:2.99
},
{
  name:"candles",
  type:"home",
  quantity:3,
  price:1.99
},
{ 
  name:"cheesecake",
  type:"food",
  quantity:1,
  price:4.99
},
{ 
  name:"onions",
  type:"food",
  quantity:3,
  price:.4
}];
// console.log(shoppingCart[0].name)

function getTotalPrice(shoppingCart){
  let total = 0;
  let itemPrice = 0;
  
  for(let counter = 0; counter < shoppingCart.length; counter++){
    let objItem = shoppingCart[counter];
    itemPrice = parseFloat(objItem.quantity) * parseFloat(objItem.price);
    total = total + itemPrice;
  }
  return total.toFixed(2)
}
let objCoupon = {
  name:'20OFF',
  value:20,
  category:'food',
  type:'percentage'
}
let cartTotal = getTotalPrice(shoppingCart);
console.log(cartTotal)