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

ActivityModel.findOne({id: "b2b2b2"}).populate('user').exec()
    .then( activityFound => {
        console.log(activityFound)
    })
    .catch((error) => {
      console.log('Error');
    });
