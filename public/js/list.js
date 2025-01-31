// CONSTANTS
const pList = document.querySelector(".productlist_container");
const pItem = document.querySelector(".productlist_item");
const listURL = "https://kea-alt-del.dk/t7/api/products";

// FUNCTIONS
function showproducts(data) {
  const markup = data
    .map(
      (product) => `
<div class="productlist_item">
          <a href="product.html">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="product image"
            />
            <div class="article">
              <h2 class="productlist_name">
${product.productdisplayname}
              </h2>
              <div class="typebrand_container">
                <span class="articletype">${product.articletype}</span><span> | </span
                ><span class="brandname">${product.brandname}</span>
              </div>
              <br />
              <span class="price">DKK ${product.price},-</span>
            </div>
          </a>
        </div>

`,
    )
    .join("");
  pList.innerHTML = markup;
}

function getData() {
  fetch(listURL)
    .then((response) => response.json())
    .then((data) => showproducts(data));
}

getData();

// EVENTLISTENER
// window.addEventListener("load", () => {
//   fetch(listURL).then(response => data.json()).then(data => data.map(product => ))
// })
