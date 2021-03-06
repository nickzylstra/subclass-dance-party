describe('circleDancer', function() {

  var circleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    circleDancer = new CircleDancer(100, 200, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(circleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('INCOMPLETE should have a step function that should never move further than radius from starting position', function() {
    var radius = circleDancer._radius;
    var startTop = circleDancer._top;
    var startLeft = circleDancer._left;
    circleDancer.step();
    circleDancer.step();
    circleDancer.step();
    var nodeLoc = circleDancer.$node.offset();
    var nextTop = nodeLoc.top;
    var nextLeft = nodeLoc.left;
    // can refactor with method of dancer relationship
    var distance = Math.sqrt(Math.pow(nextTop - startTop, 2) + Math.pow(nextLeft - startLeft, 2));
    // -1 for rounding errors and floating point precision
    expect(distance - 1 < radius).to.be.true;

  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(circleDancer, 'step');
      expect(circleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(circleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(circleDancer.step.callCount).to.be.equal(2);
    });
  });
});
