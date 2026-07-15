/* ==========================================================
   eProfitFlow Calculator Engine v2.0
   Developed for HamzaDeals

   ✔ Clean Architecture
   ✔ Existing HTML Compatible
   ✔ Future Country Support
   ✔ Future Category Support
   ✔ Better Validation
   ✔ Local Storage
   ✔ Professional Formatting

========================================================== */

"use strict";

/* ==========================================================
   DOM READY
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeCalculator();

});


/* ==========================================================
   INITIALIZE
========================================================== */

function initializeCalculator() {

    const button = document.querySelector(".btn");

    if (!button) return;

    button.addEventListener("click", calculateProfit);

    loadPreviousCalculation();

}


/* ==========================================================
   INPUT HELPERS
========================================================== */

function getElement(id) {

    return document.getElementById(id);

}


function getValue(id) {

    const element = getElement(id);

    if (!element) return "";

    return element.value.trim();

}


function getNumber(id) {

    const value = parseFloat(getValue(id));

    return isNaN(value) ? 0 : value;

}


/* ==========================================================
   CURRENCY
========================================================== */

const CurrencyMap = {

    "$": "USD",
    "USD": "USD",

    "€": "EUR",
    "EUR": "EUR",

    "£": "GBP",
    "GBP": "GBP",

    "PKR": "PKR"

};


function formatMoney(amount, currency) {

    const code = CurrencyMap[currency] || "USD";

    try {

        return new Intl.NumberFormat("en-US", {

            style: "currency",

            currency: code,

            maximumFractionDigits: 2

        }).format(amount);

    }

    catch {

        return amount.toFixed(2);

    }

}


/* ==========================================================
   VALIDATION
========================================================== */

function validateInputs(data) {

    if (data.productCost <= 0) {

        showMessage("Enter a valid product cost.");

        return false;

    }

    if (data.sellingPrice <= 0) {

        showMessage("Enter a valid selling price.");

        return false;

    }

    if (data.sellingPrice <= data.productCost) {

        showMessage("Selling price should be higher than product cost.");

        return false;

    }

    if (data.shippingCost < 0 ||
        data.adCost < 0 ||
        data.fee < 0) {

        showMessage("Negative values are not allowed.");

        return false;

    }

    return true;

}
/* ==========================================================
   CALCULATION ENGINE
========================================================== */


function calculateProfit() {


    const data = {

        platform: getValue("platform"),

        mode: getValue("mode"),

        currency: getValue("currency") || "USD",


        productCost: getNumber("productCost"),

        sellingPrice: getNumber("sellingPrice"),

        shippingCost: getNumber("shippingCost"),

        fee: getNumber("fee"),

        adCost: getNumber("adCost"),

        monthlyOrders: getNumber("monthlyOrders")

    };



    // Validate

    if(!validateInputs(data)) {

        return;

    }



    /*
       PLATFORM FEE CALCULATION

       User entered fee will remain priority.
       Future automatic fees can be added here.
    */


    const platformFee =

        data.sellingPrice *

        (data.fee / 100);




    const totalCost =

        data.productCost +

        data.shippingCost +

        platformFee +

        data.adCost;




    const profit =

        data.sellingPrice -

        totalCost;




    const margin =

        (profit / data.sellingPrice) * 100;




    const roi =

        totalCost > 0

        ?

        (profit / totalCost) * 100

        :

        0;




    const monthlyRevenue =

        data.sellingPrice *

        data.monthlyOrders;




    const monthlyProfit =

        profit *

        data.monthlyOrders;




    const yearlyProfit =

        monthlyProfit * 12;




    const breakEven =

        profit > 0

        ?

        Math.ceil(totalCost / profit)

        :

        0;




    const result = {


        platform: data.platform,


        currency: data.currency,


        profit,


        margin,


        roi,


        monthlyRevenue,


        monthlyProfit,


        yearlyProfit,


        breakEven,


        status: getProfitStatus(margin)


    };



    displayResults(result);



    saveCalculation({

        input:data,

        result:result

    });


}






/* ==========================================================
   PROFIT STATUS
========================================================== */


