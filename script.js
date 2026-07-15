/* ==========================================================
   eProfitFlow Calculator Engine FINAL v5.0

   Daily / Monthly / Yearly Profit Calculator
   Compatible with Current calculator.html
========================================================== */

"use strict";


document.addEventListener("DOMContentLoaded", () => {

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


});



/* ==========================
   HELPERS
========================== */


function getValue(id){

    const el = document.getElementById(id);

    return el ? el.value.trim() : "";

}



function getNumber(id){

    const value = parseFloat(getValue(id));

    return isNaN(value) ? 0 : value;

}




/* ==========================
   MONEY FORMAT
========================== */


function formatMoney(value,currency){


    let code = "USD";


    if(currency === "€")
        code="EUR";


    if(currency === "£")
        code="GBP";


    if(currency === "PKR")
        code="PKR";



    return new Intl.NumberFormat(
        "en-US",
        {
            style:"currency",
            currency:code,
            maximumFractionDigits:2
        }
    ).format(value);


}





/* ==========================
   MAIN CALCULATOR
========================== */


function calculateProfit(){



const platform =
getValue("platform");


const mode =
getValue("mode");


const currency =
getValue("currency");



const productCost =
getNumber("productCost");


const sellingPrice =
getNumber("sellingPrice");


const shipping =
getNumber("shippingCost");


const fee =
getNumber("fee");


const ads =
getNumber("adCost");


const orders =
getNumber("orders");





if(productCost<=0 || sellingPrice<=0){


    showMessage(
        "Enter product cost and selling price"
    );

    return;

}





/* COST CALCULATION */


const platformFee =
sellingPrice * (fee/100);



const totalCost =

productCost +
shipping +
platformFee +
ads;




/* PROFIT */


const profit =

sellingPrice -
totalCost;



const margin =

(profit / sellingPrice) * 100;



const roi =

(totalCost>0)

?
(profit / totalCost)*100

:

0;






/* ==========================
   PERIOD CALCULATION
========================== */


let revenue = 0;

let finalProfit = 0;



if(mode==="daily"){


    revenue =
    sellingPrice * orders;


    finalProfit =
    profit * orders;


}



else if(mode==="monthly"){


    revenue =
    sellingPrice * orders;


    finalProfit =
    profit * orders;


}



else if(mode==="yearly"){


    revenue =
    sellingPrice * orders;


    finalProfit =
    profit * orders;


}






const result={


platform,

mode,

currency,

profit,

margin,

roi,

revenue,

finalProfit


};




displayResults(result);





}





/* ==========================
   DISPLAY
========================== */


function update(id,value){


    const el =
    document.getElementById(id);


    if(el){

        el.textContent=value;

    }


}




function displayResults(result){



update(
"showPlatform",
result.platform
);



update(
"showMode",
result.mode.toUpperCase()
);



update(
"profit",
formatMoney(
result.profit,
result.currency
)
);



update(
"margin",
result.margin.toFixed(1)+"%"
);



update(
"roi",
result.roi.toFixed(1)+"%"
);





/* Titles */


const revenueTitle =
document.getElementById(
"revenueTitle"
);



const profitTitle =
document.getElementById(
"profitTitle"
);




if(result.mode==="daily"){


revenueTitle.textContent =
"Daily Revenue";


profitTitle.textContent =
"Daily Profit";


}



if(result.mode==="monthly"){


revenueTitle.textContent =
"Monthly Revenue";


profitTitle.textContent =
"Monthly Profit";


}



if(result.mode==="yearly"){


revenueTitle.textContent =
"Yearly Revenue";


profitTitle.textContent =
"Yearly Profit";


}





/* IMPORTANT IDs MATCH HTML */


update(

"monthlyRevenue",

formatMoney(
result.revenue,
result.currency
)

);




update(

"monthlyProfit",

formatMoney(
result.finalProfit,
result.currency
)

);







let breakEven = 0;


if(result.profit > 0){


breakEven =

Math.ceil(
1
);


}




update(
"breakEven",
breakEven+" sales"
);




update(
"profitStatus",
getStatus(result.margin)
);



}




/* ==========================
   STATUS
========================== */


function getStatus(margin){


if(margin>=40)

return "🔥 Excellent Profit";


if(margin>=20)

return "✅ Good Profit";


if(margin>=10)

return "⚠️ Average Profit";


return "❌ Low Profit";


}






/* ==========================
   AUTO FEE
========================== */


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






/* ==========================
   COUNTRY CURRENCY
========================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


const country =
document.getElementById("country");


const currency =
document.getElementById("currency");



if(country && currency){



country.addEventListener(
"change",
()=>{


const map={


US:"$",

UK:"£",

CA:"$",

AU:"$",

PK:"PKR",

OTHER:"$"


};



currency.value =
map[country.value];



});


}



});







/* ==========================
   MESSAGE
========================== */


function showMessage(text){



alert(text);


}





window.calculateProfit =
calculateProfit;
