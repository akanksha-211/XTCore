
function getX(x) {
    let cacheMap = new Map();
    return function(x){
        if(cacheMap.get(x)) {
            console.log('Found in cache');
        }
        else {
            cacheMap.set(x,x);
        }
        console.log(cacheMap);
    }
    
}
const g = new getX();
g(1);
g(1);
g(2);
g(3);
g(2);