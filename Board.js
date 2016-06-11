var Cell = require("./Cell")

function Board(width, height){
  this.cells = [];
  for (var i = 0; i < width*height; i++) {
    this.cells[i] = new Cell(Math.random() < 0.5 ? true : false)
  }
}

Board.prototype.getSize = function(){
  return this.cells.length;
}
Board.prototype.setNeighbours = function(cell){
  return cell;
}



module.exports = Board;
