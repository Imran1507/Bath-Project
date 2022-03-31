

var cartData1 = JSON.parse(localStorage.getItem("cart"))|| [];
console.log(cartData1);

var sum=0
var total = cartData1.reduce(function (sum, elem, index, arr) {
  return sum + Number(elem.price);
}, 0);

var length = cartData1.length;
console.log(length);

console.log(total);
// total is Rs 16365
//`` - template literals
document.querySelector("#h3").innerText = ` Quantity --- ${length} `;
document.querySelector("#h2").innerText=  `Total in  RS --- ${total}` ;

cartData1.map(function (elem, index) {
  var box = document.createElement("div");
  box.setAttribute("id","jsdiv")

  var img = document.createElement("img");
  img.src = elem.image_url;
  img.setAttribute("id","jsimg")

  var name = document.createElement("p");
  name.textContent = elem.name;
  name.setAttribute("class","jsp")

  var price = document.createElement("p");
  price.innerText = elem.price;
  name.setAttribute("class","jsp")


  
  

  var btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.setAttribute("id","jsbtn")

  btn.addEventListener("click", function () {
    removeItem(elem, index);
  });

  box.append(img,name,price,btn)
  console.log(box)
document.querySelector("#p1js2").append(box)
})

function removeItem(elem, index) {
  console.log(elem, index);
  cartData1.splice(index, 1);
  console.log(cartData1);
  localStorage.setItem("cart", JSON.stringify(cartData1));
  window.location.reload();
}
