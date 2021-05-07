

let li = document.getElementById("list")
let cre = document.createElement("li");
function showBook(){
    let mainBooks ={
        "Harry Potter":{
            price: "10 CHF",
        },
        "Famous Five":{
            price:"15 CHF",
        },
        "Zorrow":{
            price: "20CHF",
        },
    };
    
   cre.innerText = mainBooks;
    li.appendChild(cre);
     
};
console.log(li);