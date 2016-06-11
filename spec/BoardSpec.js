var Board = require("../Board")
var Cell = require("../Cell")

describe("A board has a constructor", function() {

  it("should create instantiate a list of cells with the good length", function() {
    var board = new Board(2,3);
    expect(board.getSize()).toEqual(2*3);
  });
});
