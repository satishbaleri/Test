const exp= require('express');
const app= exp();
const path=require('path');
const hogan=require('hogan-middleware');
const indexRoute =require('./router/Index');
const registerRoute =require('./router/Register');


    app.set('Views',path.join(__dirname,'Views'));
    app.set('view engine','mustache');
    app.engine('mustache',hogan.__express);

// app.get('/', function(req,res)
// {
//     res.send ('Hello World');
// });

// app.get('/Json', function(req,res)
// {
//     const data1={
//      greeting:'Hello Satish!!'
//     }
//     res.send (data1);
// });

// app.get('/home',function(req,res)
// {
//     res.render('home',null);
// });

app.use('/',indexRoute);
app.use('/register',registerRoute);

app.listen(3000 ,()=> {
    console.log('Application is listening on port 3000');
});