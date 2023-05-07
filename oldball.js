//Set global variable that would contain the position, velocity and the html element "ball"
var div = document.createElement('div');
div.id = 'ball';
div.style.zIndex = '5';
div.style.position = 'absolute';    
div.style.left = '0px';    
div.style.top = '200px';    
div.style.width = '100px';    
div.style.height = '100px';    
div.style.borderRadius = '50%';
div.style.background = 'black';    

// Then append the whole thing onto the body
document.getElementsByTagName('body')[0].appendChild(div);
var velocity = 100;
var positionX = 0
var positionY = 0
var Xdirection = 1;
var Ydirection = 1;
var colors = ['black','blue','green','yellow','purple','pink']
var indexCol = 0
 
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 50;
  var Xmax = 350;
  var Ymin = 0;
  var Ymax = 300;
  var ballDiv = document.getElementById('ball')
  if (positionX >= Xmax) {
    Xdirection = -1
    if (indexCol >= 6) {
        indexCol = 0
    } else {
        indexCol++;
    }
    ballDiv.style.background = colors[indexCol]  
  } else if (positionX <= Xmin) {
    Xdirection = 1
  }  
  if (positionY >= Ymax) {
    Ydirection = -1
  } else if (positionY <= Ymin) {
    Ydirection = 1
  } 

  positionX = positionX + (velocity * Xdirection);
  positionY = positionY + (velocity * Ydirection);
  ballDiv.style.left = positionX + 'px'  
  ballDiv.style.top = positionY + 'px'
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);