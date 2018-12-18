const fs = require('fs');

class CustDAO {
    saveData(data, path) {
        fs.writeFileSync(path, JSON.stringify(data), 'UTF-8');
    }
    loadData(path) {
        return JSON.parse(fs.readFileSync(path, 'UTF-8'))
    }
}

module.exports = CustDAO;