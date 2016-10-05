app.controller('usersController', function($scope) {
    $scope.headingTitle = "User List";
});

app.controller('rolesController', function($scope) {
    $scope.headingTitle = "Roles List";
});

app.controller('tabsController', function($scope) {
});

app.controller('hpController', function($scope) {
    $scope.headingTitle = "HP";
    $scope.cars = ["Saab", "Volvo", "BMW"];
    $scope.price = 123.2345;

});

app.controller('hp1Controller', function($scope, $http) {
    $scope.newCar = {id:"101",name:"",year:""}

    $scope.headingTitle = "HP";
    //$scope.cars = ["Saab", "Volvo", "BMW","Lada","Polski"];
    $scope.mycars = [{id:1,name:"Saab",year:1988},{id:2,name:"Samara",year:1989},{id:3,name:"Opel",year:2009}];
    $scope.mycars.push({id:11,name:"Mazda",year:1989});
    $scope.selectedName = $scope.mycars[1];
    $scope.isHidden = false;

    $scope.hideClickHandler = function(){
        $scope.isHidden = !$scope.isHidden;;
    };

    $scope.names = ["a","B","c","d"];

    $scope.myclass = "hp-class";
    $scope.addCmd = function(){
        $scope.mycars.push($scope.newCar)
        $scope.newCar = {id: parseInt($scope.newCar.id) + parseInt(1),name:"",year:""}
    }

    this.resetText = "Reset text";

     $scope.resetCmd = function(){
            $scope.newCar = {id: parseInt($scope.newCar.id) + +1,name:"",year:""}
    }

     $scope.restloader = function(){
        $http.get("http://localhost:8080/rest/cars")
            .success(function(data){
                console.log("data: " + data);
                $scope.restcars = data;
            })
            .error(function(){
               window.alert('There was an error!');
           });

     }



});


app.controller('form3Controller',  function() {
   var self = this;
   self.submit1 = function() {
     // Create user object to send to the server
     var user = {username: self.username, password: self.password};
     console.log('First form submit with ', user);
   };
   self.submit2 = function() {
     console.log('Second form submit with ', self.user);
   };
 });


app.controller('formvalidationController', function() {
      var self = this;
      self.submit = function() {
        console.log('User clicked submit with ', self.user);
      };
 });


app.controller('nestedFormController', function() {
    console.log('nestedFormController');
      }
  );


app.controller('checkboxController',
   function() {
         var self = this;
          self.sports = [
            {label: 'Basketball', selected: 'YES'},
            {label: 'Cricket', selected: 'NO'},
            {label: 'Soccer', selected: 'NO'},
            {label: 'Swimming', selected: 'YES'}
            ]
        }

  );