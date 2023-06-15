
// add new book btn design
const btn = document.getElementById("btn_design");
btn.style.padding = "10px";
btn.style.backgroundColor = "yellow";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.fontWeight = "bold";
btn.style.alignSelf = "auto";

 function addBook() {
  const article = document.createElement("article");
  article.classList.add("quote");
  article.innerHTML = ` <h2 class="book_title">Rich and poor dad</h2>
<p>
Rich and poor dad dolor sit amet consectetur adipisicing elit. Aperiam optio
  placeat sint reprehenderit. Accusamus consequuntur sequi voluptatum
  odio. Consequatur facilis non adipisci cupiditate reprehenderit
  perferendis placeat porro beatae quam alias.
</p>
`;
  const booksection = document.getElementById("bookSection");
  booksection.appendChild(article);
  booksection.insertBefore(article, btn); //parent.insertbefore(ki age dite chai,kar age)
} 