// Creates and returns a new dancer object that can step
var DancerRelationship = function(dancerOne, dancerTwo) {
  this.dancerOne = dancerOne;
  this.dancerTwo = dancerTwo;
  this.distance = 0;
  this.updateDistance();
};

DancerRelationship.prototype.updateDistance = function updateDistance() {
  const topDist = this.dancerOne._top - this.dancerTwo._top;
  const leftDist = this.dancerOne._left - this.dancerTwo._left;
  this.distance = Math.sqrt(Math.pow(topDist, 2) + Math.pow(leftDist, 2));
};
