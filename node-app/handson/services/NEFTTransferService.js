const AccRepo = require('../repository/NoSQLAccountrepo');

class NEFTTransferService {
    constructor(){
        console.log('NEFTTransferService instance created....');
    }
    transfer(amount, fromAccNo, toAccNo) {
        console.log('Transaction begins--');
        const sqlRepo = new AccRepo();
        // load account
        const fromAcc = sqlRepo.loadAccount(fromAccNo);
        const toAcc = sqlRepo.loadAccount(toAccNo);
        // debit and credit
        fromAcc.balanace -= amount;
        toAcc.balanace += amount;
        // update accounts
        sqlRepo.updateAccount(fromAcc);
        sqlRepo.updateAccount(toAcc);
        console.log('Transaction Complete!!');
    }
}

module.exports = NEFTTransferService;