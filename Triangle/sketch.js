
let theTriangle =[{x:400,y:50},{x:50, y:550},{x:750,y:550}];
let depth = 0;
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  triangleThing(theTriangle, depth);
  function mousePressed(){
    depth++;
  }
}
function triangleThing(points, degree){
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  if(degree > 0){
    triangleThing([points[0], getMidpoint(points[0], points[2]),getMidpoint(points[0], points[2])],degree-1);
    triangleThing([points[1], getMidpoint(points[1], points[2]),getMidpoint(points[1], points[2])],degree-1);
    triangleThing([points[2], getMidpoint(points[2], points[2]),getMidpoint(points[2], points[2])],degree-1);
  }
}
function getMidpoint(point1, point2){
  let newX = (point1.x + point2.x)/2;
  let newy = (point1.y + point2.y)/2;
}