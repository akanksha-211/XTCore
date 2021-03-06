

// An item form the cart
class Item {
    constructor(id, src, desc, style, colour, size, quantity, price) {
        this.id = id;
        this.src = src;
        this.desc =desc;
        this.style = style;
        this.colour = colour;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
    }
}

class ItemService {
    constructor() {
        // console.log(json);
        this.serviceUrl = 'http://localhost:3000/item';
    }
    // load the data using javascript fecth service
    async findAll() {
        try {
            const response = await fetch(this.serviceUrl);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }
    // load a particular data using javascript fecth service
    async findById(id) {
        try  {
            const  response  =  await  fetch(`${this.serviceUrl}?id=${id}`);
            if  (response.status  !==  200  &&  response.status  !==  201) {
                throw  new  Error(response.statusText);
            }
            return  await  response.json();
        }  catch  (err) {
            throw  (err);
        }
    }
    // update data
    async update(id, src, desc, style, colour, size, qty, price) {
        try  {
            const item  =  new Item(id, src, desc, style, colour, size, qty, price);
            const  response  =  await  fetch(`${this.serviceUrl}/${id}`, {
                method:  'PUT',
                body:  JSON.stringify(item),
                headers: {
                    'Content-Type':  'application/json'
                }
            });
            if  (response.status  !==  200  &&  response.status  !==  201) {
                throw  new  Error(response.statusText);
            }
            return  await  response.json();
        }  catch  (err) {
            throw  (err);
        }
    }
}

export default ItemService;