$(document).ready(function() {
  window.dancers = [];
  window.farDancerRelationships = [];
  window.closeDancersRelationships = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    // for each existing dancer
      // add a relationship for dancer and existing dancer to farDancerRelationships
  });
  window.updateDancerRelationships = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    var time = 100;
    setTimeout(window.updateDancerRelationships, time);
  };
  // window.updateDancerRelationships();
  // $('.dancer').on('click', function(event) {
  //   console.log('hi');
  // });
});

