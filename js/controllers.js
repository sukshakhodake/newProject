angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.gallery = [{
        image: "img/sec5/lunchfun.png",
        name: "Lunch Funday"
    }, {
        image: "img/sec5/artattack.png",
        name: "Art Attack"
    }, {
        image: "img/sec5/playday.png",
        name: "Play Day"
    }, {
        image: "img/sec5/lego.png",
        name: "Lego Lessons"
    }, {
        image: "img/sec5/lego.png",
        name: "Lego Lessons"
    }, {
        image: "img/sec5/lego.png",
        name: "Lego Lessons"
    }];
    $scope.section = {
        one: "views/section/section1.html",
        two: "views/section/section2.html",
        three: "views/section/section3.html",
        four: "views/section/section4.html",
        five: "views/section/section5.html",
        six: "views/section/section6.html"
    };
    $scope.changeFullPage = function(no) {
        console.log(no);
        $.fn.fullpage.moveTo(no);
    };
    $scope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            $('.fullpage').fullpage();
            // $('#scene').parallax();
            console.log($stateParams.name);
            $scope.homeval = $stateParams.name;
            switch ($scope.homeval) {
                case "contact":
                    $.fn.fullpage.moveTo(7);
                    break;
                case "gallery":
                    $.fn.fullpage.moveTo(6);
                    break;
                case "environment":
                    $.fn.fullpage.moveTo(5);
                    break;
                case "ourprogrammes":
                    $.fn.fullpage.moveTo(4);
                    break;
                case "ourteam":
                    $.fn.fullpage.moveTo(3);
                    break;
                case "ourstory":
                    $.fn.fullpage.moveTo(2);
                    break;
                case "home":
                    $.fn.fullpage.moveTo(1);
                    break;
                default:
                    $.fn.fullpage.moveTo(1);
                    break;
            }
        }, 1000);
    });


    // $scope.mySlides = [
    //   'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //   'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //   'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //   'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    // ];
})

.controller('EnvironmentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("environment");
        $scope.menutitle = NavigationService.makeactive("Environment");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
