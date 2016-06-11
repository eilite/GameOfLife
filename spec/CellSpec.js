describe("Cell calculate next state", function() {
  var Cell = require('../Cell');
  var cell;

  it("should return the number of alive neighbors (1)", function() {
    cell = new Cell(true,[new Cell(false),new Cell(true)])
    expect(cell.numberOfAliveNeighbours()).toEqual(1)
    // expect(player).toBePlaying(song);
  });

  it("should return the number of alive neighbors (2)", function() {
    cell = new Cell(true,[new Cell(true),new Cell(true)])
    expect(cell.numberOfAliveNeighbours()).toEqual(2)
  });

  it("next state should be alive if current state is alive and less than 2 alive neighbours", function() {
    cell = new Cell(true,[new Cell(true)])
    expect(cell.nextState()).toEqual(false);
  });

  it("next state should be alive if current state is alive and 3 alive neighbours", function() {
    cell = new Cell(true,[new Cell(true),new Cell(true),new Cell(true)])
    expect(cell.nextState()).toEqual(true);
  });

  it("next state should be dead if current state is alive and 4 alive neighbours", function() {
    cell = new Cell(true,[new Cell(true),new Cell(true),new Cell(true),new Cell(true)])
    expect(cell.nextState()).toEqual(false);
  });

  it("next state should be alive if current state is dead and 3 alive neighbours", function() {
    cell = new Cell(false,[new Cell(true),new Cell(true),new Cell(true)])
    expect(cell.nextState()).toEqual(true);
  });

  it("next state should be alive if current state is alive and 2 alive neighbours", function() {
    cell = new Cell(true,[new Cell(true),new Cell(true)])
    expect(cell.nextState()).toEqual(true);
  });

  it("next state should be dead if current state is dead and 1 alive neighbour", function() {
    cell = new Cell(false,[new Cell(true)])
    expect(cell.nextState()).toEqual(false);
  });


});
