const express = require('express')
const bodyParser = require('body-parser')
const {PORT,FLIGHT_SERVICE_PATH} = require('./config/serverConfig')

const apiRoutes = require('../src/routes/index')
const app = express();
const db = require('./models/index')

const setupAndStartServer =() =>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
     
    app.use('/api', apiRoutes)

    app.listen(PORT,()=>{
        console.log(`Server start successfully ${PORT}`)
    
        // if(process.env.DB_SYNC){
        //     db.sequelize.sync({alter:true})
        // }
    });

}

setupAndStartServer();
