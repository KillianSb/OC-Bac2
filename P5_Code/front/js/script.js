fetch("http://localhost:3000/api/products")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (products) {

    displayProducts(products);
    
  })
  .catch(function (err) {
    console.log("Erreur");
  });
;

function displayProducts(products) {
  if (products) {
    products.forEach(element => {
      
      let liensA = document.createElement("a");
      liensA.setAttribute("href", "./product.html?id="+element._id);
      let article = document.createElement("article");
      let image = document.createElement("img");
      image.setAttribute("src", element.imageUrl);
      image.setAttribute("alt", element.altTxt);
      let titreH3 = document.createElement("h3");
      titreH3.classList.add("productName")
      titreH3.textContent = element.name;
      let Paragraphe = document.createElement("p");
      Paragraphe.classList.add("productDescription")
      Paragraphe.textContent = element.description;

      liensA.appendChild(article);
      article.appendChild(image);
      article.appendChild(titreH3);
      article.appendChild(Paragraphe);

      document.getElementById("items").appendChild(liensA);
    })
  }
  // Table des canapés
  console.table(products);
}