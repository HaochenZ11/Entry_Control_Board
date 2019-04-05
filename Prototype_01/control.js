app.controller("control", function($scope) {
  $scope.firefighters = [
    {name:"A", location:0, assignment:0},
    {name:"B", location:0, assignment:0},
    {name:"C", location:0, assignment:0},
    {name:"D", location:0, assignment:0}
  ];
  $scope.locations = [
    "--UNASSIGNED--",
    "BASEMENT",
    "KITCHEN",
    "FAR BEDROOM",
    "TOP FLOOR",
    "BACK YARD"
  ]
  $scope.assignments = [
    "--UNASSIGNED--",
    "SEARCH",
    "RESCUE",
    "FIRE ATTACK",
    "VENTILLATION"
  ]
});
