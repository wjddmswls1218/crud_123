const mongoose = require("mongoose");

const connectData = {
  DB_ID: "4leaf",
  DB_PASSWORD: "fourleaf0309",
  DB_HOST: "210.114.1.127",
  DB_PORT: "27017",
  DB_USER: "admin",
  DB_NAME: "SCH_JEJ",
};

const connect = () => {
  mongoose.connect(
    `mongodb://${connectData.DB_ID}:${connectData.DB_PASSWORD}@${connectData.DB_HOST}:${connectData.DB_PORT}/${connectData.DB_USER}`,

    {
      dbName: connectData.DB_NAME,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log(error);
        console.log(`❌ Failed To MongoDB Connect :: ${connectData.DB_NAME}`);
      } else {
        console.log(`🐳 SUCCESS TO CONNECT MONGODB :: ${connectData.DB_NAME}`);
      }
    }
  );
};

module.exports = connect;
