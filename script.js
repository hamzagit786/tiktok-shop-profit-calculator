function calculateProfit(){


let currency = document.getElementById("currency").value;


let sellingPrice = Number(document.getElementById("sellingPrice").value) || 0;

let productCost = Number(document.getElementById("productCost").value) || 0;

let shippingCost = Number(document.getElementById("shippingCost").value) || 0;

let fee = Number(document.getElementById("fee").value) || 0;

let adsCost = Number(document.getElementById("adsCost").value) || 0;



// TikTok Fee

let tiktokFee = sellingPrice * (fee / 100);



// Total Cost

let totalCost = productCost + shippingCost + adsCost + tiktokFee;



// Profit

let profit = sellingPrice - totalCost;



// Margin

let margin = sellingPrice > 0 
? (profit / sellingPrice) * 100 
: 0;



// ROI

let investment = productCost + shippingCost + adsCost;


let roi = investment > 0
? (profit / investment) * 100
: 0;



// Break Even

let breakEven = totalCost;



// Recommended Price

let recommended = totalCost * 1.4;





// Show Results


document.getElementById("profit").innerHTML =
currency + profit.toFixed(2);



document.getElementById("roi").innerHTML =
roi.toFixed(1) + "%";



document.getElementById("totalCost").innerHTML =
currency + totalCost.toFixed(2);



document.getElementById("tiktokFee").innerHTML =
currency + tiktokFee.toFixed(2);



document.getElementById("margin").innerHTML =
margin.toFixed(1) + "%";



document.getElementById("breakEven").innerHTML =
currency + breakEven.toFixed(2);



document.getElementById("recommended").innerHTML =
currency + recommended.toFixed(2);






// Business Status


let status = document.getElementById("status");



if(roi >= 40){

status.innerHTML = "🟢 Excellent";

}

else if(roi >= 20){

status.innerHTML = "🟡 Good";

}

else if(roi >= 1){

status.innerHTML = "🔵 Improve";

}

else{

status.innerHTML = "🔴 Loss";

}




// Scroll to Results


document.querySelector(".results").scrollIntoView({

behavior:"smooth"

});


}





// Reset


function resetCalculator(){


document.getElementById("sellingPrice").value="";

document.getElementById("productCost").value="";

document.getElementById("shippingCost").value="";

document.getElementById("fee").value="6";

document.getElementById("adsCost").value="";



document.getElementById("profit").innerHTML="$0";

document.getElementById("roi").innerHTML="0%";

document.getElementById("status").innerHTML="Waiting";

document.getElementById("totalCost").innerHTML="$0";

document.getElementById("tiktokFee").innerHTML="$0";

document.getElementById("margin").innerHTML="0%";

document.getElementById("breakEven").innerHTML="$0";

document.getElementById("recommended").innerHTML="$0";


}
