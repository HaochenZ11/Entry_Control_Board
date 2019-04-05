app.controller("control", function($scope) {
  $scope.firefighters = [
    {name:"A", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--"},
    {name:"B", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--"},
    {name:"C", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--"},
    {name:"D", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--"}
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
});
