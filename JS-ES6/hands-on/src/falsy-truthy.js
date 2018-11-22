// boolean false test
var boolean_x = false;

if (boolean_x) {
    console.log(`boolean false is true`);
}
else {
    console.log(`boolean false is false`);
}
// 0 test
var number_x = 0;

if (number_x) {
    console.log(`number 0 is true`);
}
else {
    console.log(`number 0 is false`);
}

// empty string test
var str = "";

if (str) {
    console.log(`empty string is true`);
}
else {
    console.log(`empty string is false`);
}

// undefined test
var undef;

if (undef) {
    console.log(`undefined is true`);
}
else {
    console.log(`undefined is false`);
}

// NaN test
var price =86;
var qty;
var NaN_x = price * qty;

if (NaN_x) {
    console.log(`NaN is true`);
}
else {
    console.log(`NaN is false`);
}

// null test

if (null) {
    console.log(`null is true`);
}
else {
    console.log(`null is false`);
}