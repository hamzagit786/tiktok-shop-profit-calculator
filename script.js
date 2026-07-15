/* ==========================================================
   eProfitFlow Calculator Engine v3.1
   HamzaDeals

   Professional Ecommerce Profit Calculator
   Daily / Monthly / Yearly Projection
========================================================== */

"use strict";


/* ===============================
   INITIALIZE
================================ */


document.addEventListener(
"DOMContentLoaded",
function(){

    initializeCalculator();

});




function initializeCalculator(){


    const button =
    document.querySelector(".btn");


    if(button){

        button.addEventListener(
        "click",
        calculateProfit
        );

    }




    const mode =
    getElement("mode");


    if(mode){

        mode.addEventListener(
        "change",
        updateModeLabel
        );

    }




    const platform =
    getElement("platform");


    if(platform){

        platform.addEventListener(
        "change",
        autoFillFee
        );

    }



}






/* ===============================
   DOM HELPERS
================================ */


function getElement(id){

    return document.getElementById(id);

}




function getValue(id){

    const element =
    getElement(id);


    if(!element){

        return "";

    }


    return element.value.trim();

}





function getNumber(id){

    const value =
    Number(getValue(id));


    return isNaN(value)
    ?
    0
    :
    value;

}







/* ===============================
   MONEY FORMAT
================================ */


function formatMoney(amount,currency){


    const currencyMap={


        "$":"USD",

        "€":"EUR",

        "£":"GBP",

        "PKR":"PKR"


    };



    try{


        return new Intl.NumberFormat(
        "en-US",
        {

            style:"currency",

            currency:
            currencyMap[currency] || "USD",

            maximumFractionDigits:2

        }).format(amount);



    }

    catch(error){


        return amount.toFixed(2);


    }


}
/* ==========================================================
   eProfitFlow Calculator Engine v4.0
   Daily / Monthly / Yearly Accurate System
========================================================== */

"use strict";


document.addEventListener("DOMContentLoaded",()=>{

    const button=document.querySelector(".btn");

    if(button){

        button.addEventListener(
            "click",
            calculateProfit
        );

    }


    const mode=document.getElementById("mode");

    if(mode){

        mode.addEventListener(
            "change",
            updateMode
        );

    }


    const platform=document.getElementById("platform");

    if(platform){

        platform.addEventListener(
            "change",
            autoFee
        );

    }


});



/* =========================
   GET VALUES
========================= */


function getValue(id){

    const el=document.getElementById(id);

    return el ? el.value.trim() : "";

}



function getNumber(id){

    const value=parseFloat(getValue(id));

    return isNaN(value) ? 0 : value;

}





/* =========================
   MONEY FORMAT
========================= */


function money(value,currency){


    let code="USD";


    if(currency==="€")
        code="EUR";


    if(currency==="£")
        code="GBP";


    if(currency==="PKR")
        code="PKR";



    return new Intl.NumberFormat(
        "en-US",
        {
            style:"currency",
            currency:code
        }
    ).format(value);


}





/* =========================
   MAIN CALCULATOR
========================= */


