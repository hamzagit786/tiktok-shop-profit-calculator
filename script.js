/* ==========================================================
   eProfitFlow Calculator FINAL
   Daily / Monthly / Yearly Profit Calculator
========================================================== */

"use strict";


document.addEventListener("DOMContentLoaded", function(){


    const button = document.querySelector(".btn");


    if(button){

        button.addEventListener(
            "click",
            calculateProfit
        );

    }



    const platform = document.getElementById("platform");


    if(platform){

        platform.addEventListener(
            "change",
            autoFee
        );

    }



    const mode = document.getElementById("mode");


    if(mode){

        mode.addEventListener(
            "change",
            updateModeLabel
        );

    }



});





/* =========================
   GET VALUES
========================= */


function getValue(id){

    const element =
    document.getElementById(id);


    return element
    ?
    element.value.trim()
    :
    "";

}



function getNumber(id){

    const value =
    parseFloat(getValue(id));


    return isNaN(value)
    ?
    0
    :
    value;

}







/* =========================
   MONEY FORMAT
========================= */


function formatMoney(amount,currency){


    const map={

        "$":"USD",

        "€":"EUR",

        "£":"GBP",

        "PKR":"PKR"

    };


    return new Intl.NumberFormat(
        "en-US",
        {
            style:"currency",
            currency:map[currency] || "USD",
            maximumFractionDigits:2
        }
    ).format(amount);


}








/* =========================
   MAIN CALCULATOR
========================= */


function calculateProfit(){



const data={


platform:getValue("platform"),

mode:getValue("mode"),

currency:getValue("currency") || "$",


productCost:getNumber("productCost"),

sellingPrice:getNumber("sellingPrice"),

shipping:getNumber("shippingCost"),

fee:getNumber("fee"),

ads:getNumber("adCost"),

orders:getNumber("orders")


};





if(
data.productCost<=0 ||
data.sellingPrice<=0 ||
data.orders<=0
){

showMessage(
"Please enter all required values"
);

return;

}






/* COST */


const platformFee =

data.sellingPrice *
(data.fee / 100);



const totalCost =

data.productCost +
data.shipping +
platformFee +
data.ads;






/* PROFIT PER SALE */


const profit =

data.sellingPrice -
totalCost;



const margin =

(profit / data.sellingPrice) * 100;



const roi =

(totalCost > 0)
?
(profit / totalCost) * 100
:
0;







/* PERIOD CALCULATION */


let revenue = 0;

let periodProfit = 0;



if(data.mode==="daily"){


    revenue =
    data.sellingPrice *
    data.orders;


    periodProfit =
    profit *
    data.orders;


}




else if(data.mode==="monthly"){


    revenue =
    data.sellingPrice *
    data.orders;


    periodProfit =
    profit *
    data.orders;


}




else if(data.mode==="yearly"){


    revenue =
    data.sellingPrice *
    data.orders;


    periodProfit =
    profit *
    data.orders;


}







const result={


platform:data.platform,

mode:data.mode,

currency:data.currency,

profit,

margin,

roi,

revenue,

periodProfit


};




displayResults(result);



}









/* =========================
   DISPLAY
========================= */


function updateResult(id,value){


    const element =
    document.getElementById(id);


    if(element){

        element.textContent=value;

    }


}






function displayResults(result){



updateResult(
"showPlatform",
result.platform
);



updateResult(
"showMode",
result.mode.toUpperCase()
);



updateResult(
"profit",
formatMoney(
result.profit,
result.currency
)
);



updateResult(
"margin",
result.margin.toFixed(1)+"%"
);



updateResult(
"roi",
result.roi.toFixed(1)+"%"
);





/* Revenue */


if(result.mode==="daily"){

document.getElementById("revenueTitle").textContent =
"Daily Revenue";


document.getElementById("profitTitle").textContent =
"Daily Profit";

}



else if(result.mode==="monthly"){


document.getElementById("revenueTitle").textContent =
"Monthly Revenue";


document.getElementById("profitTitle").textContent =
"Monthly Profit";


}




else if(result.mode==="yearly"){


document.getElementById("revenueTitle").textContent =
"Yearly Revenue";


document.getElementById("profitTitle").textContent =
"Yearly Profit";


}




updateResult(
"monthlyRevenue",
formatMoney(
result.revenue,
result.currency
)
);



updateResult(
"monthlyProfit",
formatMoney(
result.periodProfit,
result.currency
)
);




let status="❌ Low Profit";


if(result.margin>=40){

status="🔥 Excellent Profit";

}

else if(result.margin>=20){

status="✅ Good Profit";

}

else if(result.margin>=10){

status="⚠️ Average Profit";

}



updateResult(
"profitStatus",
status
);



updateResult(
"breakEven",
"Calculated"
);



}









/* =========================
   AUTO FEE
========================= */


function autoFee(){


const platform =
getValue("platform");


const fee =
document.getElementById("fee");



const fees={


"TikTok Shop":6,

"Amazon":15,

"Shopify":2.9,

"Etsy":6.5


};



if(fee){

fee.value =
fees[platform] || 0;

}



}









/* =========================
   MODE LABEL
========================= */


function updateModeLabel(){


const mode =
getValue("mode");


const label =
document.getElementById("ordersLabel");


if(!label) return;



if(mode==="daily"){

label.textContent="Orders Per Day";

}


else if(mode==="monthly"){

label.textContent="Orders Per Month";

}


else if(mode==="yearly"){

label.textContent="Orders Per Year";

}


}









/* =========================
   MESSAGE
========================= */


function showMessage(message){


alert(message);


}






window.calculateProfit =
calculateProfit;
