// alert("Hello");
 var cl = console.log
 
 var imgContainer =document.getElementById("imgContainer");
 var imagesArray = [
   "https://source.unsplash.com/random/?nature",
    "https://source.unsplash.com/random/?city",
    "https://source.unsplash.com/random/?people",
    "https://source.unsplash.com/random/?fashion&beauty",
    "https://source.unsplash.com/random/?food&drink",
    "https://source.unsplash.com/random/?athletics",
    "https://source.unsplash.com/random/?science",
    "https://source.unsplash.com/random/?robot",
    "https://source.unsplash.com/random/?javascript",
    "https://source.unsplash.com/random/?html",
    "https://source.unsplash.com/random/?angular",
    "https://source.unsplash.com/random/?experimental",
    "https://source.unsplash.com/random/?architecture&interiors",
    "https://source.unsplash.com/random/?film",
    
 ]

 var result ='';

 for(var i = 0; i < imagesArray.length; i++){
   result += "<div class='col-4 mb-4'>"+
                  "<div class='card'>"+
                     "<div class='card-body'>"+
                        "<img class='img-fluid' src='"+imagesArray[i]+"'>"
                     +"</div>"
                   +"</div>"
               +"</div>"
 }
 imgContainer.innerHTML = result;