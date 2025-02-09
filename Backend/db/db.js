const mongoose = require('mongoose');

function ConnectToDb() {
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log('Connected!'))
        .catch(err => console.error('Connection failed:', err));
}

module.exports = ConnectToDb