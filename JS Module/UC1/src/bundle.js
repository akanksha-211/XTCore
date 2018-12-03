(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const profileService = require('./profileService');
const ProfileComponent = require('./profileComponent');





const  profileComponent  =  new  ProfileComponent(new  profileService()); 

profileComponent.findProfileById(2);
profileComponent.addProfile('name', 'city');
profileComponent.addProfile('name1', 'city2');
profileComponent.updateProfile(865,'new name', 'city');
profileComponent.findAllProfiles();
},{"./profileComponent":2,"./profileService":3}],2:[function(require,module,exports){
class  ProfileComponent  {
    // use dependency injection
    constructor(profileService) {
        this.profileService  =  profileService;
    }

    addProfile(name,  city) {
        this.profileService.add(name, city)
            .then((res)  =>  console.log(res))
            .catch(err  =>  console.log(err.message));
    }

    findAllProfiles() {
        this.profileService.findAll()
            .then((res)  =>  console.log(res))
            .catch(err  =>  console.log(err.message));
    }

    findProfileById(id) {
        this.profileService.findById(id)
            .then((res)  =>  console.log(res))
            .catch(err  =>  console.log(err.message));
    }

    updateProfile(id,  name,  city) {
        this.profileService.update(id, name, city).then((res)  =>  console.log(res))
            .catch(err  =>  console.log(err.message));
    }

    removeProfile(id) {
        this.profileService.remove(id)
            .then((res)  =>  console.log(res))
            .catch(err  =>  console.log(err.message));
    }
}

module.exports = ProfileComponent;
},{}],3:[function(require,module,exports){
class  Profile  {
    constructor(id,  name,  city) {
        this.id  =  id;
        this.name  =  name;
        this.city  =  city;
    }
}

class  ProfileService  {
    constructor() {
        this.serviceUrl  =  'http://localhost:3000/profile';
    }

    async add(name,  city) {
        try  {
            const  id  =  Math.floor(Math.random()  *  1000);
            const  profile  =  new  Profile(id, name, city);
            const  response  =  await  fetch(this.serviceUrl, {
                method:  'POST',
                body:  JSON.stringify(profile),
                headers: {
                    'Content-Type':  'application/json'
                }
            });
            if  (response.status  !==  200  &&  response.status  !==  201) {
                throw  new  Error(response.statusText);
            }
            return  await  response.json();
        }
        catch  (err) {
            throw  (err);
        }
    }

    // return all profiles
    async findAll() {
        try  {
            const  response  =  await  fetch(this.serviceUrl);
            if  (response.status  !==  200  &&  response.status  !==  201) {
                throw  new  Error(response.statusText);
            }
            return  await  response.json();
        }
        catch  (err) {
            throw  (err);
        }
    }

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

    async update(id,  name,  city) {
        try  {
            const  profile  =  new  Profile(id, name, city);
            const  response  =  await  fetch(`${this.serviceUrl}/${id}`, {
                method:  'PUT',
                body:  JSON.stringify(profile),
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

    async remove(id) {
        try  {
            const  response  =  await  fetch(`${this.serviceUrl}/${id}`, {
                method:  'DELETE'
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
module.exports = ProfileService;
},{}]},{},[1]);
