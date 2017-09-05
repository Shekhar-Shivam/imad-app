var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one' :{
     title : 'article one SS',
     heading :'article one',
     date :'sept 5,2016',
     content :`   <p>
                    this is the content of my 2nd article.
                    this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.
                    
                </p>
                <p>
                    this is the content of my forst article.
                    this is the content of my forst article.this is the content of my forst arti content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.
                    
                </p>
                <p>
                    this is the content of my forst article.
                    this is the content of my forst article.this is the ccle.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.this is the content of my forst article.
                    
                </p>`
    },
    'article-two': {
        title : 'article two SS',
         heading :'article two',
         date :'sept 10,2016',
         content :`  
         <p>
                        this is the content of my 2nd article.
          </p>`
    },
    'article-three': {
        title : 'article three SS',
         heading :'article three',
         date :'sept 15,2016',
         content :`  
         <p>
                        this is the content of my 3rd article.
          </p>`
    }
};

function createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate =`
    <html>
    <head>
    <title>
        ${title}
        </title>
        <meta name="veiwport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                     ${date}
                </div>
                    <div>
               ${content}
                </div>
            </div>
        </body>
        
    
    </html>
    `;
     return htmlTemplate;
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter' ,function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    //articleNmae == article-one
    //articles[articleName] == content object for article one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name', function(req,res){//URL: /submit-name?name=xxxxx
   //get the name from request
   var name=req.query.name; //TODO
   
   names.push(name);
   //JSON: javascript Object Notation
   res.send(JSON.stringify(names)); 
   
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
