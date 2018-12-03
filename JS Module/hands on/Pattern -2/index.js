
function add(a,b) {
    return a+b;
}
function calculate(a,b){
    return add(a,b);
}
function main(){
    var res = calculate(10,10);
    console.log(res);
}
main();