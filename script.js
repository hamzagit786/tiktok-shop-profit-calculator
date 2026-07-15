/* =====================================
   eProfitFlow Professional JavaScript
===================================== */


document.addEventListener("DOMContentLoaded", function(){


    const calculateBtn = document.getElementById("calculateBtn");


    // Stop if calculator does not exist

    if(!calculateBtn){

        return;

    }



    calculateBtn.addEventListener("click", calculateProfit);



});





function getValue(id){

    const element = document.getElementById(id);

    if(!element){

        return "";

    }

    return element.value.trim();

}





function numberValue(id){

    const value = Number(getValue(id));

    return isNaN(value) ? 0 : value;

}





function formatMoney(amount, currency="USD"){


    return new Intl.NumberFormat(
        "en-US",
        {
            style:"currency",
            currency:currency
        }
    ).format(amount);


}





function calculateProfit(){



    // Inputs


    const platform = getValue("platform");

    const mode = getValue("mode");


    const currency =
    getValue("currency") || "USD";



    const productCost =
    numberValue("productCost");



    const sellingPrice =
    numberValue("sellingPrice");



    const shippingCost =
    numberValue("shippingCost");



    const fee =
    numberValue("fee");



    const adCost =
    numberValue("adCost");



    const monthlyOrders =
    numberValue("monthlyOrders");





    // Validation


    if(productCost <= 0 || sellingPrice <= 0){


        showMessage(
        "Please enter product cost and selling price"
        );


        return;


    }






    // Calculations


    const platformFee =
    sellingPrice * (fee / 100);




    const totalCost =

    productCost +

    shippingCost +

    platformFee +

    adCost;





    const profit =

    sellingPrice -

    totalCost;





    const margin =

    sellingPrice > 0 ?

    (profit / sellingPrice) * 100 :

    0;





    const roi =

    totalCost > 0 ?

    (profit / totalCost) * 100 :

    0;





    const monthlyRevenue =

    sellingPrice *

    monthlyOrders;





    const monthlyProfit =

    profit *

    monthlyOrders;





    const yearlyProfit =

    monthlyProfit * 12;





    const breakEven =

    profit > 0 ?

    Math.ceil(totalCost / profit)

    :

    0;
    /* =========================
   SHOW RESULTS
========================= */


function updateResult(id, value){


    const element = document.getElementById(id);


    if(element){

        element.textContent = value;

    }


}




function showMessage(message){


    let box = document.getElementById("jsMessage");



    if(!box){


        box = document.createElement("div");

        box.id = "jsMessage";


        document.body.appendChild(box);


    }



    box.textContent = message;



    box.classList.add("active");



    setTimeout(()=>{


        box.classList.remove("active");


    },3000);



}





function saveCalculation(data){


    localStorage.setItem(

        "eProfitFlowCalculation",

        JSON.stringify(data)

    );


}






function loadCalculation(){


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






// Final result display

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
        result.breakEven+" sales"
    );



}





/* =========================
   MESSAGE STYLE
========================= */


const style = document.createElement("style");


style.innerHTML = `

#jsMessage{

position:fixed;

bottom:30px;

left:50%;

transform:translateX(-50%) translateY(100px);

background:#ff7a00;

color:white;

padding:15px 25px;

border-radius:12px;

font-weight:600;

transition:.3s;

z-index:9999;

}


#jsMessage.active{

transform:translateX(-50%) translateY(0);

}

`;



document.head.appendChild(style);
    
    
