const Acc = require('../model/Account');

class SQLAccountRepo {
    constructor () {
        console.log('SQLAccountRepo instance created');
    }
    loadAccount(num) {
        console.log('loading account -' +num);
        return new Acc(num, 1000.0);
    }
    updateAccount(account) {
        console.log('updating account - '+account.num);
        console.log('updated balance - '+ account.balance)
    }
}

module.exports = SQLAccountRepo;