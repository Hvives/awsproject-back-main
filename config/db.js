const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        //await mongoose.connect(process.env.DB_MONGO, {
        await mongoose.connect('mongodb://cluster-documentdb-upc2021.cluster-cvikowjpazmy.us-east-1.docdb.amazonaws.com:27017/?gssapiServiceName=mongodb', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Conectada');
    } catch (error) {
        console.log('hubo un error')
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;