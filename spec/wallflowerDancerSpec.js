describe('wallflowerDancer', function() {

  var wallflowerDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wallflowerDancer = new WallflowerDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(wallflowerDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move left', function() {
    // sinon.spy(wallflowerDancer.$node, 'toggle');
    const firstLeft = wallflowerDancer._left;
    wallflowerDancer.step();
    const secondLeft = wallflowerDancer._left;
    expect(secondLeft < firstLeft).to.be.true;
    // expect(wallflowerDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(wallflowerDancer, 'step');
      expect(wallflowerDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wallflowerDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wallflowerDancer.step.callCount).to.be.equal(2);
    });
  });
});
