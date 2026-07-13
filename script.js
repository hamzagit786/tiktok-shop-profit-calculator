function calculateProfit(){


    let currency = document.getElementById("currency").value;


    let cost = Number(document.getElementById("cost").value) || 0;

    let price = Number(document.getElementById("price").value) || 0;

    let shipping = Number(document.getElementById("shipping").value) || 0;

    let fee = Number(document.getElementById("tiktokFee").value) || 0;

    let affiliate = Number(document.getElementById("affiliate").value) || 0;

    let ads = Number(document.getElementById("ads").value) || 0;

    let orders = Number(document.getElementById("orders").value) || 0;



    // Platform fee calculation

    let platformFee = price * (fee / 100);



    // Affiliate commission calculation

    let affiliateCost = price * (affiliate / 100);



    // Total cost

    let totalCost = 
    cost +
    shipping +
    platformFee +
    affiliateCost +
    ads;



    // Profit

    let profit = price - totalCost;



    // Margin

    let margin = 0;

    if(price > 0){

        margin = (profit / price) * 100;

    }



    // ROI

    let roi = 0;

    if(totalCost > 0){

        roi = (profit / totalCost) * 100;

    }



    // Monthly Profit

    let monthlyProfit = profit * orders;




    // Opportunity Score

    let score = 50;


    if(margin >= 30){

        score += 20;

    }


    if(roi >= 50){

        score += 20;

    }


    if(profit > 0){

        score += 10;

    }


    if(score > 100){

        score = 100;

    }




    // Display Results


    document.getElementById("profit").innerHTML =
    currency + profit.toFixed(2);



    document.getElementById("margin").innerHTML =
    margin.toFixed(1) + "%";



    document.getElementById("roi").innerHTML =
    roi.toFixed(1) + "%";



    document.getElementById("score").innerHTML =
    score + "/100";



    document.getElementById("monthlyProfit").innerHTML =
    currency + monthlyProfit.toFixed(2);



}
