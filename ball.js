
var canvas = document.getElementById("my_canvas");
var c = canvas.getContext("2d");
canvas.addEventListener('click', function() {
newBall();
}, true);



function clearArray() {
	circles = [{
  x: 50,
  y: 100,
  r: 10,
  vx: 5,
  vy: 5,
  color: 125
}];
}

//create te container that will hold the boincing balls.
var container = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height
};
//create the array of circles that will be animated
var circles = [{
  x: 50,
  y: 100,
  r: 10,
  vx: 5,
  vy: 5,
  color: 125
}];

//create a new ball and adds to array
function newBall() {
  var ball = {
    x: Math.floor(Math.random() * container.width),
    y: Math.floor(Math.random() * container.height),
    r: Math.floor(Math.random() * 50 + 3),
    vx: Math.floor(Math.random() * 10),
    vy: Math.floor(Math.random() * 10),
    color: Math.floor(Math.random() * 255)
  }

  circles.push(ball);
}

function animate() {
  //draw the container
  c.fillStyle = "#18BC9C";
  c.fillRect(container.x, container.y, container.width, container.height);

  //loop throughj the circles array
  for (var i = 0; i < circles.length; i++) {
    //draw the circles
    c.fillStyle = 'hsl(' + circles[i].color++ + ', 100%, 50%)';
    c.beginPath();
    c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
    c.fill()

    //time to animate our circles ladies and gentlemen.
    if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
      circles[i].vx = -circles[i].vx;
    }

    if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
      circles[i].vy = -circles[i].vy;
    }

    circles[i].x += circles[i].vx
    circles[i].y += circles[i].vy
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
