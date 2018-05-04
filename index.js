var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = parseInt(100 * Math.random())
 var itemObj = {itemName: item, itemPrice: price}
 cart.push(itemObj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var ret
  if (cart.length === 0){
    ret = "Your shopping cart is empty."
  }else{
    ret = "In your cart, you have "
    for(var i = 0; i < cart.length;i++)
      if(i === 0 && i === cart.length - 1){
        ret = ret + cart[i].itemName + " at $" + cart[i].itemPrice + "."
      }
      if(i < cart.length - 1 && cart.length >= 1){
        ret = ret + cart[i].itemName + " at $" + cart[i].itemPrice + ", "
      }
      if(i > 0 &&  i === cart.length - 1){
        ret = ret + "and " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
      }
  }
  return ret
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
