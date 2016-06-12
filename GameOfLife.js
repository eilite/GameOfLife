const Cell = require("./Cell")
const Board = require("./Board")

function GameOfLife(board){
  this.board = board
}

GameOfLife.prototype.setNeighbours = function(){
  const calculatedCell = this.board.cells.map((cell, index)=>{
    return this.board.setCellNeighbours(cell,index);
  });
  this.board.setCells(calculatedCell);
}

GameOfLife.prototype.nextIteration = function(){
  this.setNeighbours();
  var nextCellsState = this.board.cells.map((cell) => new Cell(cell.nextState()));
  this.board.setCells(nextCellsState);
}

module.exports = GameOfLife
