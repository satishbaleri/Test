const exp=require('express');

const Rtr=exp.Router();

const bodyParser = require('body-parser');
Rtr.use(bodyParser.urlencoded({ extended: false }))
Rtr.use(bodyParser.json())

Rtr.get('/',function(req,res){
    res.send('Hello from Router folder');
});

Rtr.get('/Json', function(req,res)
 {
     const data1={
     greeting:'Hello Satish!!'
     }
     res.send (data1);
 });

 Rtr.post('/post',function(req,res){

    const MyBody=req.body;
    
    res.json(MyBody);
 });
 Rtr.get('/home',function(req,res)
 {
     
     res.render('home',null);
 });

 Rtr.get('/Reply',function(req,res)
 {
     
     res.render('Reply',null);
 });

module.exports=Rtr;

