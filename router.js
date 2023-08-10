const express = require('express');
const router = new express.Router();


router.route('/')   
.get((req,res)=>{
console.log("Home was accessed");
res.render('landing');
})
.post((req,res)=>{
});


module.exports = router;