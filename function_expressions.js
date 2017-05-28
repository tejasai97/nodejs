//normal funtion statement
function callfunction(fun){
fun();
}

//function expression
var bye=function(){
    console.log('bye');
};

callfunction(bye);