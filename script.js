function calculateProfit(){


    let currency = document.getElementById("currency").value;


    let cost = Number(document.getElementById("cost").value) || 0;

    let price = Number(document.getElementById("price").value) || 0;

    let shipping = Number(document.getElementById("shipping").value) || 0;

    let tiktokFee = Number(document.getElementById("tiktokFee").value) || 0;

    let affiliate = Number(document.getElementById("affiliate").value) || 0;

    let ads = Number(document.getElementById("ads").value) || 0;



    if(price <= 0){

        alert("Please enter selling price");

        return;

    }



    // Fee calculations


    let tiktokCost = price * (tiktokFee / 100);


    let affiliateCost = price * (affiliate / 100);



    // Total expense


    let totalCost =
    cost +
    shipping +
    tiktokCost +
    affiliateCost +
    ads;



    // Profit


    let profit =
    price - totalCost;




    // Margin


    let margin =
    ((profit / price) * 100).toFixed(1);




    // ROI


    let roi =
    ((profit / totalCost) * 100).toFixed(1);




    if(totalCost <= 0){

        roi = 0;

    }





    // Opportunity score


    let score = 50;



    if(profit > 0){

        score += 20;

    }



    if(margin >= 30){

        score += 15;

    }



    if(roi >= 50){

        score += 15;

    }



    if(score > 100){

        score = 100;

    }



    if(score < 0){

        score = 0;

    }





    // Display results


    document.getElementById("profit").innerHTML =
    currency + profit.toFixed(2);



    document.getElementById("margin").innerHTML =
    margin + "%";



    document.getElementById("roi").innerHTML =
    roi + "%";



    document.getElementById("score").innerHTML =
    score + "/100";



}
