var CircleDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // debugger;
  this.$node.addClass('circleDancer');
  this.$node.append('<img src="images/circle.png" height="75" width="75"></img>');
  // this._startTop = top;
  // this._startLeft = left;
  this._radius = Math.random() * 100;
  this._angle = 0;
  this._anglestep = Math.PI * 2 * 20 / 360;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this._angle += this._anglestep;
  var dy = Math.sin(this._angle) * this._radius;
  var dx = Math.cos(this._angle) * this._radius;
  this.setPosition(this._top + dy, this._left + dx);
};
