const sourceDatabase = {you

TikTokShop:{
USA:[
["Amazon.com","https://www.amazon.com"],
["Walmart.com","https://www.walmart.com"],
["eBay.com","https://www.ebay.com"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"],
["Alibaba","https://www.alibaba.com"]
],

UK:[
["Amazon UK","https://www.amazon.co.uk"],
["eBay UK","https://www.ebay.co.uk"],
["Argos","https://www.argos.co.uk"],
["Currys","https://www.currys.co.uk"],
["Tesco","https://www.tesco.com"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Canada:[
["Amazon Canada","https://www.amazon.ca"],
["Walmart Canada","https://www.walmart.ca"],
["eBay Canada","https://www.ebay.ca"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Australia:[
["Amazon Australia","https://www.amazon.com.au"],
["eBay Australia","https://www.ebay.com.au"],
["Kmart Australia","https://www.kmart.com.au"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Germany:[
["Amazon Germany","https://www.amazon.de"],
["eBay Germany","https://www.ebay.de"],
["Otto","https://www.otto.de"],
["Kaufland","https://www.kaufland.de"],
["MediaMarkt","https://www.mediamarkt.de"],
["AliExpress","https://www.aliexpress.com"]
],

France:[
["Amazon France","https://www.amazon.fr"],
["Cdiscount","https://www.cdiscount.com"],
["Fnac","https://www.fnac.com"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Italy:[
["Amazon Italy","https://www.amazon.it"],
["eBay Italy","https://www.ebay.it"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Spain:[
["Amazon Spain","https://www.amazon.es"],
["eBay Spain","https://www.ebay.es"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Netherlands:[
["Amazon Netherlands","https://www.amazon.nl"],
["Bol.com","https://www.bol.com"],
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Singapore:[
["Amazon Singapore","https://www.amazon.sg"],
["Shopee","https://shopee.sg"],
["Lazada","https://www.lazada.sg"],
["AliExpress","https://www.aliexpress.com"]
],

Malaysia:[
["Shopee Malaysia","https://shopee.com.my"],
["Lazada Malaysia","https://www.lazada.com.my"],
["AliExpress","https://www.aliexpress.com"]
],

Thailand:[
["Shopee Thailand","https://shopee.co.th"],
["Lazada Thailand","https://www.lazada.co.th"],
["AliExpress","https://www.aliexpress.com"]
],

Vietnam:[
["Shopee Vietnam","https://shopee.vn"],
["Lazada Vietnam","https://www.lazada.vn"],
["AliExpress","https://www.aliexpress.com"]
],

Philippines:[
["Shopee Philippines","https://shopee.ph"],
["Lazada Philippines","https://www.lazada.com.ph"],
["AliExpress","https://www.aliexpress.com"]
],

Indonesia:[
["Tokopedia","https://www.tokopedia.com"],
["Shopee Indonesia","https://shopee.co.id"],
["Lazada Indonesia","https://www.lazada.co.id"]
],

UAE:[
["Amazon UAE","https://www.amazon.ae"],
["Noon","https://www.noon.com"],
["Carrefour UAE","https://www.carrefouruae.com"],
["AliExpress","https://www.aliexpress.com"]
],

SaudiArabia:[
["Amazon Saudi","https://www.amazon.sa"],
["Noon Saudi","https://www.noon.com"],
["AliExpress","https://www.aliexpress.com"]
]

},

Amazon:{
USA:[
["Walmart","https://www.walmart.com"],
["eBay","https://www.ebay.com"],
["Target","https://www.target.com"],
["BestBuy","https://www.bestbuy.com"],
["Costco","https://www.costco.com"]
],

UK:[
["eBay UK","https://www.ebay.co.uk"],
["Argos","https://www.argos.co.uk"],
["Currys","https://www.currys.co.uk"],
["Tesco","https://www.tesco.com"]
],

Germany:[
["Otto","https://www.otto.de"],
["Kaufland","https://www.kaufland.de"],
["MediaMarkt","https://www.mediamarkt.de"]
]

}

};
// Remaining Platform Sources

Object.assign(sourceDatabase, {

Shopify:{
USA:[
["AliExpress","https://www.aliexpress.com"],
["Alibaba","https://www.alibaba.com"],
["CJdropshipping","https://cjdropshipping.com"],
["Spocket","https://www.spocket.co"],
["Printful","https://www.printful.com"],
["Printify","https://printify.com"],
["Walmart","https://www.walmart.com"],
["Amazon","https://www.amazon.com"]
],

UK:[
["AliExpress","https://www.aliexpress.com"],
["Alibaba","https://www.alibaba.com"],
["CJdropshipping","https://cjdropshipping.com"],
["Spocket","https://www.spocket.co"],
["Printful","https://www.printful.com"],
["Printify","https://printify.com"]
],

Canada:[
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"],
["Spocket","https://www.spocket.co"],
["Printful","https://www.printful.com"]
],

Australia:[
["AliExpress","https://www.aliexpress.com"],
["CJdropshipping","https://cjdropshipping.com"],
["Printify","https://printify.com"]
]

},


eBay:{
USA:[
["Amazon.com","https://www.amazon.com"],
["Walmart","https://www.walmart.com"],
["Target","https://www.target.com"],
["Alibaba","https://www.alibaba.com"],
["AliExpress","https://www.aliexpress.com"]
],

UK:[
["Amazon UK","https://www.amazon.co.uk"],
["Argos","https://www.argos.co.uk"],
["Currys","https://www.currys.co.uk"],
["Tesco","https://www.tesco.com"],
["Alibaba","https://www.alibaba.com"]
],

Germany:[
["Amazon Germany","https://www.amazon.de"],
["Otto","https://www.otto.de"],
["Kaufland","https://www.kaufland.de"],
["MediaMarkt","https://www.mediamarkt.de"],
["Alibaba","https://www.alibaba.com"]
],

France:[
["Amazon France","https://www.amazon.fr"],
["Fnac","https://www.fnac.com"],
["Cdiscount","https://www.cdiscount.com"],
["AliExpress","https://www.aliexpress.com"]
]

},


Walmart:{
USA:[
["Amazon.com","https://www.amazon.com"],
["Target","https://www.target.com"],
["Best Buy","https://www.bestbuy.com"],
["Costco","https://www.costco.com"],
["Alibaba","https://www.alibaba.com"],
["CJdropshipping","https://cjdropshipping.com"]
],

Canada:[
["Amazon Canada","https://www.amazon.ca"],
["Canadian Tire","https://www.canadiantire.ca"],
["Alibaba","https://www.alibaba.com"],
["AliExpress","https://www.aliexpress.com"]
]

},


Etsy:{
USA:[
["Alibaba","https://www.alibaba.com"],
["AliExpress","https://www.aliexpress.com"],
["Printful","https://www.printful.com"],
["Printify","https://printify.com"]
],

UK:[
["Alibaba","https://www.alibaba.com"],
["AliExpress","https://www.aliexpress.com"],
["Printful","https://www.printful.com"],
["Local Craft Suppliers",""]
],

Canada:[
["Alibaba","https://www.alibaba.com"],
["AliExpress","https://www.aliexpress.com"],
["Printify","https://printify.com"]
]

}

});



// Load Sources Function

function loadSources(){

let platform=document.getElementById("sellingPlatform").value;

let country=document.getElementById("targetCountry").value;

let results=document.getElementById("sourceResults");


results.innerHTML="";


let data=sourceDatabase[platform.replace(/\s/g,"")];


if(data && data[country]){


data[country].forEach(item=>{


results.innerHTML += `

<div class="glass-card">

<h3>
🛒 ${item[0]}
</h3>

<p>
Recommended source for ${country} ${platform} market.
</p>


<a class="btn" href="${item[1]}" target="_blank">
Open Platform →
</a>

</div>

`;

});


}

else{


results.innerHTML=`

<div class="glass-card">

<h3>
No recommendations available
</h3>

<p>
More sources will be added soon.
</p>

</div>

`;

}


}



// Product Finder

function findProduct(){

let name=document.getElementById("productName").value;


if(name.trim()===""){

alert("Please enter product name");

return;

}


loadSources();


// Auto scroll to recommendations section

setTimeout(()=>{

document
.getElementById("sourceResults")
.scrollIntoView({
behavior:"smooth",
block:"start"
});

},300);


}



// Dropdown Events

document
.getElementById("sellingPlatform")
.addEventListener("change",loadSources);


document
.getElementById("targetCountry")
.addEventListener("change",loadSources);



// Default Load

window.onload=function(){

loadSources();

};
