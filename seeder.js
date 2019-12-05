const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Load Models
const Bootcamp = require('./models/Bootcamp');

// Conenct to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Read JSON files
const bootcamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps);
        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch(err) {
        console.log(err);
    }
}

// Delete from DB
const deleteData = async () => {
    try {
        // Removes all resources from database
        await Bootcamp.deleteMany();
        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch(err) {
        console.log(err);
    }
}

if(process.argv[2] === '-i') {
    importData();
} else if(process.argv[2] === '-d') {
    deleteData();
} 