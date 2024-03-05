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

ActivityModel.deleteMany({}).exec()
    .then( () => console.log( 'Activity deleted. '))
    .catch((error) => {
      console.log('Error to delete activity');
    });