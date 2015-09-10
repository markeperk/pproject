var app = angular.module('excCrit');


 app.service('ThreadService', function ThreadService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getThreads: function () {
        return $firebase(new Firebase('https://pproject.firebaseio.com/threads'));
      },

      getThread: function (threadId) {
        return $firebase(new Firebase('https://pproject.firebaseio.com/threads/' + threadId));
      },
    
      getComments: function (threadId) {
        return $firebase(new Firebase('https://pproject.firebaseio.com/threads/' + threadId + '/comments'));
      }
    }
  });