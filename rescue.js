function findProduct(){


let productName = document.getElementById("productName").value;

let productLink = document.getElementById("productLink").value;

let price = document.getElementById("productPrice").value;

let country = document.getElementById("country").value;



if(productName.trim() === ""){

alert("Please enter product name");

return;

}



let search = encodeURIComponent(productName);



let aliexpress =
"https://www.aliexpress.com/wholesale?SearchText=" + search;



let cj =
"https://cjdropshipping.com/search.html?keyword=" + search;



let amazon =
"https://www.amazon.com/s?k=" + search;



window.productInfo = {

name: productName,

link: productLink,

price: price,

country: country

};





document.getElementById("results").innerHTML = `


<div class="glass-card">


<h3>
Product Information
</h3>


<p>
<strong>Product:</strong> ${productName}
</p>


<p>
<strong>Current Price:</strong> ${price}
</p>


<p>
<strong>Target Country:</strong> ${country}
</p>



<hr>



<h3>
Find Replacement Options
</h3>



<p>
Compare price, stock availability and shipping before replacing your supplier.
</p>



<a class="btn" target="_blank" href="${aliexpress}">
Search AliExpress
</a>



<br><br>



<a class="btn" target="_blank" href="${cj}">
Search CJ Dropshipping
</a>




<br><br>



<a class="btn" target="_blank" href="${amazon}">
Search Amazon
</a>




<br><br>


<button class="btn" onclick="copyProductFormat()">

Copy Product Details

</button>



</div>

`;



}





function copyProductFormat(){


let data = `

Product Replacement Request

Product Name:
${window.productInfo.name}


Current Product Link:
${window.productInfo.link}


Current Price:
${window.productInfo.price}


Target Country:
${window.productInfo.country}


Requirements:

- Same or similar product
- Same target country shipping
- Equal or lower price preferred


`;



navigator.clipboard.writeText(data);


alert("Product details copied");



}
