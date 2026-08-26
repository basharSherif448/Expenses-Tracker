let sum=0
let expense_arr=[]
let name;
let date;
let price;
document.getElementById("save-btn").addEventListener("click", function() {
let expense={}
name =document.getElementById("name").value;
date=document.getElementById("date").value;
price=Number(document.getElementById("price").value);
expense.name=name;
expense.date=date;
expense.price=price;
if(name!=""&&price!=""&&price>=0)
{
sum+=expense.price;
document.getElementById("sum").textContent=`Total: ${sum} Egp`;
expense_arr.push(expense);
render(expense_arr)
}
});

function render(expense_arr)
{
    
    let s=""
    for(let i=0;i<expense_arr.length;i++)
    {
        s += `<li id="li_${i}"  ><b>${expense_arr[i].name}</b> - ${expense_arr[i].price} EGP <span>${expense_arr[i].date}<button onclick="delete_item(${i})" id="li-btn"></button></span></li>`;
        
    }
    document.getElementById("lists").innerHTML=s;
    document.getElementById("name").value="";
    document.getElementById("price").value="";
    document.getElementById("date").value="mm/dd/yyyy"
}
document.getElementById("reset-btn").addEventListener("click",function()
{

    sum=0;
    document.getElementById("lists").innerText="";
    expense_arr=[];
    document.getElementById("sum").textContent=`Total: ${sum} Egp`;


})
function delete_item(index) {
    sum -= expense_arr[index].price;
    
    expense_arr.splice(index, 1);
    
    updateTotal();
    render(expense_arr);
}

function updateTotal() {
    document.getElementById("sum").textContent = `Total: ${sum} Egp`;
}