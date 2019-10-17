var mongoose = require('mongoose');
var router=require('express').Router();
var Heroe = require('../models/heroe')
// const heroes = {
//   'heroes': [
//     {'HeroName':'Deku','Name':'Midoriya Izuku','abilities':['super strength','super speed','power acumulation']},
//     {'HeroName':'Kachan', 'Name':'Katsuki Bakugo','abilites':['explosion','blasts','berserk personality']},
//     {'HeroName':'Cape Baldy', 'Name':'Saitama','abilities':['super strength','super speed','invulnerability']},
//     {'HeroName':'Demon Cyborg', 'Name':'Genos','abilities':['explosion','blasts','mechanical parts']}
//   ]
// }


router.get('/', (req, res, next) => {
    return res.json(heroes)
});

router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    Heroe.findById(id)
      .then(h => res.json(h))
      .catch(e => console.log(e));
});



router.get('/name/:name', (req, res, next) => {
    const {name} = req.params;
    // cad = String(name)
    // var regex = {$regex: name};
    Heroe.find({Name: {$regex: name}})
      .then(h => res.json(h))
      .catch(e => console.log(e));
});

// router.get("/edit/:id", async (req, res)=> {
//   const {id} = req.params;
//   const tarea = await Tarea.findById(id);
//   res.render("edit", {tarea});
// })

module.exports=router;
