const express=require('express');


const router=express.Router();

router.get('/log',(req,res,next)=>{

    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action=/log method="POST"><input id="username" type=text name="usernaame"><button type=submit>login</button></form>')

})

router.post('/log',(req,res,next)=>{

    res.redirect('/')
})

module.exports=router

