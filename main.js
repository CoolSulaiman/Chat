const express=require('express');
const mainn=express();

const route=require('./login')
mainn.use(route)

const chaat=require('./chatting')
mainn.use(chaat);


console.log("hello")
mainn.listen(5000)
