// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })
  .state('environment', {
      url: "/environment",
      templateUrl: "views/template.html",
      controller: 'EnvironmentCtrl'
  })
  .state('ourstory', {
      url: "/ourstory",
      templateUrl: "views/template.html",
      controller: 'OurStoryCtrl'
  })
  .state('ourteam', {
      url: "/ourteam",
      templateUrl: "views/template.html",
      controller: 'OurTeamCtrl'
  })
  .state('ourteachers', {
      url: "/ourteachers",
      templateUrl: "views/template.html",
      controller: 'OurTeachersCtrl'
  })
  .state('gallery', {
      url: "/gallery",
      templateUrl: "views/template.html",
      controller: 'GalleryCtrl'
  })
  .state('artattack', {
      url: "/artattack",
      templateUrl: "views/template.html",
      controller: 'ArtAttackCtrl'
  })
  .state('contactus', {
      url: "/contactus",
      templateUrl: "views/template.html",
      controller: 'ContactUsCtrl'
  })
  .state('ourprogrammes', {
      url: "/ourprogrammes",
      templateUrl: "views/template.html",
      controller: 'OurProgrammesCtrl'
  });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.directive('autoHeightfixed', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height() - 20;
            var addHeight = function() {
                $element.css("height", windowHeight);
            };
            addHeight();
        }
    };
});

firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
