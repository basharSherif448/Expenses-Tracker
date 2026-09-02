let sum = 0;
let expense_arr = [];
let name;
let date;
let price;

document.getElementById("save-btn").addEventListener("click", function () {
  let expense = {};
  name = document.getElementById("name").value;
  date = document.getElementById("date").value;
  price = Number(document.getElementById("price").value);

  expense.name = name;
  expense.date = date;
  expense.price = price;

  if (name !== "" && price !== "" && price >= 0) {
    sum += expense.price;
    expense_arr.push(expense);
    updateTotal();
    render(expense_arr);
  }
});

function render(expense_arr) {
  let s = "";
  for (let i = 0; i < expense_arr.length; i++) {
    s += `<li id="li_${i}"><b>${expense_arr[i].name}</b> - ${expense_arr[i].price} EGP <span>${expense_arr[i].date}<button onclick="delete_item(${i})" id="li-btn"></button></span></li>`;
  }
  document.getElementById("lists").innerHTML = s;
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("date").value = "";
}

document.getElementById("reset-btn").addEventListener("click", function () {
  sum = 0;
  document.getElementById("lists").innerText = "";
  expense_arr = [];
  updateTotal();
});

function delete_item(index) {
  sum -= expense_arr[index].price;
  expense_arr.splice(index, 1);
  updateTotal();
  render(expense_arr);
}

function updateTotal() {
  document.getElementById("sum").textContent = `Total: ${sum} Egp`;
  updateStats();
}

function updateStats() {
  const count = expense_arr.length;
  const avg = count > 0 ? (sum / count).toFixed(1) : 0;


  const countElem = document.getElementById("stat-count");
  const avgElem = document.getElementById("stat-avg");
  

  if (countElem) countElem.textContent = count;
  if (avgElem) avgElem.textContent = `${avg} Egp`;
  
}
window.addEventListener("load", function () {
  updateTotal();
});