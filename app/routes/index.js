
var router=require('express').Router();

router.use('/api/hero', require('./hero'));

module.exports=router;
