var app = angular.module('excCrit');

  app.controller('ThreadsCtrl', function ($scope, threadsRef) {
    $scope.threads = threadsRef.$asArray();
    $scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });
    $scope.editedThread = null;
    
//Not working at all
    // $scope.scoreIt = function() {
    //   if($scope.scoreOn === true) {
    //     return true;
    //   }
    //   else {
    //     return true;
    //   }
    // }
//end


    $scope.createThread = function (username, newCriteria, newHier, newCode, newDesig, scoreOn) {
      $scope.threads.$add({
        username: username,
        title: newCriteria,
        code: newCode,
        hierarchy: newHier,
        designation: newDesig
        // scoring: scoreOn
      });
      $scope.newCriteria = '';
      $scope.newHier = 'Pillar';
      $scope.newCode = '';
      $scope.newDesig = '';
      }

    $scope.deleteThread = function (thread) {
      $scope.threads.$remove(thread);
      return;
    }

    $scope.editThread = function(thread) {
      $scope.editedThread = thread;
      $scope.originalThread = angular.extend({
         }, $scope.editedThread);
    }

    $scope.doneEditing = function(thread){
      $scope.editedThread = null;
      var title = thread.title.trim();
      var hierarchy = thread.hierarchy.trim();
      var code = thread.code.trim();
      var designation = thread.designation.trim();
  
      if (title) {
        $scope.threads.$save(thread);
      } 
      else if (hierarchy) {
        $scope.threads.$save(thread);
      }
      else if (code) {
        $scope.threads.$save(thread);
      }
      else if (designation) {
        $scope.threads.$save(thread);
      }
      else {
        $scope.deleteThread(thread);
      }
    };

  });










// Thread focus and blur directives
app.directive('threadFocus', function threadFocus($timeout){
  return function(scope, elem, attrs){
    scope.$watch(attrs.threadFocus, function(newVal){
      if (newVal){
        $timeout(function(){
          // sets focus to edit input field
          elem[0].focus();
        }, 0, false);
      }
    });
  };
});


app.directive('threadBlur', function () {
  return function (scope, elem, attrs) {
    elem.bind('blur', function(){
      // run function we pass in to attribute on blur
      scope.$apply(attrs.threadBlur);
    });
  };
});