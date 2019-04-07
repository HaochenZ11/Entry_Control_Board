app.controller("control", function($scope, $interval) {

  $scope.timeTiers = [//currently in seconds
    5,
    10
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
    let delta_T = Date.now()-firefighter.lastCheckIn;
    delta_T = new Date(delta_T)
    let totalSeconds = delta_T.getSeconds() + 60*delta_T.getMinutes();
    // console.log("Delta_T: " + delta_T);
    // console.log("Delta_T type: " + typeof(delta_T));
    if(totalSeconds > $scope.timeTiers[1]){
      return "Red";
    }
    else if(totalSeconds > $scope.timeTiers[0]){
      return "Orange";
    }
    return false;
  }

});
