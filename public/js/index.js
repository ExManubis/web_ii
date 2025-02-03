// CONSTANTS
const container = document.querySelector(".cat_container");
const url = "https://kea-alt-del.dk/t7/api/categories";

// FUNCTION
function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => showCat(data));
}

function showCat(data) {
  const markup = data
    .map(
      (categories) => `
          <div class="cat_link_container">
          <a href="productlist.html?category=${categories.category}">
            <div class="box">
              <h3>${categories.category}</h3>
            </div>
          </a>
        </div>
`,
    )
    .join("");
  container.innerHTML = markup;
}

// RUN
getData();
