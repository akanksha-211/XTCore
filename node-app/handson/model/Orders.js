const ORDERS = [{
    orderId: 1,
    value: 2000
    },
    {
        orderId: 2,
        value: 1200
    },
];

const addOrder = function(id, value) {
    console.log(ORDERS);
    let newOrder = {
        'orderId': id,
        'value': value
    };
    ORDERS.push(newOrder);
    console.log(ORDERS);
}

const updateOrder = function(id, newValue) {
    console.log(ORDERS);
    ORDERS.forEach(element => {
        if(element.orderId === id) {
            element.value = newValue;
        }
    });
    console.log(ORDERS);
}

module.exports = {
    ORDERS,
    addOrder,
    updateOrder
};