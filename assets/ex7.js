let num = ["1","2","3","4"];

function rev(){
    num.reverse();
    num.forEach(function(value,index){
        console.log(value)
    })

}
rev();

let num1 = ["100000000"];
function rev1(){
    num1.shift();
    num1.splice(0,0,"1");
    num1.forEach(function(value,index){
        console.log(value)
    })
}
rev1();


let num3 = ["-","3","2","1"];

function rev2(){
    num3.pop()
    num3.splice(1,0,"-1");
    num3.splice(2,0,"2");
    num3.pop();
    num3.shift()
    num3.forEach(function(value,index){
        console.log(value);
    })
}
rev2();
