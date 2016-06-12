var Board = require("../Board")
var Cell = require("../Cell")

describe("A board", function() {

  it("should create instantiate a list of cells with the good length", function() {
    var board = new Board(2,3);
    expect(board.getSize()).toEqual(2*3);
  });

  it("should get at least 2 neighbours", function() {
    var board = new Board(4,8)
    var cell =  board.setNeighbours(board.cells[12], 12);
    expect(cell.neighbours.length).toBeGreaterThan(1);
  });
  
  it("should get 3 neighbours for a cell in boarder (first)", function() {
    var board = new Board(4,8)
    var cell =  board.setNeighbours(board.cells[0], 0);
    expect(cell.neighbours.length).toEqual(3);
  });

  it("should get 3 neighbours for a cell in boarder (last)", function() {
    var board = new Board(4,8)
    var lastCell = board.setNeighbours(board.cells[board.getSize()-1], board.getSize()-1)
    expect(lastCell.neighbours.length).toEqual(3);
  });
});
