export default class  ProfileComponent  {
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

