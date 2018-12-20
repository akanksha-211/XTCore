const express = require('express');
const { PROFILES } = require('../model/Profiles');
const ProfileService = require('../services/profileService');
const ProfileController = express.Router();

const profileSrc = new ProfileService();

// list all the profiles
ProfileController.get('/', (req, res) => {
    res.status(200).json(PROFILES);
});
// Find a particular profile
ProfileController.get('/:id', (req, res) => {
    PROFILES.forEach(el => {
        if(el.id == req.params.id){
            res.status(200).json(el);
        }
    });
    res.status(500).json({message: 'Profile with id - '+req.params.id+' is not found!'});
});

// add new profile
ProfileController.post('/', (req, res) => {
    const data = req.body;
    profileSrc.addProfile(data);
    res.status(200).json(PROFILES);
});


// update an existing profile
ProfileController.put('/:id', (req, res) => {
    PROFILES.forEach(el => {
        if(el.id == req.params.id){
            profileSrc.updateProfile(req.params.id, 'new city');
            res.status(200).json(PROFILES);
        }
    });
    res.status(500).json({message: 'Profile with id - '+req.params.id+' is not found!'});
});

// delete a profile
ProfileController.delete('/:id', (req, res) => {
    PROFILES.forEach(el => {
        if(el.id == req.params.id){
            profileSrc.deleteProfile(req.params.id);
            res.status(200).json(PROFILES);
        }
    });
    res.status(500).json({message: 'Profile with id - '+req.params.id+' is not found!'});
   
});

module.exports = ProfileController;
