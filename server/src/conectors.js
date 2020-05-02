import bluebird from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = bluebird;
mongoose.connect('mongodb://localhost/receptar');

const db = mongoose.connection;

db.on('error', () => console.log('Failed to connect to database'));
db.on('close', () => console.log('Connection closed'));
db.on('open', () => console.log('Connected to DB'));

export { db };
