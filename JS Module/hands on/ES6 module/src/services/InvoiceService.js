
// Barrel export
import {customer, order, product} from '../models'

export class InvoiceService {
    getOrder(){
        return order;
    }
    getProduct(){
        return product;
    }
    getCustomer(){
        return customer;
    }
}