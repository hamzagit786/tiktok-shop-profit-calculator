function findProduct(){


let productName = document.getElementById("productName").value;

let productLink = document.getElementById("productLink").value;

let productPrice = document.getElementById("productPrice").value;

let country = document.getElementById("country").value;



if(productName.trim() === ""){

alert("Please enter product name");

return;

}



let search = encodeURIComponent(productName);



// Search Sources

let aliexpress =
"https://www.aliexpress.com/wholesale?SearchText=" + search;


let cjDropshipping =
"https://cjdropshipping.com/search.html?keyword=" + search;


let amazon =
"https://www.amazon.com/s?k=" + search;


let google =
"https://www.google.com/search?tbm=shop&q=" + search;





window.savedProduct = {

name: productName,

link: productLink,

price: productPrice,

country: country

};






document.getElementById("results").innerHTML = `



<div class="glass-card">


<h3>
Product Summary
</h3>


<p>
<strong>Product:</strong> ${productName}
</p>


<p>
<strong>Current Price:</strong> ${productPrice}
</p>


<p>
<strong>Shipping Country:</strong> ${country}
</p>




<hr>




<h3>
Compare Alternative Sources
</h3>


<p>
Check the same or similar product and compare price, stock availability and shipping time before changing suppliers.
</p>





<a href="${aliexpress}" target="_blank" class="btn">

AliExpress Search

</a>



<br><br>



<a href="${cjDropshipping}" target="_blank" class="btn">

CJ Dropshipping Search

</a>



<br><br>



<a href="${amazon}" target="_blank" class="btn">

Amazon Search

</a>



<br><br>



<a href="${google}" target="_blank" class="btn">

Google Shopping Search

</a>




<br><br>



<button onclick="copyProduct()" class="btn">

Copy Product Format

</button>



</div>



`;



}








function copyProduct(){


let text = `

Product Replacement Request


Product Name:
${savedProduct.name}


Original Product Link:
${savedProduct.link}


Current Price:
${savedProduct.price}


Target Country:
${savedProduct.country}



Requirements:

- Same or similar product
- Same target country shipping
- Equal or lower supplier price preferred
- Check stock availability before switching



`;



navigator.clipboard.writeText(text);


alert("Product details copied successfully");



}
