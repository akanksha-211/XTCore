

class FetchService {
    findAll(){
        return 'Find All';
    }
    findById(id) {
        return 'find by id :' +id;
    }
    save(){
        return 'save';
    }
    remove(){
        return 'remove';
    }
}

module.exports = FetchService;