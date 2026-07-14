const searchInput = document.getElementById("blogSearch");
const searchBtn = document.getElementById("searchBtn");
const categoryButtons = document.querySelectorAll(".category-btn");
const blogCards = document.querySelectorAll(".blog-card");

let selectedCategory = "all";


function filterArticles(){

    let searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";


    blogCards.forEach(card => {

        let category = card.getAttribute("data-category").trim();

        let keywords = card.getAttribute("data-keywords").toLowerCase();

        let title = card.querySelector("h2").innerText.toLowerCase();

        let description = card.querySelector("p").innerText.toLowerCase();


        let content = title + " " + description + " " + keywords;


        let searchMatch = content.includes(searchText);


        let categoryMatch = 
        selectedCategory === "all" || category === selectedCategory;


        if(searchMatch && categoryMatch){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }


    });

}



// Search typing

if(searchInput){

    searchInput.addEventListener("input", filterArticles);

}



// Search button

if(searchBtn){

    searchBtn.addEventListener("click", filterArticles);

}



// Category buttons

categoryButtons.forEach(button => {


    button.addEventListener("click", function(){


        selectedCategory = this.getAttribute("data-category").trim();


        categoryButtons.forEach(btn=>{

            btn.classList.remove("active");

        });


        this.classList.add("active");


        filterArticles();


    });


});
