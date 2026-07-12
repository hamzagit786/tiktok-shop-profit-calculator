function calculateProfit(){


let sellingPrice =
Number(document.getElementById("sellingPrice").value);


let productCost =
Number(document.getElementById("productCost").value);


let shippingCost =
Number(document.getElementById("shippingCost").value);


let fee =
Number(document.getElementById("fee").value);


let adsCost =
Number(document.getElementById("adsCost").value);



let tiktokFee =
sellingPrice * (fee/100);



let totalCost =
productCost + shippingCost + adsCost + tiktokFee;



let profit =
sellingPrice - totalCost;



let margin =
(profit / sellingPrice) * 100;



let roi =
(profit / (productCost + shippingCost + adsCost))*100;



document.getElementById("totalCost").innerHTML =
"$" + totalCost.toFixed(2);



document.getElementById("tiktokFee").innerHTML =
"$" + tiktokFee.toFixed(2);



document.getElementById("profit").innerHTML =
"$" + profit.toFixed(2);



document.getElementById("margin").innerHTML =
margin.toFixed(2)+"%";



document.getElementById("roi").innerHTML =
roi.toFixed(2)+"%";


                        }
