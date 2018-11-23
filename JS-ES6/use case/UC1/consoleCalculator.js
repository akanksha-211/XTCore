// Console calculator to capture core Javascript concepts such as variables, literals, operators, functions parameters and args
function calculator (...args) {
    let result;
    if( typeof args[0] == 'number' && typeof args[1] == 'number') {
        
        if( typeof args[2] == 'string') {
            switch(args[2]) {
                case '+': result = args[0] + args[1];
                          break;
                case '-': result = args[0] - args[1];
                          break;
                case '*': result = args[0] * args[1];
                          break;
                case '/': result = args[0] / args[1];
                          break;
                case '%': result = args[0] % args[1];
                          break;
                case '**': result = args[0] ** args[1];
                          break;
                default: console.log('Invalid operand value!!');
            }
        }
        else {
            console.log('Invalid operand!!');
        }
    }
    else {
        console.log(`Invalid values, first two arguments should be number`);
    }
    return (result);
}
calculator('test', 8, '-');
calculator(3, 4, 8);
console.log(calculator(2, 5, '**'));