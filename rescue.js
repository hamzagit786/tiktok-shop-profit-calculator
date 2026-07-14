const marketplaceDatabase = {

USA: [
{
name: "Amazon USA",
domain: "amazon.com",
best: "Fast Shipping",
url: "https://www.amazon.com/s?k="
},

{
name: "Walmart USA",
domain: "walmart.com",
best: "US Warehouse",
url: "https://www.walmart.com/search?q="
},

{
name: "eBay USA",
domain: "ebay.com",
best: "Wide Product Range",
url: "https://www.ebay.com/sch/i.html?_nkw="
},

{
name: "Temu USA",
domain: "temu.com",
best: "Budget Friendly",
url: "https://www.temu.com/search_result.html?search_key="
},

{
name: "AliExpress",
domain: "aliexpress.com",
best: "Low Cost",
url: "https://www.aliexpress.com/wholesale?SearchText="
},

{
name: "CJdropshipping",
domain: "cjdropshipping.com",
best: "Dropshipping Support",
url: "https://cjdropshipping.com/search.html?keyword="
}

],



UK: [

{
name:"Amazon UK",
domain:"amazon.co.uk",
best:"Fast Delivery",
url:"https://www.amazon.co.uk/s?k="
},

{
name:"eBay UK",
domain:"ebay.co.uk",
best:"UK Marketplace",
url:"https://www.ebay.co.uk/sch/i.html?_nkw="
},

{
name:"Temu UK",
domain:"temu.com",
best:"Budget Friendly",
url:"https://www.temu.com/search_result.html?search_key="
},

{
name:"AliExpress",
domain:"aliexpress.com",
best:"Low Cost",
url:"https://www.aliexpress.com/wholesale?SearchText="
},

{
name:"CJdropshipping",
domain:"cjdropshipping.com",
best:"Dropshipping Support",
url:"https://cjdropshipping.com/search.html?keyword="
}

],



Canada:[

{
name:"Amazon Canada",
domain:"amazon.ca",
best:"Fast Shipping",
url:"https://www.amazon.ca/s?k="
},

{
name:"eBay Canada",
domain:"ebay.ca",
best:"Marketplace Choice",
url:"https://www.ebay.ca/sch/i.html?_nkw="
},

{
name:"AliExpress",
domain:"aliexpress.com",
best:"Low Cost",
url:"https://www.aliexpress.com/wholesale?SearchText="
},

{
name:"CJdropshipping",
domain:"cjdropshipping.com",
best:"Supplier Network",
url:"https://cjdropshipping.com/search.html?keyword="
}

]

};







function detectSupplier(link){


if(!link) return "";


link = link.toLowerCase();



if(link.includes("amazon"))
return "amazon";


if(link.includes("aliexpress"))
return "aliexpress";


if(link.includes("temu"))
return "temu";


if(link.includes("cjdropshipping"))
return "cjdropshipping";


if(link.includes("ebay"))
return "ebay";


if(link.includes("walmart"))
return "walmart";


return "";

}








function rescueProduct(){



let product = document.getElementById("productName").value;

let country = document.getElementById("country").value;

let supplierLink = document.getElementById("supplierLink").value;



if(product.trim()==""){


alert("Please enter product name");


return;

}




let search = encodeURIComponent(product);



let currentSupplier = detectSupplier(supplierLink);



let sources = marketplaceDatabase[country] || marketplaceDatabase["USA"];



let filtered = sources.filter(item => {


return !item.domain.includes(currentSupplier);


});






let html = "";



html += `

<h3>
Backup Options For: ${product}
</h3>

<p>
Country: ${country}
</p>

`;





filtered.forEach(item => {



html += `

<div class="glass-card rescue-card">


<h3>
${item.name}
</h3>


<p>
Best For: ${item.best}
</p>


<p>
Country Match: ${country}
</p>



<a target="_blank" class="btn" href="${item.url}${search}">

Open Search

</a>


</div>


`;



});







document.getElementById("results").innerHTML = html;





document.getElementById("resultsSection").scrollIntoView({

behavior:"smooth"

});



}
