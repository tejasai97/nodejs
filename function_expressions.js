function callfunction(fun){
fun();
}

var bye=function(){
    console.log('bye');
};

callfunction(bye);