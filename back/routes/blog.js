const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
  Blog.find()
    .then(blog => res.json(blog))
    .catch(err=> res.status(400).json(err)) 
});
router.route('/add').post((req,res)=>{
  const {Title,img,description}=req.body;
  console.log(req.body)
  
  const newtask=new Blog({
    
    Title,
    img,
    description
  
  });
  newtask.save()
   .then(()=>res.json('added'))
   .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/update/:id').post((req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      blog.Title = req.body.Title;
      
      blog.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;