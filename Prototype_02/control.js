app.controller("control", function($scope, $interval) {

  $scope.timeTiers = [

  ]

  $scope.firefighters = [
    {name:"A", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--", lastCheckIn:Date.now()},
    {name:"B", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--", lastCheckIn:Date.now()},
    {name:"C", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--", lastCheckIn:Date.now()},
    {name:"D", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--", lastCheckIn:Date.now()}
  ];
  $scope.locations = [
    "--UNASSIGNED--",
    "BASEMENT",
    "KITCHEN",
    "FAR BEDROOM",
    "TOP FLOOR",
    "BACK YARD"
  ];
  $scope.assignments = [
    "--UNASSIGNED--",
    "SEARCH",
    "RESCUE",
    "FIRE ATTACK",
    "VENTILLATION"
  ];

  var tick = function() {
    $scope.now = Date.now();
  }
  tick();
  $interval(tick, 1000);

  $scope.get_true = function(){
    return true;
  }

  $scope.get_color = function(firefighter){
    if(firefighter.lastCheckIn > 100){
      return false;
    }
    return true;
  }

});
