const express = require('express');
const router = new express.Router();


router.route('/')   
.get((req,res)=>{
console.log("Home was accessed");
res.render('landing',{
        name: 'Taylor Payne',
        title1: 'UK',
        title2: 'Computer Science Major',
        project1: {
                title: 'Collage Maker',
                desc: 'Started during the winter break of my Senior year at UK, I wanted to make an application \
                that allowed me to make collages of me and friends without having to do all the manual work that comes with \
                collages. This application strives to automate the process of gathering photos, removing the background, and \
                placing images together all in one easy-to-use place. Made completely in Python.',
        },
        project2: {
                title: 'Pokemon Decider Application',
                desc: 'Using a Generative AI algorithm this application takes 5 Pokemon and picks the optimal 6th Pokemon. \
                It analyzes strength and weaknesses of the current team along with overall stat composition to make these decisions. \
                Built using a React.js frontend and a Flask backend.'
        },
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