function calculateProfit(){


const data={


platform:getValue("platform"),

mode:getValue("mode"),

currency:getValue("currency"),

productCost:getNumber("productCost"),

sellingPrice:getNumber("sellingPrice"),

shipping:getNumber("shippingCost"),

fee:getNumber("fee"),

ads:getNumber("adCost"),

orders:getNumber("orders")


};



if(
data.productCost<=0 ||
data.sellingPrice<=0
){

showMessage(
"Please enter product cost and selling price"
);

return;

}




/* COST */


const platformFee =
data.sellingPrice *
(data.fee/100);



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
(profit/data.sellingPrice)*100;



const roi =
(profit/totalCost)*100;



/* PERIOD */


let revenue=0;

let periodProfit=0;


if(data.mode==="daily"){


revenue =
data.sellingPrice *
data.orders;


periodProfit =
profit *
data.orders;


}



if(data.mode==="monthly"){


revenue =
data.sellingPrice *
data.orders;


periodProfit =
profit *
data.orders;


}



if(data.mode==="yearly"){


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



saveData(result);


}
/* =========================
   DISPLAY RESULTS
========================= */


function updateResult(id,value){

    const el=document.getElementById(id);

    if(el){

        el.textContent=value;

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
        money(
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





/*
    Dynamic Period Result

    Daily = Daily Revenue + Daily Profit

    Monthly = Monthly Revenue + Monthly Profit

    Yearly = Yearly Revenue + Yearly Profit

*/



const revenueTitle =
document.getElementById(
"revenueTitle"
);



const profitTitle =
document.getElementById(
"profitTitle"
);



if(result.mode==="daily"){


    if(revenueTitle)
    revenueTitle.textContent=
    "Daily Revenue";


    if(profitTitle)
    profitTitle.textContent=
    "Daily Profit";


}





if(result.mode==="monthly"){


    if(revenueTitle)
    revenueTitle.textContent=
    "Monthly Revenue";


    if(profitTitle)
    profitTitle.textContent=
    "Monthly Profit";


}







if(result.mode==="yearly"){


    if(revenueTitle)
    revenueTitle.textContent=
    "Yearly Revenue";


    if(profitTitle)
    profitTitle.textContent=
    "Yearly Profit";


}






updateResult(
"revenue",
money(
result.revenue,
result.currency
)
);




updateResult(
"periodProfit",
money(
result.periodProfit,
result.currency
)
);





/*
 Break Even

*/

let breakEven=0;


if(result.profit>0){

breakEven =
Math.ceil(
result.revenue /
result.profit
);

}



updateResult(
"breakEven",
breakEven+" sales"
);





updateResult(
"profitStatus",
getProfitStatus(
result.margin
)
);



}





/* =========================
   PROFIT STATUS
========================= */


function getProfitStatus(margin){


if(margin>=40){

return "🔥 Excellent Profit";

}


if(margin>=20){

return "✅ Good Profit";

}


if(margin>=10){

return "⚠️ Average Profit";

}


return "❌ Low Profit";


}






/* =========================
   MODE CHANGE
========================= */


function updateMode(){


const mode =
getValue("mode");


const input =
document.getElementById(
"orders"
);



if(!input)
return;



if(mode==="daily"){


input.placeholder=
"Orders Per Day";


}



if(mode==="monthly"){


input.placeholder=
"Orders Per Month";


}



if(mode==="yearly"){


input.placeholder=
"Orders Per Year";


}



}/* =========================
   AUTO PLATFORM FEE
========================= */


function autoFee(){


const platform =
getValue("platform");


const fee =
document.getElementById("fee");



if(!fee)
return;



const fees={


"TikTok Shop":6,

"Amazon":15,

"Shopify":2.9,

"Etsy":6.5


};



fee.value =
fees[platform] || 0;


}






/* =========================
   SAVE CALCULATION
========================= */


function saveData(data){


try{


localStorage.setItem(

"eProfitFlowData",

JSON.stringify(data)

);


}

catch(error){


console.log(
"Storage error"
);


}


}






/* =========================
   LOAD DATA
========================= */


function loadData(){


try{


const data =
localStorage.getItem(
"eProfitFlowData"
);



if(data){

console.log(
"Previous calculation found"
);

}



}

catch(error){


console.log(
"No saved data"
);


}


}



document.addEventListener(
"DOMContentLoaded",
loadData
);






/* =========================
   MESSAGE SYSTEM
========================= */


function showMessage(message){


let box =
document.getElementById(
"jsMessage"
);



if(!box){


box=document.createElement(
"div"
);


box.id="jsMessage";


document.body.appendChild(
box
);



const style =
document.createElement(
"style"
);



style.innerHTML=`


#jsMessage{

position:fixed;

bottom:30px;

left:50%;

transform:
translateX(-50%)
translateY(100px);

background:#ff7a00;

color:white;

padding:15px 25px;

border-radius:12px;

font-weight:600;

z-index:9999;

transition:.3s;

}



#jsMessage.active{

transform:
translateX(-50%)
translateY(0);

}



`;



document.head.appendChild(
style
);



}




box.textContent =
message;



box.classList.add(
"active"
);



setTimeout(()=>{


box.classList.remove(
"active"
);


},3000);



}







/* =========================
   COUNTRY CURRENCY SYSTEM
========================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


const country =
document.getElementById(
"country"
);



const currency =
document.getElementById(
"currency"
);




if(country && currency){



country.addEventListener(
"change",
()=>{


const map={


"US":"$",

"UK":"£",

"CA":"$",

"AU":"$",

"PK":"PKR",

"OTHER":"$"


};



currency.value =
map[country.value];



});


}



});
