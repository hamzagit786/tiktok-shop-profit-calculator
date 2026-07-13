function calculateProfit(){


    let cost = Number(document.getElementById("cost").value) || 0;

    let price = Number(document.getElementById("price").value) || 0;

    let fees = Number(document.getElementById("fees").value) || 0;

    let ads = Number(document.getElementById("ads").value) || 0;



    // Profit Formula

    let profit = price - cost - fees - ads;


    // ROI Formula

    let investment = cost + ads + fees;

    let roi = 0;


    if(investment > 0){

        roi = ((profit / investment) * 100).toFixed(1);

    }



    // Opportunity Score

    let score = 50;


    if(profit > 0){

        score += 25;

    }


    if(roi > 50){

        score += 20;

    }


    if(price > cost * 2){

        score += 5;

    }



    if(score > 100){

        score = 100;

    }



    // Update Dashboard


    document.getElementById("profit").innerHTML =
    "$" + profit.toFixed(2);



    document.querySelectorAll(".metric strong")[1].innerHTML =
    roi + "%";



    document.querySelectorAll(".metric strong")[2].innerHTML =
    score + "%";



}




// Button hover animation


const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{


    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-3px)";

    });


    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });


});





// Scroll reveal animation


const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},{threshold:.2});




cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.6s";


observer.observe(card);


});
