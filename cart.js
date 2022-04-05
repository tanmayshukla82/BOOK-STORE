const data = JSON.parse(localStorage.getItem("books"))
const cartLog = document.getElementById("cartLog");
let tab = "";
data.forEach((book) => {
  tab += `<tr>
            <td>
                ${book.title};
            </td>
            <td>
                ${book.author};
            </td>
          </tr>`;
});
cartLog.innerHTML = tab;