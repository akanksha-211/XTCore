const { PROFILES } = require('../model/Profiles');

class ProfileService {

    // addnew profile
    addProfile(data) {
        PROFILES.push(data);
    }

    // Update an existing profile
    updateProfile(id, newcity) {
        PROFILES.forEach(el => {
            if(el.id == id){
                el.city = newcity;
            }
        });
    }

    // Delete Profile
    deleteProfile(id) {
        PROFILES.splice((id-1),1);
    }
}

module.exports = ProfileService;