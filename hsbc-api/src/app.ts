import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

'use strict';

const app: express.Express = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/v1", (req, res) => {

    res.json({msg: "hi there!"})

});

export default app;