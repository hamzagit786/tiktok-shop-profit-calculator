<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>eProfitFlow Ecommerce Profit Calculator</title>

<link rel="stylesheet" href="style.css">

</head>


<body>


<header class="navbar">

<div class="logo">
<span>e</span>ProfitFlow
</div>


<nav>
<a href="index.html">Home</a>
<a href="calculator.html">Calculator</a>
<a href="services.html">Services</a>
<a href="blog.html">Blog</a>
</nav>

</header>




<section class="page-hero">

<h1>
Ecommerce Profit Calculator
</h1>

<p>
Analyze your product profit with daily, monthly and yearly projections.
</p>

</section>





<section class="calculator-container">


<div class="calculator-box">


<h2>Enter Product Data</h2>



<label>Platform</label>

<select id="platform">

<option value="TikTok Shop">
TikTok Shop
</option>

<option value="Amazon">
Amazon
</option>

<option value="Shopify">
Shopify
</option>

<option value="Etsy">
Etsy
</option>

</select>





<label>Analysis Type</label>

<select id="mode">

<option value="daily">
Daily
</option>

<option value="monthly">
Monthly
</option>

<option value="yearly">
Yearly
</option>

</select>





<label>Currency</label>

<select id="currency">

<option value="$">
$ USD
</option>

<option value="€">
€ EUR
</option>

<option value="£">
£ GBP
</option>

<option value="PKR">
PKR
</option>

</select>





<label>Country</label>

<select id="country">

<option value="US">
🇺🇸 United States
</option>

<option value="UK">
🇬🇧 United Kingdom
</option>

<option value="CA">
🇨🇦 Canada
</option>

<option value="AU">
🇦🇺 Australia
</option>

<option value="PK">
🇵🇰 Pakistan
</option>

<option value="OTHER">
🌍 Other
</option>

</select>






<label>Product Category</label>

<select id="category">


<option value="general">
General
</option>


<option value="beauty">
Beauty
</option>


<option value="fashion">
Fashion
</option>


<option value="electronics">
Electronics
</option>


<option value="home">
Home & Kitchen
</option>


<option value="health">
Health
</option>


<option value="toys">
Toys
</option>


<option value="sports">
Sports
</option>


</select>







<label>
Product Cost
</label>

<input 
id="productCost"
type="number"
placeholder="10">






<label>
Selling Price
</label>

<input 
id="sellingPrice"
type="number"
placeholder="30">






<label>
Shipping Cost
</label>

<input 
id="shippingCost"
type="number"
placeholder="5">







<label>
Platform Fee (%)
</label>

<input
id="fee"
type="number"
placeholder="Auto or Manual"
step="0.1">



<small class="field-note">

Fee can be calculated automatically or entered manually.

</small>







<label>
Advertising Cost
</label>

<input
id="adCost"
type="number"
placeholder="5">







<label id="ordersLabel">
Orders Per Day
</label>


<input
id="orders"
type="number"
placeholder="10">







<button 
onclick="calculateProfit()" 
class="btn">

Calculate Profit

</button>



</div>







<div class="results-box">


<h2>
Profit Dashboard
</h2>




<div class="result-card">

<h3>
Platform
</h3>

<strong id="showPlatform">
-
</strong>

</div>






<div class="result-card">

<h3>
Analysis Type
</h3>

<strong id="showMode">
-
</strong>

</div>






<div class="result-card">

<h3>
Profit Per Sale
</h3>

<strong id="profit">
$0
</strong>

</div>






<div class="result-card">

<h3>
Profit Margin
</h3>

<strong id="margin">
0%
</strong>

</div>






<div class="result-card">

<h3>
ROI
</h3>

<strong id="roi">
0%
</strong>

</div>






<div class="result-card">

<h3 id="revenueTitle">
Daily Revenue
</h3>

<strong id="monthlyRevenue">
$0
</strong>

</div>






<div class="result-card">

<h3 id="profitTitle">
Daily Profit
</h3>

<strong id="monthlyProfit">
$0
</strong>

</div>






<div class="result-card">

<h3>
Break Even Sales
</h3>

<strong id="breakEven">
0
</strong>

</div>






<div class="result-card">

<h3>
Profit Status
</h3>

<strong id="profitStatus">
-
</strong>

</div>



</div>



</section>







<script src="script.js"></script>


</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>eProfitFlow Ecommerce Profit Calculator</title>

<link rel="stylesheet" href="style.css">

</head>


<body>


<header class="navbar">

<div class="logo">
<span>e</span>ProfitFlow
</div>


<nav>
<a href="index.html">Home</a>
<a href="calculator.html">Calculator</a>
<a href="services.html">Services</a>
<a href="blog.html">Blog</a>
</nav>

</header>




<section class="page-hero">

<h1>
Ecommerce Profit Calculator
</h1>

<p>
Analyze your product profit with daily, monthly and yearly projections.
</p>

</section>





