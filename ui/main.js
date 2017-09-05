// counter code

var button = document.getElementById('counter');

button.onclick = function(){
    // make a request to the counter endpoint
        var request = new XMLHttpRequest();
        
    //capture the reponse and store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          //take some actions
          
          if(request.status === 200)
          {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
          }
          
      }
      // not done yet.
        
    };
    
    //make requests
    
    request.open('GET','http://shivamshekhar96.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
   
};

//Submit names

var nameInput = document.getElementById('name');
var nameS = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //make a request to server and get the name
    
    //capture a list of names anfd render it as a list
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0;i<names.lenght;i++)
    {
        list +='<li>' + names[i] + '</li>'; 
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};