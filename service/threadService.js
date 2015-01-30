var app = angular.module('rtfmApp');


 app.service('ThreadService', function ThreadService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getThreads: function () {
        return $firebase(new Firebase('https://dazzling-fire-2305.firebaseio.com/rtfmDemo/threads'));
      },

      getThread: function (threadId) {
        return $firebase(new Firebase('https://dazzling-fire-2305.firebaseio.com/rtfmDemo/threads/' + threadId));
      },
    
      getComments: function (threadId) {
        return $firebase(new Firebase('https://dazzling-fire-2305.firebaseio.com/rtfmDemo/threads/' + threadId + '/comments'));
      }
    }
  });