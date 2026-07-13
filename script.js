function calculateProfit(){


    // Inputs

    let platform = document.getElementById("platform").value;

    let analysisType = document.getElementById("analysisType").value;

    let currency = document.getElementById("currency").value;


    let cost = Number(document.getElementById("cost").value) || 0;

    let price = Number(document.getElementById("price").value) || 0;

    let shipping = Number(document.getElementById("shipping").value) || 0;

    let platformFee = Number(document.getElementById("platformFee").value) || 0;

    let affiliate = Number(document.getElementById("affiliate").value) || 0;

    let ads = Number(document.getElementById("ads").value) || 0;

    let orders = Number(document.getElementById("orders").value) || 0;



    // Platform Fee

    let platformCost = price * (platformFee / 100);



    // Affiliate Cost

    let affiliateCost = price * (affiliate / 100);




    // Total Cost Per Sale

    let totalCost = 
    cost +
    shipping +
    platformCost +
    affiliateCost +
    ads;




    // Profit Per Sale

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





    // Revenue

    let monthlyRevenue = price * orders;

    let yearlyRevenue = monthlyRevenue * 12;






    // Monthly Profit

    let monthlyProfit = profit * orders;





    // Yearly Profit

    let yearlyProfit = monthlyProfit * 12;






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






    // Analysis Type Display Logic


    if(analysisType === "single"){

        monthlyProfit = profit * orders;

        yearlyProfit = monthlyProfit * 12;

    }



    if(analysisType === "monthly"){


        yearlyProfit = monthlyProfit * 12;


    }





    if(analysisType === "yearly"){


        yearlyProfit = monthlyProfit * 12;


    }







    // Update Dashboard




    document.getElementById("resultPlatform").innerHTML =
    platform;





    document.getElementById("profit").innerHTML =
    currency + profit.toFixed(2);





    document.getElementById("revenue").innerHTML =
    currency + monthlyRevenue.toFixed(2);





    document.getElementById("margin").innerHTML =
    margin.toFixed(1) + "%";





    document.getElementById("roi").innerHTML =
    roi.toFixed(1) + "%";






    document.getElementById("monthlyProfit").innerHTML =
    currency + monthlyProfit.toFixed(2);






    document.getElementById("yearlyProfit").innerHTML =
    currency + yearlyProfit.toFixed(2);






    document.getElementById("score").innerHTML =
    score + "/100";



}
