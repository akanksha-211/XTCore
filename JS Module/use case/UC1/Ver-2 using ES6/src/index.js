import profileService from './profileService';
import ProfileComponent from './profileComponent';





const  profileComponent  =  new  ProfileComponent(new  profileService()); 

profileComponent.findProfileById(2);
profileComponent.addProfile('name', 'city');
profileComponent.addProfile('name1', 'city2');
profileComponent.updateProfile(865,'new name', 'city');
profileComponent.findAllProfiles();