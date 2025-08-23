let productsArray = [];
var noOfPages = 0;
var currentPage = 0;
let totalNumberOfProductsOnAPage = 10;
const productsContainer = document.querySelector(".products-container");

const filters = {
  categories: [],
  price: {
    min: 0,
    max: Infinity,
  },
};

const fetchAllTheProducts = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const { products } = await data.json();
  productsArray = [...products];
  loadAllProductsCategory();
  listAllProducts(productsArray);
};

async function loadAllProductsCategory() {
  const data = await fetch("https://dummyjson.com/products/category-list");
  const res = await data.json();

  loadAllTheCategories(res);
}

function loadAllTheCategories(categorylist) {
  const categoryOptionsWrapper = document.querySelector(
    ".categories-options-container"
  );

  categorylist.forEach((category) => {
    const wrapper = document.createElement("label");
    wrapper.className = "flex items-center gap-1 cursor-pointer";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "category";
    checkbox.value = category;

    const span = document.createElement("span");
    span.textContent = category;
    span.className = "font-normal text-sm";

    wrapper.append(checkbox, span);
    categoryOptionsWrapper.append(wrapper);

    // add listener for each checkbox
    checkbox.addEventListener("change", () => {
      const selectedValues = Array.from(
        document.querySelectorAll('input[name="category"]:checked')
      ).map((cb) => cb.value);

      filters.categories = [...selectedValues];
      ApplyFilter();
    });
  });
}

function listAllProducts(productsData) {
  productsContainer.innerHTML = "";

  noOfPages =
    productsData.length % 10 == 0
      ? productsData.length / 10
      : productsData.length / 10 + 1;

  if (productsData.length <= 9) {
    productsData.forEach((data) => {
      const productCard = document.createElement("div");
      productCard.setAttribute(
        "class",
        "product-card border-1 border-black/20 p-1 rounded-sm"
      );
      productCard.innerHTML = `

        <img src="${data?.images?.[0]}" alt="" class="product-img h-30 w-50 object-cover border-none overflow-hidden rounded-sm hover:scale-105 transition duration-200">
                    <div class="product-info">
                        <h1 class="text-black/80 font-medium text-[19px]">Toast</h1>
                        <p class=" text-black/80 font-semibold text-sm">Price : $ 250</p>
        
        `;

      productsContainer.append(productCard);
    });

    createPaginationSection();
  } else {
    createPaginationSection();

    //  list the content based on the page
    loadPageBasedOnCurrentPage();
  }

  function createPaginationSection() {
    const paginationWrapper = document.querySelector(".pagination-container");
    paginationWrapper.innerHTML = "";
    for (let i = 1; i <= noOfPages; i++) {
      const pageNumberDiv = document.createElement("div");
      pageNumberDiv.setAttribute(
        "class",
        "px-2 border-1 border-black/10 rounded-sm cursor-pointer"
      );
      pageNumberDiv.textContent = i;
      pageNumberDiv.addEventListener("click", (e) => {
        currentPage = i - 1;
        loadPageBasedOnCurrentPage();
      });
      paginationWrapper.append(pageNumberDiv);
    }
  }

  function loadPageBasedOnCurrentPage() {
    productsContainer.innerHTML = "";
    for (
      let i = 10 * currentPage;
      i < productsData.length && i < 10 * (currentPage + 1);
      i++
    ) {
      const productCard = document.createElement("div");
      productCard.setAttribute(
        "class",
        "product-card border-1 border-black/20 p-1 rounded-sm"
      );
      productCard.innerHTML = `

        <img src="${productsData[i].images?.[0]}" alt="" class="product-img h-30 w-50 object-cover border-none overflow-hidden rounded-sm hover:scale-105 transition duration-200">
                    <div class="product-info">
                        <h1 class="text-black/80 font-medium text-[19px]">Toast</h1>
                        <p class=" text-black/80 font-semibold text-sm">Price : $ 250</p>
        
        `;

      productsContainer.append(productCard);
    }
  }
}

function ApplyFilter() {
  const filteredData = productsArray.filter((data) => {
    // check for the category

    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(data?.category)
    )
      return false;

    return true;
  });

  listAllProducts(filteredData);
}

fetchAllTheProducts();
