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
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
        $scope.tab = 1;
    })
    .controller('OurStoryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ourstory");
        $scope.menutitle = NavigationService.makeactive("Our Story");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
        $scope.tab = 1;
    })
    .controller('OurTeamCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ourteam");
        $scope.menutitle = NavigationService.makeactive("Our Team");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
    })
    .controller('OurProgrammesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ourprogrammes");
        $scope.menutitle = NavigationService.makeactive("Our Programmes");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.tab = 1;

    })
    .controller('OurTeachersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ourteachers");
        $scope.menutitle = NavigationService.makeactive("Our Teachers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('GalleryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("gallery");
        $scope.menutitle = NavigationService.makeactive("Gallery");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contactus");
        $scope.menutitle = NavigationService.makeactive("Contact Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        setTimeout(function(){
          initMap = function() {
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 4,
              center: {lat: -33, lng: 151},
              disableDefaultUI: true,
              scrollwheel:false
            });
          };
        },100);

    //     initMap = function() {
    //   var tardeo = {
    //     lat: 18.9692098,
    //     lng: 72.81516999
    //   };
    //   // Create a new StyledMapType object, passing it an array of styles,
    //   // and the name to be displayed on the map type control.
    //   var styledMapType = new google.maps.StyledMapType(
    //     [{
    //       stylers: [{
    //           hue: '#b3d2fe'
    //         },
    //         // { hue: '#000' },
    //       ]
    //     }], {
    //       name: 'Styled Map'
    //     });
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 12,
    //     center: tardeo,
    //     disableDefaultUI: true
    //   });
    //
    //   var contentString = '<div id="content">' +
    //     '<div id="siteNotice">' +
    //     '</div>' +
    //     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    //     '<div id="bodyContent">' +
    //     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    //     'sandstone rock formation in the southern part of the ' +
    //     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
    //     'south west of the nearest large town, Alice Springs; 450&#160;km ' +
    //     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
    //     'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
    //     'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
    //     'Aboriginal people of the area. It has many springs, waterholes, ' +
    //     'rock caves and ancient paintings. Uluru is listed as a World ' +
    //     'Heritage Site.</p>' +
    //     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    //     'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    //     '(last visited June 22, 2009).</p>' +
    //     '</div>' +
    //     '</div>';
    //
    //   var infowindow = new google.maps.InfoWindow({
    //     content: contentString,
    //     maxWidth: 200
    //   });
    //
    //   var marker = new google.maps.Marker({
    //     position: tardeo,
    //     map: map,
    //     title: 'Tardeo (Ayers Rock)'
    //   });
    //   marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    //   });
    //   map.mapTypes.set('styled_map', styledMapType);
    //   map.setMapTypeId('styled_map');
    // }

    })
    .controller('ArtAttackCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("artattack");
        $scope.menutitle = NavigationService.makeactive("Art Attack");
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
