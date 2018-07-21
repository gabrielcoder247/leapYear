var leapYear = function(year){
    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 === 0)){
        return true;
    } else {
        return false;
    }
    };
//     if (year % 100 === 0){
//         return false;
//     } else if (year % 4 ===0){
//     return true;
//     }else{
//     return false;
//     }
// };



// JQuery user interface logic here.

$(document).ready(function(){
$("form#leap-year").submit(function(){
event.preventDefault();
var year = parseInt($("input#year").val());
var result = leapYear(year);
$("#result").text(result);
});
});


