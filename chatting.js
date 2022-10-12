const express=require('express')
const fs=require('fs');
const bodyParser=require('body-parser')

const router=express.Router();

router.use(bodyParser.urlencoded({extended:false}))

router.get('/',(req,res,next)=>{

    fs.readFile("username.text",{encoding:"utf-8"}, (err,data)=>{
        if(err){
            console.log(err)
            data='No Data Exists'
          }

    res.send(`${data}<form action='/' onsubmit="document.getElementById('username').value=
    localStorage.getItem('username')" method="POST">
    <input type="text" id="message" name="message" placeholder="message">
    <input type="hidden" name="username" id="username">   
     <button type=submit>Send</button></form>`)
})
})


router.post('/',(req,res,next)=>{

    fs.writeFile('username.text',`   ${req.body.username}:${req.body.message}   `,{flag:'a'},(err=>{
        console.log(err)
    }))

    res.redirect('/')
})





module.exports=router