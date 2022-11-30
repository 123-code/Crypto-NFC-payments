import express from 'express';
import {routes} from './routes';


const app = express();
app.use(express.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.listen(3000,()=>{console.log('listening:3000')})