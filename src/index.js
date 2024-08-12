const express = require('express');
const bodyParser = require('body-parser');


const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/Base.error');
const errorHandler = require('./utils/errorhandler');
const ConnectToDb = require('./config/db.config');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);
   

app.get('/ping', (req, res) => {
    return res.json({message: 'Problem Service is alive'});
});
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at PORT: ${PORT}`);
    try { 
        await ConnectToDb();
        console.log("Successfully Connected to DB");
    } catch (error) {
        console.log(error);
        throw error;
    }

    //dummy code
    
});