app.controller('usersController', function($scope) {
    $scope.headingTitle = "User List";
});

app.controller('rolesController', function($scope) {
    $scope.headingTitle = "Roles List";
});



app.controller('hpController', function($scope) {
    $scope.headingTitle = "HP";
    $scope.cars = ["Saab", "Volvo", "BMW"];
    $scope.price = 123.2345;

});

app.controller('hp1Controller', function($scope) {
    $scope.headingTitle = "HP";
    //$scope.cars = ["Saab", "Volvo", "BMW","Lada","Polski"];
     $scope.mycars = [{id:1,name:"Saab","year":1988},{id:2,name:"Samara","year":1989}];




});
