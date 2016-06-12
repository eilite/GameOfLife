const GameOfLife = require("../GameOfLife")
const Board = require("../Board")

describe("Game of life", function() {

  it("should set neighbours for eatch cell (more than 2 neighbours and less than 9)", function() {
    var board = new Board(8,9);
    var game = new GameOfLife(board);
    game.setNeighbours();
    var filteredCells = game.board.cells.filter((cell)=>{
      return (!(cell.neighbours.length >2 && cell.neighbours.length < 9));
      });
    expect(filteredCells.length).toEqual(0)
  });

  it("should calculate the next cells state", function() {
    var board = new Board(8,9);
    var game = new GameOfLife(board);
    var aliveCellsBefore = game.board.cells.filter((cell)=>{
      return (cell.state);
    });
    game.nextIteration();
    var aliveCellsAfter = game.board.cells.filter((cell)=>{
      return (cell.state);
    });
    expect(aliveCellsBefore.length === aliveCellsAfter.length).toBe(false)
  });
});
