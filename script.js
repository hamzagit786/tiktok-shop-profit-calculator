function calculateProfit(){


    // Get Values

    let currency = document.getElementById("currency").value;


    let cost = Number(document.getElementById("cost").value) || 0;

    let price = Number(document.getElementById("price").value) || 0;

    let shipping = Number(document.getElementById("shipping").value) || 0;

    let fees = Number(document.getElementById("fees").value) || 0;

    let ads = Number(document.getElementById("ads").value) || 0;



    // Profit Calculation

    let totalCost = cost + shipping + fees + ads;


    let profit = price - totalCost;



    // Profit Margin

    let margin = 0;


    if(price > 0){

        margin = ((profit / price) * 100).toFixed(1);

    }



    // ROI Calculation

    let roi = 0;


    if(totalCost > 0){

        roi = ((profit / totalCost) * 100).toFixed(1);

    }



    // Opportunity Score

    let score = 50;



    if(profit > 0){

        score += 25;

    }



    if(roi >= 50){

        score += 15;

    }



    if(margin >= 30){

        score += 10;

    }



    if(score > 100){

        score = 100;

    }



    // Update Results


    document.getElementById("profit").innerHTML =
    currency + Number(profit).toFixed(2);



    document.getElementById("margin").innerHTML =
    margin + "%";



    document.getElementById("roi").innerHTML =
    roi + "%";



    document.getElementById("score").innerHTML =
    score + "/100";



}







// Smooth Scroll Buttons


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


let target=document.querySelector(this.getAttribute("href"));


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});








// Simple Card Animation


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},{threshold:0.15});





document.querySelectorAll(".service-card,.dashboard,.calculator-box")
.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="0.7s";


observer.observe(item);


});
