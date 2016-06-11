function Cell(state, neighbours){
  this.state = state;
  this.neighbours = neighbours;
}

Cell.prototype.numberOfAliveNeighbours = function(){
  var neighboursAlive = this.neighbours.filter((neighbour)=>{
    return neighbour.state;
  });

  if (this.neighbours.length > 1)
    return neighboursAlive.length;

  return 1;
}

Cell.prototype.nextState = function(){
  if(this.state && (this.numberOfAliveNeighbours()<2 || this.numberOfAliveNeighbours()>3))
      return false;
  if(!this.state && this.numberOfAliveNeighbours()==3)
    return true;

  return this.state
}

module.exports = Cell;
