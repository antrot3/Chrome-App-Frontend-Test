/**
 * Created by Ante on 11/02/2017.
 */
var express=require('express');
var app= express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.render('index');
});
app.get('/posts', function (req, res) {
    res.render('posts');
});
app.get('/profile', function (req, res) {
    res.render('profile');
});

app.listen(3000,function () {
    console.log("This is runing on 3000");
    
});