function getProfitStatus(margin) {


    if(margin >= 40) {

        return "Excellent Profit";

    }


    if(margin >= 20) {

        return "Good Profit";

    }


    if(margin >= 10) {

        return "Average Profit";

    }


    return "Low Profit";


}
/* ==========================================================
   DISPLAY RESULTS
========================================================== */


function updateResult(id, value) {


    const element = getElement(id);


    if(element) {

        element.textContent = value;

    }

}





function displayResults(result) {


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
        result.margin.toFixed(1) + "%"
    );



    updateResult(
        "roi",
        result.roi.toFixed(1) + "%"
    );



    updateResult(
        "monthlyRevenue",
        formatMoney(
            result.monthlyRevenue,
            result.currency
        )
    );



    updateResult(
        "monthlyProfit",
        formatMoney(
            result.monthlyProfit,
            result.currency
        )
    );



    updateResult(
        "yearlyProfit",
        formatMoney(
            result.yearlyProfit,
            result.currency
        )
    );



    updateResult(
        "breakEven",
        result.breakEven + " sales"
    );



}




/* ==========================================================
   LOCAL STORAGE
========================================================== */


function saveCalculation(data) {


    try {


        localStorage.setItem(

            "eProfitFlowCalculation",

            JSON.stringify(data)

        );


    }


    catch(error) {


        console.log(
            "Storage unavailable"
        );


    }


}





function loadPreviousCalculation() {


    try {


        const saved =

        localStorage.getItem(
            "eProfitFlowCalculation"
        );



        if(!saved) {

            return;

        }



        const data =

        JSON.parse(saved);



        console.log(
            "Previous calculation found",
            data
        );


    }


    catch(error) {


        console.log(
            "No previous calculation"
        );


    }


}




/* ==========================================================
   MESSAGE SYSTEM
========================================================== */


function showMessage(message) {


    let box = getElement(
        "jsMessage"
    );



    if(!box) {


        box = document.createElement(
            "div"
        );


        box.id = "jsMessage";


        document.body.appendChild(box);


        addMessageStyle();

    }



    box.textContent = message;


    box.classList.add(
        "active"
    );



    setTimeout(()=>{


        box.classList.remove(
            "active"
        );


    },3000);



}




function addMessageStyle() {


    const style = document.createElement(
        "style"
    );



    style.innerHTML = `

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
/* ==========================================================
   PLATFORM FEE ENGINE (Future Ready)
========================================================== */


function getDefaultFee(platform) {


    const fees = {


        "TikTok Shop": 6,

        "Amazon": 15,

        "Shopify": 2.9,

        "Etsy": 6.5


    };


    return fees[platform] || 0;


}




function autoFillFee() {


    const platform = getValue(
        "platform"
    );


    const feeInput = getElement(
        "fee"
    );


    if(!feeInput) return;



    if(
        feeInput.value === ""
        ||
        feeInput.dataset.auto === "true"
    ) {


        feeInput.value =
        getDefaultFee(platform);


        feeInput.dataset.auto =
        "true";


    }


}




/* ==========================================================
   FUTURE COUNTRY SUPPORT
========================================================== */


function getCountryFee(country){


    const countries = {


        "US": {

            currency:"USD"

        },


        "UK": {

            currency:"GBP"

        },


        "CA": {

            currency:"CAD"

        },


        "AU": {

            currency:"AUD"

        },


        "PK": {

            currency:"PKR"

        }


    };


    return countries[country] || {};

}




/* ==========================================================
   FUTURE CATEGORY SUPPORT
========================================================== */


function getCategoryType(category){


    const categories = {


        beauty:"Beauty",

        fashion:"Fashion",

        electronics:"Electronics",

        home:"Home & Kitchen",

        health:"Health",

        toys:"Toys",

        sports:"Sports"


    };


    return categories[category] || "General";


}




/* ==========================================================
   INPUT LISTENERS
========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    const platform =
    getElement("platform");


    if(platform){


        platform.addEventListener(
        "change",
        ()=>{


            const fee =
            getElement("fee");


            if(fee){


                fee.value =
                getDefaultFee(
                platform.value
                );


            }


        });


    }



});




/* ==========================================================
   SECURITY CHECK
========================================================== */


window.calculateProfit =
calculateProfit;


/* ==========================================================
   eProfitFlow Calculator v2.0 END
========================================================== */
