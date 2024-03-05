const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:21017/SpotFinder')
    .catch((error: any) => console.log(error));

import { IUser, UserModel } from './models/User';
import { IActivity, ActivityModel } from './models/Activity';

const user1: IUser = {
    "id": "a1a1a1",
    "name": "mikel",
    "surname": "arina",
    "phone": 666666666,
    "mail": "mikel.arina@upc.edu",
    "password": "mimimi"
}

// Find user and add a new activity
UserModel.findOne({id: "a1a1a1"}).exec()
    .then( userFound => {
        const newActivity = new ActivityModel({
            name: "nameA",
            user: userFound?._id
        });
    })