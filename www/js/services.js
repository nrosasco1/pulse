angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        signinUser: function(email, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (email == 'test@test.com' && pw == 'test') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.factory('Photos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var photos = [{
    id: 0,
    name: 'Butterfly',
    file: 'img/butterfly.jpeg'
  }, {
    id: 1,
    name: 'Trees',
    file: 'img/trees.jpeg'
  }, {
  	id: 2,
  	name: 'Murals',
  	file: 'img/mural.jpeg'
  }, {
    id: 3,
    name: 'Watercolor',
    file: 'img/watercolor.jpeg'
  }];

  return {
    all: function() {
      return photos;
    },
    remove: function(photos) {
      photos.splice(photos.indexOf(photo), 1);
    },
    get: function(photoId) {
      for (var i = 0; i < photos.length; i++) {
        if (photos[i].id === parseInt(photoId)) {
          return photos[i];
        }
      }
      return null;
    }
  };
});
