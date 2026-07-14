const sourceDatabase = {

TikTokShop: {
USA: [
["Amazon.com","https://www.amazon.com"],
["Walmart.com","https://www.walmart.com"],
["eBay.com","https://www.ebay.com"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

UK:[
["Amazon UK","https://www.amazon.co.uk"],
["eBay UK","https://www.ebay.co.uk"],
["Argos","https://www.argos.co.uk"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Germany:[
["Amazon Germany","https://www.amazon.de"],
["eBay Germany","https://www.ebay.de"],
["Otto","https://www.otto.de"],
["Kaufland","https://www.kaufland.de"],
["AliExpress","https://www.aliexpress.com"]
],

Canada:[
["Amazon Canada","https://www.amazon.ca"],
["Walmart Canada","https://www.walmart.ca"],
["eBay Canada","https://www.ebay.ca"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

UAE:[
["Amazon UAE","https://www.amazon.ae"],
["Noon","https://www.noon.com"],
["Carrefour UAE","https://www.carrefouruae.com"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
]

},


Amazon:{
USA:[
["Amazon.com","https://www.amazon.com"],
["Walmart.com","https://www.walmart.com"],
["eBay.com","https://www.ebay.com"]
],

UK:[
["Amazon UK","https://www.amazon.co.uk"],
["eBay UK","https://www.ebay.co.uk"],
["Argos","https://www.argos.co.uk"]
],

Germany:[
["Amazon Germany","https://www.amazon.de"],
["Otto","https://www.otto.de"],
["Kaufland","https://www.kaufland.de"]
]

},


Shopify:{
USA:[
["AliExpress","https://www.aliexpress.com"],
["Alibaba","https://www.alibaba.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

UK:[
["AliExpress","https://www.aliexpress.com"],
["Spocket","https://www.spocket.co"],
["CJdropshipping","https://cjdropshipping.com"]
]

}

};





function loadSources(){

let platform = document.getElementById("sellingPlatform").value;
let country = document.getElementById("targetCountry").value;

let results = document.getElementById("sourceResults");

results.innerHTML="";


let data = sourceDatabase[platform.replace(" ","")];


if(data && data[country]){


data[country].forEach(item=>{


results.innerHTML += `

<div class="glass-card">

<h3>
🛒 ${item[0]}
</h3>

<p>
Recommended source for ${country} market.
</p>

<a class="btn" href="${item[1]}" target="_blank">
Open Platform →
</a>

</div>

`;

});


}

else{


results.innerHTML = `

<div class="glass-card">

<h3>
No recommendations available
</h3>

<p>
More marketplaces will be added soon.
</p>

</div>

`;

}


}





function findProduct(){

let name=document.getElementById("productName").value;

if(name===""){

alert("Please enter product name");

return;

}


loadSources();

}





document
.getElementById("sellingPlatform")
.addEventListener("change",loadSources);



document
.getElementById("targetCountry")
.addEventListener("change",loadSources);




// Load default results
window.onload=function(){

loadSources();

}
