function calculateProfit(){


let sellingPrice = Number(document.getElementById("sellingPrice").value) || 0;

let productCost = Number(document.getElementById("productCost").value) || 0;

let shippingCost = Number(document.getElementById("shippingCost").value) || 0;

let fee = Number(document.getElementById("fee").value) || 0;

let adsCost = Number(document.getElementById("adsCost").value) || 0;



// TikTok Fee

let tiktokFee = sellingPrice * (fee / 100);



// Total Investment

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

let breakEven = productCost + shippingCost + adsCost + tiktokFee;



// Recommended Selling Price

let recommended = totalCost * 1.4;





// Display Results


document.getElementById("profit").innerHTML =
"$" + profit.toFixed(2);



document.getElementById("roi").innerHTML =
roi.toFixed(2) + "%";



document.getElementById("totalCost").innerHTML =
"$" + totalCost.toFixed(2);



document.getElementById("tiktokFee").innerHTML =
"$" + tiktokFee.toFixed(2);



document.getElementById("margin").innerHTML =
margin.toFixed(2) + "%";



document.getElementById("breakEven").innerHTML =
"$" + breakEven.toFixed(2);



document.getElementById("recommended").innerHTML =
"$" + recommended.toFixed(2);






// ROI Business Status


let status = document.getElementById("status");



if(roi >= 40){

status.innerHTML = "🟢 Excellent";

}

else if(roi >= 20){

status.innerHTML = "🟡 Good";

}

else if(roi >= 1){

status.innerHTML = "🔵 Need Improvement";

}

else{

status.innerHTML = "🔴 Not Profitable";

}






// Smooth Scroll

document
