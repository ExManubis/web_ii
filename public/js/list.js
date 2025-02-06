// CONSTANTS
const header = document.querySelector(".header");
const pList = document.querySelector(".productlist_container");
const pItem = document.querySelector(".productlist_item");
const getUrl = window.location.search;
const getSearch = new URLSearchParams(getUrl);
const category = getSearch.get("category");

// FUNCTIONS
function showproducts(data) {
  const markup = data
    .map(
      (product) => `
<div class="productlist_item ${product.discount && "sale"} ${product.soldout && "sold_out"}">
          <a href="product.html?id=${product.id}">
            <h1 class="sale_amount">-${product.discount}%</h1>
            <h1 class="sold_out_marker">Sold Out</h1>
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
  header.textContent = `${category}`;
}

function getData() {
  fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
    .then((response) => response.json())
    .then((data) => showproducts(data));
}

getData();

// EVENTLISTENER
// window.addEventListener("load", () => {
//   fetch(listURL).then(response => data.json()).then(data => data.map(product => ))
// })
