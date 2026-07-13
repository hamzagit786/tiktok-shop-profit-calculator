function calculateProfit(){

    const currency = document.getElementById("currency").value;


    const cost = Number(document.getElementById("cost").value) || 0;

    const price = Number(document.getElementById("price").value) || 0;

    const shipping = Number(document.getElementById("shipping").value) || 0;

    const tiktokFee = Number(document.getElementById("tiktokFee").value) || 0;

    const affiliate = Number(document.getElementById("affiliate").value) || 0;

    const ads = Number(document.getElementById("ads").value) || 0;



    // Percentage calculations

    const tiktokAmount = (price * tiktokFee) / 100;

    const affiliateAmount = (price * affiliate) / 100;



    // Total Cost

    const totalCost = 
    cost +
    shipping +
    tiktokAmount +
    affiliateAmount +
    ads;



    // Profit

    const profit = price - totalCost;



    // Margin

    let margin = 0;

    if(price > 0){

        margin = ((profit / price) * 100).toFixed(1);

    }



    // ROI

    let roi = 0;

    if(totalCost > 0){

        roi = ((profit / totalCost) * 100).toFixed(1);

    }



    // Opportunity Score

    let score = 50;


    if(profit > 0){

        score += 20;

    }


    if(roi >= 50){

        score += 20;

    }


    if(margin >= 30){

        score += 10;

    }


    if(score > 100){

        score = 100;

    }



    // Update Results


    document.getElementById("profit").innerHTML =
    currency + profit.toFixed(2);



    document.getElementById("margin").innerHTML =
    margin + "%";



    document.getElementById("roi").innerHTML =
    roi + "%";



    document.getElementById("score").innerHTML =
    score + "/100";



}
