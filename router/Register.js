const exp=require('express');

const Rtr=exp.Router();

const bodyParser = require('body-parser');

Rtr.use(bodyParser.urlencoded({ extended: false }));
Rtr.use(bodyParser.json());

Rtr.post('/user',function(req,res) {
 
    const MyBody= req.body;  
    const data= {
        status:'sucess',
        Dt:MyBody
    }
    res.json(data);
 });
 Rtr.post('/Reply',function(req,res) {
 
    const Name= req.body.Name1; 
    const Occupancy3= req.body.Ocupation1;  
    const data= {
        status:'sucess',
        Name2:Name,
        Occupa:Occupancy3,
        language:['Java','C%','HJ']
    }
    res.render('Reply',data);
 });
 module.exports=Rtr;