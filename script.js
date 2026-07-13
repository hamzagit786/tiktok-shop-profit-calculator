function calculateProfit(){


    // Get Values

    let platform = document.getElementById("platform").value;

    let mode = document.getElementById("mode").value;

    let currency = document.getElementById("currency").value;


    let productCost = Number(document.getElementById("productCost").value) || 0;

    let sellingPrice = Number(document.getElementById("sellingPrice").value) || 0;

    let shippingCost = Number(document.getElementById("shippingCost").value) || 0;

    let fee = Number(document.getElementById("fee").value) || 0;

    let adCost = Number(document.getElementById("adCost").value) || 0;

    let monthlyOrders = Number(document.getElementById("monthlyOrders").value) || 0;




    // Platform Fee

    let platformFee = sellingPrice * (fee / 100);




    // Total Cost Per Product

    let totalCost =
    productCost +
    shippingCost +
    platformFee +
    adCost;




    // Profit Per Sale

    let profit = sellingPrice - totalCost;




    // Margin

    let margin = 0;

    if(sellingPrice > 0){

        margin = (profit / sellingPrice) * 100;

    }




    // ROI

    let roi = 0;

    if(totalCost > 0){

        roi = (profit / totalCost) * 100;

    }





    // Monthly Calculations

    let monthlyRevenue = sellingPrice * monthlyOrders;


    let monthlyProfit = profit * monthlyOrders;


    let yearlyProfit = monthlyProfit * 12;





    // Break Even

    let breakEven = 0;


    if(profit > 0){

        breakEven = Math.ceil(totalCost / profit);

    }





    // Show Results


    document.getElementById("showPlatform").innerHTML =
    platform;




    document.getElementById("profit").innerHTML =
    currency + profit.toFixed(2);




    document.getElementById("margin").innerHTML =
    margin.toFixed(1) + "%";




    document.getElementById("roi").innerHTML =
    roi.toFixed(1) + "%";




    document.getElementById("monthlyRevenue").innerHTML =
    currency + monthlyRevenue.toFixed(2);




    document.getElementById("monthlyProfit").innerHTML =
    currency + monthlyProfit.toFixed(2);




    document.getElementById("yearlyProfit").innerHTML =
    currency + yearlyProfit.toFixed(2);




    document.getElementById("breakEven").innerHTML =
    breakEven + " sales";



    // Mode Based Message

    if(mode === "single"){

        console.log("Single Product Analysis");

    }


    if(mode === "monthly"){

        console.log("Monthly Business Analysis");

    }


    if(mode === "yearly"){

        console.log("Yearly Business Analysis");

    }



}
