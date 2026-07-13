function findProduct(){


let productName = document.getElementById("productName").value;

let productLink = document.getElementById("productLink").value;

let price = document.getElementById("productPrice").value;

let country = document.getElementById("country").value;



if(productName === ""){

alert("Please enter product name");

return;

}





let searchProduct = encodeURIComponent(productName);





let aliexpress = 
"https://www.aliexpress.com/wholesale?SearchText=" 
+ searchProduct;



let cjDropshipping = 
"https://cjdropshipping.com/search.html?keyword="
+ searchProduct;



let amazon =
"https://www.amazon.com/s?k="
+ searchProduct;



document.getElementById("results").innerHTML = `


<div class="glass-card">


<h3>
Replacement Search Options
</h3>


<p>
Product:
${productName}
</p>


<p>
Current Price:
${price}
</p>


<p>
Target Country:
${country}
</p>



<br>


<a class="btn" target="_blank" href="${aliexpress}">
Search AliExpress
</a>


<br><br>


<a class="btn" target="_blank" href="${cjDropshipping}">
Search CJ Dropshipping
</a>



<br><br>


<a class="btn" target="_blank" href="${amazon}">
Search Amazon
</a>




<br><br>


<button class="btn" onclick="copyFormat()">

Copy Product Format

</button>



</div>



`;



window.productData = {

name: productName,

price: price,

country: country,

link: productLink

};



}







function copyFormat(){


let text = `

Product Name:
${window.productData.name}


Current Price:
${window.productData.price}


Country:
${window.productData.country}


Original Link:
${window.productData.link}


Replacement Search:
Please compare same product price, stock and shipping before switching supplier.

`;



navigator.clipboard.writeText(text);


alert("Product format copied");


}
