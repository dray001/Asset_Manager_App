const mongoose = require('mongoose'); // to connect to Mongodb atlas database

const connect = async (dbConnectionString) => {
    try {
      await mongoose.connect(dbConnectionString);
      const data_base = mongoose.connection;
      console.log(`connected to the "${data_base.name}" database`);
      return data_base;
    } catch (err) {
      console.log('Error connecting to the database', err.code);
    }
  };

  module.exports = connect;