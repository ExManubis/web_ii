// CONSTANTS
const productId = new URLSearchParams(window.location.search).get("id");
const productUrl = `https://kea-alt-del.dk/t7/api/products/${productId}`;
const productContainer = document.querySelector(".product_container");

// FUNCTIONS
window.addEventListener("load", () => {
  fetch(productUrl).then((data) =>
    data.json().then(
      (data) =>
        (productContainer.innerHTML = `
   <img
        src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
        alt="product image" class="${data.soldout && "soldout"}"/>
      <div class="product_info">
        <h1>Product Information</h1>
        <div>
          <h2>Model name</h2>
          <p>${data.productdisplayname}</p>
        </div>
        <div>
          <h2>Category</h2>
          <p>${data.category}</p>
        </div>
     <div>
       <h2>Type</h2>
       <p>${data.articletype}</p>
     </div>
        <div>
          <h2>Brand</h2>
          <p>${data.brandname}</p>
        </div>
      </div>
      <div class="order_form ${data.discount && "sale"} ${data.soldout && "soldout"}">
        <h1>${data.productdisplayname}</h1>
        <h2 class="sale_amount">${data.discount}%</h2>
        <h2>DKK ${data.price},-</h2>
        <form action="#">
          <label for="size">Size: </label>
          <select name="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <br />
          <br />
          <input type="submit" name="submit" value="${data.soldout ? "Sold out" : "Add to basket"}"/>
        </form>
      </div>

`),
    ),
  );
});
