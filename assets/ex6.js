
function weekNumbersToWords(weekDays){
switch(weekDays){
    case "1":
        console.log("Monday");
        break;
     case "4":
         console.log("Thursday");
         break;
     case "6" :
         console.log("Saturday");
         break;
    case "3":
        console.log("Wednesday");
     case "2":
         console.log("Tuesday");
         break;
     case "5":
         console.log("Friday");
         break;
         case "7":
             console.log("Sunday");
             break;    
     default:
         console.log("No day");  
         break;               
}
}
console.log(weekNumbersToWords("2"));