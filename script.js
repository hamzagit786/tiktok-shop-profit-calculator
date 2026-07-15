/* ==========================================================
   eProfitFlow Calculator Engine v3.0
   HamzaDeals

   Daily / Monthly / Yearly Profit System
========================================================== */

"use strict";


document.addEventListener(
"DOMContentLoaded",
()=>{

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
   HELPERS
================================ */


function getElement(id){

    return document.getElementById(id);

}




function getValue(id){

    const element =
    getElement(id);


    if(!element) return "";


    return element.value.trim();

}





function getNumber(id){

    const value =
    Number(getValue(id));


    return isNaN(value) ? 0 : value;

}





/* ===============================
   CURRENCY FORMAT
================================ */


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

        currency:map[currency] || "USD"

    }).format(amount);


}
/* ===============================
   VALIDATION
================================ */


function validateInputs(data){


    if(data.productCost <= 0){

        showMessage(
        "Please enter product cost"
        );

        return false;

    }



    if(data.sellingPrice <= 0){

        showMessage(
        "Please enter selling price"
        );

        return false;

    }



    if(data.sellingPrice <= data.productCost){

        showMessage(
        "Selling price must be higher than product cost"
        );

        return false;

    }


    return true;

}





/* ===============================
   MAIN CALCULATOR
================================ */


function calculateProfit(){



    const data={


        platform:
        getValue("platform"),



        mode:
        getValue("mode"),



        currency:
        getValue("currency") || "$",



        productCost:
        getNumber("productCost"),



        sellingPrice:
        getNumber("sellingPrice"),



        shippingCost:
        getNumber("shippingCost"),



        fee:
        getNumber("fee"),



        adCost:
        getNumber("adCost"),



        orders:
        getNumber("orders")



    };





    if(!validateInputs(data)){

        return;

    }







    // Platform Fee

    const platformFee =

    data.sellingPrice *
    (data.fee / 100);







    // Total Cost

    const totalCost =

    data.productCost +

    data.shippingCost +

    platformFee +

    data.adCost;








    // Profit per sale


    const profit =

    data.sellingPrice -

    totalCost;







    const margin =

    (profit /
    data.sellingPrice)
    *100;







    const roi =

    totalCost > 0 ?

    (profit /
    totalCost)*100

    :

    0;







    /*
       MODE SYSTEM

       Daily
       Monthly
       Yearly

    */



    let orders =
    data.orders;



    let revenue = 0;

    let finalProfit = 0;






    if(data.mode==="daily"){


        revenue =
        data.sellingPrice *
        orders;


        finalProfit =
        profit *
        orders;


    }







    if(data.mode==="monthly"){


        revenue =
        data.sellingPrice *
        orders;


        finalProfit =
        profit *
        orders;


    }








    if(data.mode==="yearly"){


        revenue =
        data.sellingPrice *
        orders;


        finalProfit =
        profit *
        orders;


    }






    const result={



        platform:
        data.platform,



        mode:
        data.mode,



        currency:
        data.currency,



        profit:profit,



        margin:margin,



        roi:roi,



        revenue:revenue,



        finalProfit:finalProfit,



        status:
        getProfitStatus(margin)



    };






    displayResults(result);




    saveCalculation({

        input:data,

        result:result

    });



}
/* ===============================
   DISPLAY RESULTS
================================ */


function updateResult(id,value){


    const element =
    getElement(id);


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




    /*
       Dynamic Mode Result

       Daily
       Monthly
       Yearly

    */


    const revenueTitle =
    getElement("revenueTitle");


    const profitTitle =
    getElement("profitTitle");



    const revenueBox =
    getElement("monthlyRevenue");



    const profitBox =
    getElement("monthlyProfit");




    if(result.mode==="daily"){



        if(revenueTitle)
        revenueTitle.textContent=
        "Daily Revenue";



        if(profitTitle)
        profitTitle.textContent=
        "Daily Profit";



    }





    else if(result.mode==="monthly"){



        if(revenueTitle)
        revenueTitle.textContent=
        "Monthly Revenue";



        if(profitTitle)
        profitTitle.textContent=
        "Monthly Profit";



    }







    else if(result.mode==="yearly"){



        if(revenueTitle)
        revenueTitle.textContent=
        "Yearly Revenue";



        if(profitTitle)
        profitTitle.textContent=
        "Yearly Profit";



    }






    if(revenueBox){

        updateResult(
        "monthlyRevenue",
        formatMoney(
        result.revenue,
        result.currency
        )
        );

    }





    if(profitBox){

        updateResult(
        "monthlyProfit",
        formatMoney(
        result.finalProfit,
        result.currency
        )
        );

    }






    updateResult(
    "breakEven",
    Math.ceil(
    result.profit>0
    ?
    1
    :
    0
    )
    +" sales"
    );



    updateResult(
    "profitStatus",
    result.status
    );



}







/* ===============================
   MODE LABEL UPDATE
================================ */



function updateModeLabel(){



    const mode =
    getValue("mode");



    const orderLabel =
    document.querySelector(
    'label[for="orders"]'
    );



    const input =
    getElement("orders");



    if(!input)
    return;




    if(mode==="daily"){


        input.placeholder=
        "Orders Per Day";


    }



    else if(mode==="monthly"){


        input.placeholder=
        "Orders Per Month";


    }



    else if(mode==="yearly"){


        input.placeholder=
        "Orders Per Year";


    }



}
/* ===============================
   PROFIT STATUS
================================ */


function getProfitStatus(margin){


    if(margin >= 40){

        return "🔥 Excellent Profit";

    }


    if(margin >= 20){

        return "✅ Good Profit";

    }


    if(margin >= 10){

        return "⚠️ Average Profit";

    }


    return "❌ Low Profit";


}






/* ===============================
   AUTO PLATFORM FEE
================================ */



function getDefaultFee(platform){



    const fees={


        "TikTok Shop":6,


        "Amazon":15,


        "Shopify":2.9,


        "Etsy":6.5


    };



    return fees[platform] || 0;


}







function autoFillFee(){



    const platform =
    getValue("platform");



    const fee =
    getElement("fee");



    if(fee){


        fee.value =
        getDefaultFee(platform);


    }


}








/* ===============================
   LOCAL STORAGE
================================ */


function saveCalculation(data){


    try{


        localStorage.setItem(

        "eProfitFlowCalculation",

        JSON.stringify(data)

        );


    }


    catch(error){

        console.log(
        "Storage unavailable"
        );

    }


}








function loadPreviousCalculation(){


    try{


        const data =
        localStorage.getItem(
        "eProfitFlowCalculation"
        );



        if(data){


            console.log(
            "Previous calculation loaded"
            );


        }


    }


    catch(error){


        console.log(
        "No saved data"
        );


    }


}







/* ===============================
   MESSAGE SYSTEM
================================ */


function showMessage(message){



    let box =
    getElement("jsMessage");



    if(!box){



        box =
        document.createElement("div");



        box.id =
        "jsMessage";



        document.body.appendChild(box);



        const style =
        document.createElement("style");



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



        document.head.appendChild(style);



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








/* ===============================
   COUNTRY CURRENCY
================================ */



document.addEventListener(
"DOMContentLoaded",
()=>{


const country =
getElement("country");


const currency =
getElement("currency");




if(country && currency){


country.addEventListener(
"change",
()=>{


const map={


"US":"$",


"UK":"£",


"CA":"$",


"AU":"$",


"PK":"PKR"



};



currency.value =
map[country.value] || "$";



});



}



});
