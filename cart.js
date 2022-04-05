const data = JSON.parse(localStorage.getItem("books")) || [];
const cartLog = document.getElementById("cartLog");
const checkout = document.getElementById("checkout");
let tab = "";
let sum = 0;
if(data.length === 0)
{
  tab += `<div style="text-align:center">Your cart is empty</div>`
}
else{
data.forEach((book) => {
  let price = Math.floor(Math.random()*1000)+1;
  sum += price;
  tab += `<tr>
            <td>
                ${book.title}
            </td>
            <td>
                ${book.author}
            </td>
            <td>
                ${price}
            </td>
          </tr>`;
});
tab += `<tr><td></td><td><td>Total : ${sum}</td></tr>`
tab += `<tr><td></td><td><td><Button id="checkout">Checkout</Button></td></tr>`;
}
cartLog.innerHTML = tab;