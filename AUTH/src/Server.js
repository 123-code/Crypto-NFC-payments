import express from 'express';
import {routes} from './routes';
import cors from 'cors';




const app = express();
app.use(express.json());
app.use(cors());


routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

app.listen(3000,()=>{console.log('listening:3000')})