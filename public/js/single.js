// CONSTANTS
const productId = 1532;
const productUrl = `https://kea-alt-del.dk/t7/api/products/${productId}`;
const productContainer = document.querySelector(".product_container");

// FUNCTIONS
function getData() {
  fetch(productUrl).then((response) =>
    response.json().then((data) => show(data)),
  );
}

function show(data) {
  console.log(data);
  productContainer.innerHTML = `
   <img
        src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
        alt="product image"
      />
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
          <h2>Brand</h2>
          <p>${data.brandname}</p>
        </div>
      </div>
      <div class="order_form">
        <h1>${data.productdisplayname}</h1>
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
          <input type="submit" name="submit" value="Add to basket" />
        </form>
      </div>

`;
}

getData();
