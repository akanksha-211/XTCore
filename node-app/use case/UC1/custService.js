const CustDAO = require('./CustomerDAO');
const custDAO = new CustDAO();

const path = './data.json';
class CustService  {
    
    addCust(){
        let data = {
                cust : [ {
                    name: 'akanksha',
                    id: '121',
                    orders: [ 
                        {
                            id:'X125', 
                            value:568
                        },
                        {
                            id:'X129', 
                            value:700
                        },
                        {
                            id:'X095', 
                            value:357
                        }
                    ]
                },
                {
                    name: 'new cust',
                    id: '654',
                    orders: [ 
                        {
                            id:'X25', 
                            value:500
                        },
                        {
                            id:'X19', 
                            value:60
                        },
                        {
                            id:'X05', 
                            value:490
                        }
                    ]
                } ]
        };
        
        custDAO.saveData(data, path);
        
        }
    getData() {
        var data  = custDAO.loadData(path);
        (data.cust).forEach(element => {
            let total = 0;
            console.log(element.name);
            console.log('orders');
            (element.orders).forEach(el => {
                console.log(el.id+'     '+el.value);
                total += el.value;
            });
            console.log('------------------------------');
            console.log('                        '+total);
            console.log('------------------------------');
        });;
        
    }
}
module.exports = CustService;