var cols, rows;
var grid = [];
var canvas = document.getElementById("container");
const height = parseInt(canvas.getAttribute("data-height"));
const width = parseInt(canvas.getAttribute("data-width"));
var w = width / 10;
var start = canvas.getAttribute("data-start").split(/[ ,]+/);
var end = canvas.getAttribute("data-end").split(/[ ,]+/);
const bricks = parseInt(canvas.getAttribute("data-bricks"));
const startX = parseInt(start[0]);
const startY = parseInt(start[1]);
const endX = parseInt(end[0]);
const endY = parseInt(end[1]);

var bricksArray;

function setup() {
  createCanvas(width, height);
  cols = floor(width / w);
  rows = floor(height / w);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  bricksArray = Array.from({ length: bricks }, () =>
    Math.floor((Math.random() * grid.length) / 10)
  );

  console.log(bricksArray);
}

function Cell(i, j, type) {
  this.i = i;
  this.j = j;
  this.type = type;

  this.show = function () {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    noFill();
    rect(x, y, w, w);
  };
}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      if (j === startY && i === startX) {
        fill(255);
        rect(i * w, j * w, w, w);
      } else if (j === endY && i === endX) {
        fill(0);
        rect(i * w, j * w, w, w);
      } else if (bricksArray[j] === i) {
        fill(175, 0, 200);
        rect(i * w, j * w, w, w);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    console.log("Test");
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}
