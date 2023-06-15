/* document.getElementById("dom1").innerText="Ayat islam"
document.getElementById("dom1").innerHTML="Tonni Akter" */ //line by line read kore tai last modify kore tai aita show hbe--------------

// createElement====
const li = document.createElement("li");
li.innerText = "Blog-5";

const ul = document.getElementById("blogs");
ul.appendChild(li);

// Element.getElementsByTagName()
let main = document.getElementsByTagName("li");
for (const li of main) {
  console.log(li.innerText);
}

// getElementsByClassName========
/* const titles=document.getElementsByClassName('book_title')
for (const x of titles) {
  console.log(x.innerHTML )
} */




const article = document.getElementsByClassName("article");
for (const x of article) {
  (x.style.border = "2px solid blue"), (x.style.padding = "5px");
  x.style.margin = "5px";
  x.style.textAlign = "center";
  x.style.borderRadius = "10px";
  x.style.backgroundColor = "grey";
  x.style.color = "dark";
  x.style.fontWeight = "bold";
}

















/* 
document.getElementById("btn_design").addEventListener("click", function () {
  const articleContainer = document.createElement("article");
  articleContainer.classList.add("article");
  articleContainer.innerHTML = ` <h2>Rich and poor dad</h2>
<p>
Rich and poor dad dolor sit amet consectetur adipisicing elit. Aperiam optio
  placeat sint reprehenderit. Accusamus consequuntur sequi voluptatum
  odio. Consequatur facilis non adipisci cupiditate reprehenderit
  perferendis placeat porro beatae quam alias.
</p>
`;
  const booksection = document.getElementById("bookSection");
  booksection.appendChild(articleContainer);
  booksection.insertBefore(articleContainer, btn);
});


*/