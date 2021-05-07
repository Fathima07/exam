let days= ["Monday","Thursday","Saturday","Wednesday","Tuesday"];

function getFirstValue(){
    days.sort();
    days.forEach(function(value,index){
        console.log(value)
    })
};
getFirstValue();

function getLastElement(){
    days.slice(-1);
    days.forEach(function(value,index){
        console.log(value)
    })
}
getLastElement();