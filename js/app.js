var initMap = {};
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
  .state('ourapproach', {
      url: "/ourapproach",
      templateUrl: "views/template.html",
      controller: 'OurApproachCtrl'
  })
  .state('aboutus', {
      url: "/aboutus",
      templateUrl: "views/template.html",
      controller: 'AboutUsCtrl'
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
      url: "/gallery/:id",
      templateUrl: "views/template.html",
      controller: 'GalleryCtrl'
  })
  .state('galleryinner', {
    url: "/galleryinner",
    templateUrl: "views/template.html",
      controller: 'GalleryInnerCtrl'
  })
  // .state('artattack', {
  //     url: "/artattack",
  //     templateUrl: "views/template.html",
  //     controller: 'ArtAttackCtrl'
  // })
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

firstapp.filter('serverimage', function() {
  return function(image) {
    if (image && image !== null) {

      return adminurl + "upload/readFile?file=" + image;
    } else {
      return undefined;
    }
  }
});
firstapp.filter('youtubethumb', function() {
    return function(input, onlyid) {
        if (input) {
            var videoid = input.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            if (videoid != null) {
                if (onlyid == false) {
                    return "http://img.youtube.com/vi/" + videoid[1] + "/hqdefault.jpg";
                } else if (onlyid == true) {
                    return videoid[1];
                }
            } else {
                return input;
            }
        } else {
            return input;
        }
    };
});
firstapp.directive('onlyDigits', function() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attr, ctrl) {
            var digits;

            function inputValue(val) {
                if (val) {
                    if (attr.type == "tel") {
                        digits = val.replace(/[^0-9\+\\]/g, '');
                    } else {
                        digits = val.replace(/[^0-9\-\\]/g, '');
                    }


                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    console.log(digits);
                    console.log(parseInt(digits,10));
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
})
