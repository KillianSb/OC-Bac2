const params = new URLSearchParams(location.search);

const id = params.get("id");

console.table(id);


fetch("http://localhost:3000/api/products/"+id)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (element) {

    // Ajout de la liste des informations "element" dans la fonction "displayElement" pour les récupérer ensuite
    displayElement(element);
    console.log(element);

  })
  .catch(function (err) {
    console.log("Erreur");
  });
;

function displayElement(element) {

  // Création basile "a"
  let img = document.createElement("img");
  // Ajout de l'attribut "href" et "alt" a la basile "img"
  img.setAttribute("src", element.imageUrl);
  img.setAttribute("alt", element.altTxt);

  console.log(img);

  document.querySelector('.item__img').appendChild(img);

  // let titre = document.getElementsById('title');
  // titre.textContent = element.name;

  document.getElementById('title').innerHTML = element.name;

  // let prix = document.getElementsById('price');
  // prix.innerHTML = element.price;

  document.getElementById('price').innerHTML = element.price;

  // let description = document.getElementsById('description');
  // description.textContent = element.description;

  // Classement d'ordre d'affichage parents/enfants
  // img.appendChild(article);
  // article.appendChild(image);
  // article.appendChild(titreH3);
  // article.appendChild(paragraphe);

  // Classement d'ordre d'affichage de "img" qui sera enfants de l'éléments avec l'id "items"
  // document.getElementsByClassName("item__img").appendChild(img);
  // document.getElementById("title").appendChild(img);

  // Table des canapés
  console.table(element);
}
