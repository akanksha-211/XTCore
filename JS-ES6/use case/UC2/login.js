'use strict';
const getUser = (resolve, reject) => {
    let mockUser = {
        name : 'Sapient',
        password: 'Sapient'
    } ;
    if(mockUser) {
        resolve(mockUser)
    }
    else {
        reject({
            err:'Something Went wrong!'
        })
    }
    
};

const login = (user, resolve, reject) => {
    if(user.name === 'Sapient' && user.password === 'Sapient') {
        resolve(user);
    }
    else {
        reject({
            err: 'Wrong Username or password'
        });
    }
    
};
const dashboard = (user) => console.log('Welcome :', user.name);
const successHandler = user => {
    login(user, user => dashboard(user), err=> console.log(err));
};
const failureHandler = err => {
    console.log(err);
}
getUser(successHandler, failureHandler);

// Version -2 using Promises

const getUser2 = (resolve, reject) => {
    let mockUser = {
        name : 'Sapient',
        password: 'Sapent'
    } ;
    return new Promise ((resolve, reject) => {
        if(mockUser) {
            resolve(mockUser)
        }
        else {
            reject({
                err:'Something Went wrong!'
            })
        }
    })
    
};

const login2 = (user) => {
    return new Promise( (resolve, reject) => {
         if(user.name === 'Sapient' && user.password === 'Sapient') {
            resolve(user);
        }
        else {
            reject({
                err: 'Wrong Username or password'
            });
        }
    });
    
}

const failureHandler2 = err => {
    console.log(err);
}

getUser2()
    .then( user =>  login2(user) )
    .then( user => dashboard(user))
    .catch( err => console.log(err))
    .finally( _ => console.log('Program ends!'));