const express=require('express');
const mainn=express();

const route=require('./login')
mainn.use(route)

const chaat=require('./chatting')

mainn.use(chaat);

mainn.use('/',(req,res,next)=>{

    res.status(404).send('<h1> Page not found</h1>')
})
console.log("hello")
mainn.listen(5000)