<section class="calculator-container">


<div class="calculator-box">


<h2>Enter Product Data</h2>



<label>Platform</label>

<select id="platform">

<option value="TikTok Shop">
TikTok Shop
</option>

<option value="Amazon">
Amazon
</option>

<option value="Shopify">
Shopify
</option>

<option value="Etsy">
Etsy
</option>

</select>





<label>Analysis Type</label>

<select id="mode">

<option value="daily">
Daily
</option>

<option value="monthly">
Monthly
</option>

<option value="yearly">
Yearly
</option>

</select>





<label>Currency</label>

<select id="currency">

<option value="$">
$ USD
</option>

<option value="€">
€ EUR
</option>

<option value="£">
£ GBP
</option>

<option value="PKR">
PKR
</option>

</select>





<label>Country</label>

<select id="country">

<option value="US">
🇺🇸 United States
</option>

<option value="UK">
🇬🇧 United Kingdom
</option>

<option value="CA">
🇨🇦 Canada
</option>

<option value="AU">
🇦🇺 Australia
</option>

<option value="PK">
🇵🇰 Pakistan
</option>

<option value="OTHER">
🌍 Other
</option>

</select>






<label>Product Category</label>

<select id="category">


<option value="general">
General
</option>


<option value="beauty">
Beauty
</option>


<option value="fashion">
Fashion
</option>


<option value="electronics">
Electronics
</option>


<option value="home">
Home & Kitchen
</option>


<option value="health">
Health
</option>


<option value="toys">
Toys
</option>


<option value="sports">
Sports
</option>


</select>







<label>
Product Cost
</label>

<input 
id="productCost"
type="number"
placeholder="10">






<label>
Selling Price
</label>

<input 
id="sellingPrice"
type="number"
placeholder="30">






<label>
Shipping Cost
</label>

<input 
id="shippingCost"
type="number"
placeholder="5">







<label>
Platform Fee (%)
</label>

<input
id="fee"
type="number"
placeholder="Auto or Manual"
step="0.1">



<small class="field-note">

Fee can be calculated automatically or entered manually.

</small>







<label>
Advertising Cost
</label>

<input
id="adCost"
type="number"
placeholder="5">







<label id="ordersLabel">
Orders Per Day
</label>


<input
id="orders"
type="number"
placeholder="10">







<button 
onclick="calculateProfit()" 
class="btn">

Calculate Profit

</button>



</div>







<div class="results-box">


<h2>
Profit Dashboard
</h2>




<div class="result-card">

<h3>
Platform
</h3>

<strong id="showPlatform">
-
</strong>

</div>






<div class="result-card">

<h3>
Analysis Type
</h3>

<strong id="showMode">
-
</strong>

</div>






<div class="result-card">

<h3>
Profit Per Sale
</h3>

<strong id="profit">
$0
</strong>

</div>






<div class="result-card">

<h3>
Profit Margin
</h3>

<strong id="margin">
0%
</strong>

</div>






<div class="result-card">

<h3>
ROI
</h3>

<strong id="roi">
0%
</strong>

</div>






<div class="result-card">

<h3 id="revenueTitle">
Daily Revenue
</h3>

<strong id="monthlyRevenue">
$0
</strong>

</div>






<div class="result-card">

<h3 id="profitTitle">
Daily Profit
</h3>

<strong id="monthlyProfit">
$0
</strong>

</div>






<div class="result-card">

<h3>
Break Even Sales
</h3>

<strong id="breakEven">
0
</strong>

</div>






<div class="result-card">

<h3>
Profit Status
</h3>

<strong id="profitStatus">
-
</strong>

</div>



</div>



</section>







<script src="script.js"></script>


</body>

</html>
/* =========================
   AUTO PLATFORM FEE
========================= */


function autoFee(){


    const platform =
    getValue("platform");


    const feeInput =
    document.getElementById("fee");



    if(!feeInput){

        return;

    }




    const fees={


        "TikTok Shop":6,


        "Amazon":15,


        "Shopify":2.9,


        "Etsy":6.5


    };



    feeInput.value =
    fees[platform] || 0;



}







/* =========================
   SAVE DATA
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
            "Storage not available"
        );


    }


}







/* =========================
   LOAD DATA
========================= */


function loadData(){


    try{


        const saved =

        localStorage.getItem(
            "eProfitFlowData"
        );



        if(saved){


            console.log(
                "Previous calculation loaded"
            );


        }



    }

    catch(error){


        console.log(
            "No previous data"
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



        box =
        document.createElement(
            "div"
        );



        box.id =
        "jsMessage";



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



const currencyMap={


"US":"$",


"UK":"£",


"CA":"$",


"AU":"$",


"PK":"PKR",


"OTHER":"$"



};




currency.value =
currencyMap[country.value];



});


}



});






/* =========================
   GLOBAL ACCESS
========================= */


window.calculateProfit =
calculateProfit;
