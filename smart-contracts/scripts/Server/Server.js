const express = require('express');
const Routes = require('./Routes');

const main = ()=> {
    const app = express();
    const port = 5500;
    
    //app.use()
    app.get("/",(req,res)=>{
        res.send("Hello")
    });
    
    app.listen(port,()=>{ console.log(`Listening 5500 `)})
    }

    
    try{
        main()
    }catch(err){
        console.error(err)
    }


/*
const express = require('express');
const routes = require('./Routes')

const main = ()=>{
const app = express();
const port = 5500;

app.get("/",(req,res)=>{
    res.send("Hello")
});

app.listen(port,()=>{ console.log(`Listening 5500 `)})
}

try{
    main()
}catch(err){
    console.error(err)
}*/