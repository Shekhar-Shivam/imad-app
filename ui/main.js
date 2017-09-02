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