var mongoose = require('mongoose');
var router=require('express').Router();
const heroes = {
  'heroes': [
    {'HeroName':'Deku','Name':'Midoriya Izuku','abilities':['super strength','super speed','power acumulation']},
    {'HeroName':'Kachan', 'Name':'Katsuki Bakugo','abilites':['explosion','blasts','berserk personality']},
    {'HeroName':'Cape Baldy', 'Name':'Saitama','abilities':['super strength','super speed','invulnerability']},
    {'HeroName':'Demon Cyborg', 'Name':'Genos','abilities':['explosion','blasts','mechanical parts']}
  ]
} 


router.get('/', (req, res, next) => {
    return res.json(heroes)
});

router.get('/:id', (req, res, next) => {
    return res.json({error:"not implemented yet. we need mongo"});
});

module.exports=router;
