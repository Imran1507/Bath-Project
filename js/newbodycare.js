var data2 =[ 
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",
    name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
    price: 1399,
    strikedoffprice: 2799,
  },
]

var cartData = JSON.parse(localStorage.getItem("cart")) || [];
data2.map(function (elem) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image_url;

  var name = document.createElement("p");
  name.textContent = elem.name;

  var price = document.createElement("p");
  price.innerText = elem.price;

  var btn = document.createElement("button");
  btn.innerText = "Add to Cart";
  btn.addEventListener("click", function () {
    addToCart(elem);
  });

  box.append(img, name, price, btn);

  document.querySelector("#p2js").append(box);
});

function addToCart(elem) {
  console.log(elem);
  cartData.push(elem);
  localStorage.setItem("cart", JSON.stringify(cartData));
  alert("Item sucessfully added to cart");

  
}