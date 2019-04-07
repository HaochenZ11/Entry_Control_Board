app.controller("control", function($scope, $interval) {

  $scope.timeTiersCheckIn = [//currently in seconds
    60,
    120
  ]

  $scope.timeTiersInFire = [//currently in seconds
    300,
    600
  ]

  $scope.addTeamName = "";
  $scope.addLocation = "";

  $scope.firefighters = [
    {name:"A", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--", lastCheckIn:false, timeIn:false},
    {name:"B", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--", lastCheckIn:false, timeIn:false},
    {name:"C", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--", lastCheckIn:false, timeIn:false},
    {name:"D", location:"--UNASSIGNED--", assignment:"--UNASSIGNED--", lastCheckIn:false, timeIn:false}
  ];
  $scope.locations = [
    "--UNASSIGNED--",
    "BACK YARD",
    "BASEMENT",
    "FAR BEDROOM",
    "KITCHEN",
    "TOP FLOOR"
  ];
  $scope.assignments = [
    "--UNASSIGNED--",
    "FIRE ATTACK",
    "RESCUE",
    "SEARCH",
    "VENTILATION"
  ];

  var tick = function() {
    $scope.now = Date.now();
  }
  tick();
  $interval(tick, 200);

  $scope.get_true = function(){
    return true;
  }

  $scope.getColorCheckIn = function(firefighter){
    if(firefighter.lastCheckIn === false){
      return "White";
    }
    let delta_T = Date.now()-firefighter.lastCheckIn;
    delta_T = new Date(delta_T)
    let totalSeconds = delta_T.getSeconds() + 60*delta_T.getMinutes();
    if(totalSeconds > $scope.timeTiersCheckIn[1]){
      return "Red";
    }
    else if(totalSeconds > $scope.timeTiersCheckIn[0]){
      return "Orange";
    }
    return false;
  }

  $scope.getColorInFire = function(firefighter){
    if(firefighter.timeIn === false){
      return "White";
    }
    let delta_T = Date.now()-firefighter.timeIn;
    delta_T = new Date(delta_T)
    let totalSeconds = delta_T.getSeconds() + 60*delta_T.getMinutes();
    if(totalSeconds > $scope.timeTiersInFire[1]){
      return "Red";
    }
    else if(totalSeconds > $scope.timeTiersInFire[0]){
      return "Orange";
    }
    return false;

  }

  $scope.checkInOrOut = function(firefighter){
    if(firefighter.timeIn){
      firefighter.timeIn = false;
      firefighter.lastCheckIn = false;
      firefighter.location = "--UNASSIGNED--";
      firefighter.assignment = "--UNASSIGNED--";
      return;
    }
    firefighter.timeIn = $scope.now;
    firefighter.lastCheckIn = $scope.now;
  }

  $scope.getSignInOutText = function(firefighter){
    if(firefighter.timeIn){
      return ("EXIT")
      // firefighter.timeIn = false;
      // firefighter.lastCheckIn = false;
    }
    return("ENTER");
  }

  $scope.getTimeInFire = function(firefighter){
    if(!firefighter.timeIn){
      return "";
    }
    return $scope.now - firefighter.timeIn;
  }

  $scope.getTimeSinceCheckIn = function(firefighter){
    if(!firefighter.lastCheckIn){
      return "";
    }
    return $scope.now - firefighter.lastCheckIn;
  }

  $scope.deleteFirefighter = function(firefighters, i){
    firefighters.splice(i, 1);
  }

  $scope.isValidName = function(teamName){
    if(teamName === ""){
      return false;
    }
    for (i = 0; i < $scope.firefighters.length; i++){
      if($scope.firefighters[i].name===teamName){
        return false;
      }
    }
    return true;
  }

  $scope.addTeam = function(teamName){
    $scope.firefighters.push({
      name:teamName,
      location:"--UNASSIGNED--",
      assignment:"--UNASSIGNED--",
      lastCheckIn:false,
      timeIn:false
    });
    return true;
  }

  $scope.moveUp = function(index){
    let i = index;
    if(index === 0){
      return false;
    }
    tmp = $scope.firefighters[i];
    $scope.firefighters[i] = $scope.firefighters[i-1];
    $scope.firefighters[i-1] = tmp;
    return true;
  }

  $scope.moveDown = function(index){
    let i = index;
    if(index === $scope.firefighters.length - 1){
      return false;
    }
    $scope.moveUp(i+1);
  }

  $scope.isActive = function (url) {
    if (url == "#" + $scope.activeRoute) {
      console.log("$scope.active")
      return "on";
    } else {
      return "off";
    }
  };

});
