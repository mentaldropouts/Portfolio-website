const express = require('express');
const router = new express.Router();


router.route('/')   
.get((req,res)=>{
console.log("Home was accessed");
res.render('landing',{
        name: 'Taylor Payne',
        title1: 'University of Kentucky',
        title2: 'Senior Computer Science Student',
        button1: {
                text: 'Resume',
                url: './pdf/TaylorPayneResume.pdf',
        },
        button2: {
                text: 'Transcript',
                url: './pdf/Transcript.pdf',
        },
        button3: {
                text: 'GitHub',
                url: 'https://github.com/mentaldropouts'
        },
        button4: {
                text: 'LinkedIn',
                url: 'https://www.linkedin.com/in/taylorpaynedev/'
        },


})});
router.route('/gallery')   
.get((req,res)=>{
console.log("gallery was accessed");
res.render('gallery');
});

router.route('/temp')   
.get((req,res)=>{
console.log("gallery was accessed");
res.render('temp');
});

module.exports = router;