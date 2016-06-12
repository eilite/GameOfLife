var Cell = require("./Cell")

function Board(width, height){
  this.width = width;
  this.height = height;
  this.cells = [];
  for (var i = 0; i < width*height; i++) {
    this.cells[i] = new Cell(Math.random() < 0.5 ? true : false)
  }
}

Board.prototype.getSize = function(){
  return this.cells.length;
}

Board.prototype.setNeighbours = function(cell, index){
  var column = index % this.width
  var row = Math.trunc(index / this.width)
  var neighbours = [];
  if(column == 0){
    neighbours.push(this.cells[index+1]);
  } else if(column == this.width - 1){
    neighbours.push(this.cells[index-1]);
  } else {
    neighbours.push(this.cells[index-1], this.cells[index+1]);
  }
  if(row == 0){
    if(column == 0){
      neighbours.push(this.cells[index+this.width],
         this.cells[index+this.width+1]);
    } else if(column == this.width - 1){
      neighbours.push(this.cells[index-1+this.width], this.cells[index+this.width]);
    } else {
      neighbours.push(this.cells[index-1+this.width], this.cells[index+this.width],
         this.cells[index+this.width]+1);
    }

  } else if(row == this.height - 1){
    if(column == 0){
      neighbours.push(this.cells[index-this.width],
        this.cells[index+1-this.width]);
    }else if(column == this.width - 1){
      neighbours.push(this.cells[index-1-this.width], this.cells[index-this.width]);
    }else {
      neighbours.push(this.cells[index-1-this.width], this.cells[index-this.width],
        this.cells[index+1-this.width]);
    }
  } else {
    neighbours.push(this.cells[index-1-this.width], this.cells[index-this.width],
      this.cells[index+1-this.width]);
    neighbours.push(this.cells[index-1+this.width], this.cells[index+this.width],
       this.cells[index+this.width]);
  }
  var resCell = new Cell(cell.state, neighbours.filter((neighbour)=>neighbour));
  return resCell;
}



module.exports = Board;
