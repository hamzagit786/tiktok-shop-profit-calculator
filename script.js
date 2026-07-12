function calculateProfit(){


let sellingPrice = Number(document.getElementById("sellingPrice").value) || 0;

let productCost = Number(document.getElementById("productCost").value) || 0;

let shippingCost = Number(document.getElementById("shippingCost").value) || 0;

let fee = Number(document.getElementById("fee").value) || 0;

let adsCost = Number(document.getElementById("adsCost").value) || 0;



// TikTok Fee Calculation

let tiktokFee = sellingPrice * (fee / 100);


// Total Investment

let totalCost = productCost + shippingCost + adsCost + tiktokFee;


// Profit

let profit = sellingPrice - totalCost;


// Margin

let margin = sellingPrice > 0 ? (profit / sellingPrice) * 100 : 0;


// ROI

let investment = productCost + shippingCost + adsCost;

let roi = investment > 0 ? (profit / investment) * 100 : 0;




// Show Results


document.getElementById("totalCost").innerHTML =
"$" + totalCost.toFixed(2);


document.getElementById("tiktokFee").innerHTML =
"$" + tiktokFee.toFixed(2);


document.getElementById("profit").innerHTML =
"$" + profit.toFixed(2);


document.getElementById("margin").innerHTML =
margin.toFixed(2) + "%";


document.getElementById("roi").innerHTML =
roi.toFixed(2) + "%";





// ROI Status Logic


let status = document.getElementById("status");



if(roi >= 40){

status.innerHTML = "🟢 Excellent Opportunity";

}

else if(roi >= 20){

status.innerHTML = "🟡 Good Opportunity";

}

else if(roi >= 1){

status.innerHTML = "🔵 Need Improvement";

}

else{

status.innerHTML = "🔴 Not Profitable";

}





// Auto Scroll To Results


document.querySelector(".results").scrollIntoView({

behavior:"smooth"

});


}




// Reset Function


function resetCalculator(){


document.getElementById("sellingPrice").value="";

document.getElementById("productCost").value="";

document.getElementById("shippingCost").value="";

document.getElementById("fee").value="6";

document.getElementById("adsCost").value="";



document.getElementById("totalCost").innerHTML="$0";

document.getElementById("tiktokFee").innerHTML="$0";

document.getElementById("profit").innerHTML="$0";

document.getElementById("margin").innerHTML="0%";

document.getElementById("roi").innerHTML="0%";

document.getElementById("status").innerHTML="Waiting";


  }
