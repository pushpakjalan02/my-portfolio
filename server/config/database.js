const util = require('util');
const mongoose = require('mongoose');

const host = process.env.MONGODB_HOST;
const db = process.env.DATABASE_NAME;
const uri = util.format('%s/%s', host, db);

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Database connected');

    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    
    }
};

module.exports = connect;