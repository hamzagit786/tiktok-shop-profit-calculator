const searchInput = document.getElementById("blogSearch");
const searchBtn = document.getElementById("searchBtn");
const categoryButtons = document.querySelectorAll(".category-btn");
const blogCards = document.querySelectorAll(".blog-card");

let selectedCategory = "all";


function filterArticles(){

    let searchText = "";

    if(searchInput){
        searchText = searchInput.value.toLowerCase().trim();
    }


    blogCards.forEach(function(card){

        let category = card.dataset.category || "";
        let keywords = card.dataset.keywords || "";

        let text = card.innerText.toLowerCase() + " " + keywords.toLowerCase();


        let searchOK = text.includes(searchText);


        let categoryOK = (
            selectedCategory === "all" ||
            category === selectedCategory
        );


        if(searchOK && categoryOK){

            card.style.display = "";

        }else{

            card.style.display = "none";

        }


    });

}




// Search typing

if(searchInput){

searchInput.addEventListener("input", function(){

filterArticles();

});

}



// Search button

if(searchBtn){

searchBtn.addEventListener("click", function(){

filterArticles();

});

}




// Categories

categoryButtons.forEach(function(button){


button.addEventListener("click", function(){


selectedCategory = this.dataset.category;


categoryButtons.forEach(function(btn){

btn.classList.remove("active");

});


this.classList.add("active");


filterArticles();


});


});
