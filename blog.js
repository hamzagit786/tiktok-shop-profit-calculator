const searchInput = document.getElementById("blogSearch");
const searchButton = document.querySelector(".search-btn");
const blogCards = document.querySelectorAll(".blog-card");


function searchArticles(){

let searchText = searchInput.value.toLowerCase().trim();


blogCards.forEach(card => {


let content = (

card.innerText +
" " +
card.dataset.keywords +
" " +
card.dataset.category

).toLowerCase();



if(content.includes(searchText)){

card.style.display = "block";

}
else{

card.style.display = "none";

}


});

}



if(searchInput){

searchInput.addEventListener("input", searchArticles);

}



if(searchButton){

searchButton.addEventListener("click", searchArticles);

}
