function calculateProfit(){

let sellingPrice = Number(document.getElementById("sellingPrice").value) || 0;

let productCost = Number(document.getElementById("productCost").value) || 0;

let shippingCost = Number(document.getElementById("shippingCost").value) || 0;

let fee = Number(document.getElementById("fee").value) || 0;

let adsCost = Number(document.getElementById("adsCost").value) || 0;



let tiktokFee = sellingPrice * (fee / 100);


let totalCost = productCost + shippingCost + adsCost + tiktokFee;


let profit = sellingPrice - totalCost;


let margin = sellingPrice > 0 ? (profit / sellingPrice) * 100 : 0;


let roi = (productCost + shippingCost + adsCost) > 0 
? (profit / (productCost + shippingCost + adsCost)) * 100 
: 0;



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



let status = document.getElementById("status");


if(profit > 0 && margin >= 30){

status.innerHTML = "🟢 Excellent Profit";

}

else if(profit > 0){

status.innerHTML = "🟡 Good Profit";

}

else{

status.innerHTML = "🔴 Loss";

}


}



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
