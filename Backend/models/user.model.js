const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userScheema = new mongoose.Schema({
    fullname : {
        firstname : {
            type: String,
            required: true,
            minlength: [3,'Firstname must be atleast 3 characters Long'],
        },
        lastname : {
            type: String,
            minlength: [3,'Lastname must be atleast 3 characters Long'],
        },
    },

    email : {
        type: String,
        required: true,
        unique: true,
        minlength: [5,'Email must be 5 characters long'],
    },

    password : {
        type: String,
        required : true,
        select: false
    },

    socketID : {
        type: String,
    }
    
})