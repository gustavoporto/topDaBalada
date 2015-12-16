// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }

    Parse.initialize("FjJjuCSuqpSE0htLaRCDm4muSqtofEF1RdOFXoBu", "b4WZmziFpCsbjv1XDv7tbTNwAJ3bPvoy50yABEJh");

    /*
      window.fbAsyncInit = function() {

        Parse.FacebookUtils.init({ // this line replaces FB.init({
          appId      : '919486474809354', // Facebook App ID
          status     : true,  // check Facebook Login status
          cookie     : true, 
          xfbml      : true,  // initialize Facebook social plugins on the page
          version    : 'v2.2' // point to the latest Facebook Graph API version
        });

        // Run code after the Facebook SDK is loaded.
      };
      */

      /*
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk')); 
    */
    
  });   

})

.config(function($stateProvider, $urlRouterProvider) {
 
    $stateProvider
    .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
    })
    .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'LoginCtrl'
    })  
    .state('signin', {
    url: '/signin',
    templateUrl: 'templates/signin.html',
    controller: 'LoginCtrl'
    });

    $urlRouterProvider.otherwise("/");
 
})

.controller('LoginCtrl', function($scope, $state, $cordovaFacebook) {
 
    $scope.data = {};

    $scope.loginFacebook = function(){
 
      $cordovaFacebook.login(["public_profile", "email", "user_about_me"]).then(function(success){
     
        alert('sucesso');
     
      }, function(error){
        alert('erro');
      });
     
    };

    $scope.signupEmail = function() { 

        alert(Parse);

        Parse.FacebookUtils.logIn(null, {
          success: function(user) {
            console.log(user);
            if (!user.existed()) {
              alert("User signed up and logged in through Facebook!");
            } else {
              alert("User logged in through Facebook!");
            }
          },
          error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
          }
        });

        


       /* var query = new Parse.Query("Balada");

        query.equalTo("nome", "P12");

        query.find().then(function(results){


            var Festa = Parse.Object.extend("Festa");
            var festa = new Festa();

            var date = new Date();

            festa.set("dataInicio", date);
            festa.set("dataFim", date);
            festa.set("atracoes", "Gustavo Porto");
            festa.set("descricao", "Balada");
            festa.set("linkFesta", "http://www.globo.com/");
            festa.set("idBalada", results[0]);

            festa.save(null, {
              success: function(festa) {
                // Execute any logic that should take place after the object is saved.
                alert('New object created with objectId: ' + festa.id);
              },
              error: function(festa, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
              }
            });

            /*
            alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
              var object = results[i];
              alert(object.id + ' - ' + object.get('nome'));
            }
            */

      /*  }, function(error) {
            alert("Error: " + error.code + " " + error.message);

        });*/

        /*
        //Create a new user on Parse
        var user = new Parse.User();
        user.set("username", $scope.data.username);
        user.set("password", $scope.data.password);
        user.set("email", $scope.data.email);

        // other fields can be set just like with Parse.Object
        user.set("somethingelse", "like this!");

        user.signUp(null, {
            success: function(user) {
              // Hooray! Let them use the app now.
              alert("success!");
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
            }
        });
        */

    };

    $scope.loginEmail = function(){

        alert(Parse);

        Parse.User.logIn($scope.data.username, $scope.data.password, {
            success: function(user) {
              // Do stuff after successful login.
              console.log(user);
              alert("success!");
            },
            error: function(user, error) {
              // The login failed. Check error to see why.
              alert("error!");
            }
        });

    };
 
});
