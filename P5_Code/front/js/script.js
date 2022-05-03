fetch("http://localhost:3000/api/products")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (products) {
    // console.table(products);
    // const ListesProducts = products;

    displayProducts(products);

    // console.table(ListesProducts);

    // const Products3Liens = products[4]._id;
    // const Products3Img = products[4].imageUrl;
    // const Products3Name = products[4].name;
    // const Products3Desc = products[4].description;

    // Element3.setAttribute("src", Products3Img);
    // console.log(Products3Img);

    // AffichageProductName.innerHTML = Products3Name;
    // console.log(Products3Name);

    // AffichageProductDescription.innerHTML = Products3Desc;
    // console.log(Products3Desc);

      // récuperation "id" du produit 3
      // console.table(products[3]._id);
  })
  .catch(function (err) {
    console.log("Erreur");
  });
;

function displayProducts(products) {
  if (products) {
    products.forEach(element => {
      
      let Element1 = document.createElement("a");
      Element1.setAttribute("href", "./product.html?id="+element._id);
      let Element2 = document.createElement("article");
      let Element3 = document.createElement("img");
      Element3.setAttribute("src", element.imageUrl);
      Element3.setAttribute("alt", element.altTxt);
      let Element4 = document.createElement("h3");
      Element4.classList.add("productName")
      Element4.textContent = 'Kanap name1';
      let Element5 = document.createElement("p");
      Element5.classList.add("productDescription")
      Element5.textContent = 'Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.';

      // items.appendChild(Element1);
      Element1.appendChild(Element2);
      Element2.appendChild(Element3);
      Element2.appendChild(Element4);
      Element2.appendChild(Element5);

      document.getElementById("items").appendChild(Element1);

      // let AffichageProductName = document.querySelector("#items a article h3.productName");
      // const AffichageProductDescription = document.querySelector("#items a article p.productDescription");

    })
  }
}
// elt.innerHTML = "<a><article><img><h3>Kanap name1</h3><p>Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p></article></a>";
