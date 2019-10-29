var WallflowerDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // debugger;
  this.$node.addClass('wallflowerDancer');
  this.$node.append('<img src="images/wallflower.png" height="75" width="75"></img>');
  // this._left = left;
  // this._top = top;
  this._movement = -20;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
WallflowerDancer.prototype = Object.create(Dancer.prototype);
WallflowerDancer.prototype.constructor = WallflowerDancer;

WallflowerDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step\
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // get current top pos
  // this.top = this.$node.offset().top;
  /* if (this.top > 10) {
    this.top += this.movement;
  } */
  // get current left pos
  // this._left = this.$node.offset().left;
  if (this._left > 30) {
    this._left += this._movement;
  }
  // set new position with updated top and left
  this.setPosition(this._top, this._left);
};
