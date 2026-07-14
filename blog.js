const searchInput = document.getElementById("blogSearch");
const blogCards = document.querySelectorAll(".blog-card");


if(searchInput){

searchInput.addEventListener("input", function(){

let searchText = this.value.toLowerCase().trim();


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


});


}
