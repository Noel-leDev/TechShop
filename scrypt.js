document.addEventListener("DOMContentLoaded", () => {
  const boutonsFiltrage = document.querySelectorAll(".categorie");
  const articles = document.querySelectorAll("article");

  let products = [
    {
      id: 1,
      name: "iPhone 14",
      price: 999.99,
      categorie: "telephone",
      image: "/Pixel8.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: 799.99,
      categorie: "telephone",
      image: "/samsung.jpg",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      price: 599.99,
      categorie: "telephone",
      image: "/telephone-intelligent.png",
    },
    {
      id: 4,
      name: "MacBook Pro 16",
      price: 2399.99,
      categorie: "ordinateur",
      image: "/pcComputer.jpg",
    },
    {
      id: 5,
      name: "Dell XPS 13",
      price: 1299.99,
      categorie: "ordinateur",
      image: "/macbookAir.png",
    },
    {
      id: 6,
      name: "HP Spectre x360",
      price: 1499.99,
      categorie: "ordinateur",
      image: "/pcSpectre.jpg",
    },
    {
      id: 7,
      name: "OnePlus 9",
      price: 729.99,
      categorie: "telephone",
      image: "/TelOnePlus9.jpg",
    },
    {
      id: 8,
      name: "Xiaomi Mi 11",
      price: 749.99,
      categorie: "telephone",
      image: "/xiaomiMi11.jpg",
    },
    {
      id: 9,
      name: "Asus ROG Zephyrus G14",
      price: 1799.99,
      categorie: "ordinateur",
      image: "/ordinateur-apple.png",
    },
    {
      id: 10,
      name: "Lenovo ThinkPad X1 Carbon",
      price: 1599.99,
      categorie: "ordinateur",
      image: "/lenovo.jpg",
    },
    {
      id: 11,
      name: "clavier QWERTY pc",
      price: 249.99,
      categorie: "accessoires",
      image: "/clavierPc.jpg",
    },
    {
      id: 12,
      name: "Samsung Galaxy Buds",
      price: 149.99,
      categorie: "accessoires",
      image: "/casque.jpg",
    },
    {
      id: 13,
      name: "Logitech MX Master 3",
      price: 99.99,
      categorie: "accessoires",
      image: "/sourisLogitechMx3.jpg",
    },
    {
      id: 14,
      name: "Razer DeathAdder V2",
      price: 69.99,
      categorie: "accessoires",
      image: "/razer.jpg",
    },
    {
      id: 15,
      name: "Belkin Boost Up Wireless Charger",
      price: 39.99,
      categorie: "accessoires",
      image: "/wirelessCharger.jpg",
    },
    {
      id: 16,
      name: "Sony WH-1000XM4",
      price: 349.99,
      categorie: "accessoires",
      image: "/sonyCasque.jpg",
    },
    {
      id: 17,
      name: "Apple Watch Series 7",
      price: 399.99,
      categorie: "accessoires",
      image: "/smartWatchApple7.jpg",
    },
    {
      id: 18,
      name: "Fitbit Charge 5",
      price: 179.99,
      categorie: "accessoires",
      image: "/FitbitCharge5.jpg",
    },
    {
      id: 19,
      name: "Microsoft Surface Pro 8",
      price: 1099.99,
      categorie: "ordinateur",
      image: "/ordinateur-portable.png",
    },
    {
      id: 20,
      name: "Acer Aspire 5",
      price: 599.99,
      categorie: "ordinateur",
      image: "/laptop.jpg",
    },
    {
      id: 21,
      name: "Lenovo ThinkPad X1 Carbon",
      price: 1599.99,
      categorie: "ordinateur",
      image: "/lenovo.jpg",
    },
  ];

  const productGrid = document.getElementById("content");
  function renderProducts(productsToShow) {
    productGrid.innerHTML = productsToShow
      .map(
        (product) =>
          `
          <article data-product-id="${product.id}">
            <div class="img">
              <div class="thumbnail"><img src=imgs${product.image} alt="${product.name} ${"de type"} ${product.categorie}" /></div>
            </div>
            <div class="desc">
              <h3>${product.name}</</h3>
              <h4>Prix : ${product.price}€</h4>
              <p>${product.categorie}</p>
            </div>
          </article>
        `,
      )
      .join("");
    
    // Add click event listeners to products
    const productArticles = document.querySelectorAll("article");
    productArticles.forEach((article) => {
      article.addEventListener("click", (e) => {
        const productId = article.getAttribute("data-product-id");
        const product = products.find(p => p.id == productId);
        if (product) {
          // Store product data in localStorage
          localStorage.setItem("selectedProduct", JSON.stringify(product));
          // Navigate to detail page
          window.location.href = `detail.html?id=${productId}`;
        }
      });
    });
  }

  boutonsFiltrage.forEach((btn) =>
    btn.addEventListener("click", () => {
      boutonsFiltrage.forEach((el) => {
        el.classList.remove("active");
      }); //on enleve d'abord active de tous
      btn.classList.add("active"); // on ajoute active a btn actuellement cliquée

      const categorieCible = btn.getAttribute("data-categorie");
      // Si on clique sur "tous", on montre tout, sinon on filtre
      if (categorieCible === "tous") {
        renderProducts(products);
      } else {
        //On filtre
        const produitsFiltres = products.filter(
          (data) => data.categorie === categorieCible,
        );
        renderProducts(produitsFiltres);
      }
    }),
  );
  //Par defaut au debut on affiche tous les produits
  renderProducts(products);

  return;

  boutonsFiltrage.forEach((item) => {
    item.addEventListener("click", () => {
      //on enleves d'abord active de tous les categories.
      boutonsFiltrage.forEach((el) => {
        el.classList.remove("active");
      });
      //on ajoute active a la div cliquée
      item.classList.add("active");
      filtreArticle(products);
      //on Filtre chaque categorie
      const categorie = item.dataset.categorie;

      articles.forEach((article) => {
        if (categorie === "tous" || article.classList.contains(categorie)) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
    });
  });

  function filtreArticle(data) {
    return data.filter((cat) => cat.categorie);
  }
});