var initMap = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.galleryImage = [{
        image: "img/gallery/slide-1.png",

    }, {
        image: "img/gallery/slide-2.png",

    }, {
        image: "img/gallery/slide-3.png",

    }, {
        image: "img/gallery/slide-4.png",

    }, {
        image: "img/gallery/slide-5.png",

    }, {
        image: "img/gallery/slide-6.png",

    }, {
        image: "img/gallery/slide-1.png",

    }, {
        image: "img/gallery/slide-2.png",

    }, {
        image: "img/gallery/slide-3.png",

    }, {
        image: "img/gallery/slide-4.png",

    }, {
        image: "img/gallery/slide-5.png",

    }, {
        image: "img/gallery/slide-6.png",

    }];

    $scope.galleryImage = _.chunk($scope.galleryImage, 6);
    for (var i = 0; i < $scope.galleryImage.length; i++) {
        $scope.galleryImage[i] = _.chunk($scope.galleryImage[i], 3);
    };

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
    $scope.changeFullPage = function (no) {
        console.log(no);
        $.fn.fullpage.moveTo(no);
    };
    $scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
            $('.fullpage').fullpage();
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
    if (typeof $.fn.fullpage.destroy == 'function') {
        $.fn.fullpage.destroy('all');
    }
})

.controller('OurApproachCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ourapproach");
        $scope.menutitle = NavigationService.makeactive("OurApproach");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
        $scope.tab = 1;

        NavigationService.getOurApproach(function (data) {
            console.log(data);
            $scope.OurApproach = data.data.results;
            console.log($scope.OurApproach);
        });
    })
    .controller('AboutUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("aboutus");
        $scope.menutitle = NavigationService.makeactive("About Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
        $scope.tab = 1;

        NavigationService.getAboutUs(function (data) {
            console.log(data);
            $scope.AboutUs = data.data.results;
            console.log($scope.AboutUs);
        });


    })
    .controller('OurTeamCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ourteam");
        $scope.menutitle = NavigationService.makeactive("Our Team");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }

        NavigationService.getOurTeam(function (data) {
            console.log(data);
            $scope.ourTeam = data.data.results;
            console.log($scope.ourTeam);
        });
    })
    .controller('OurProgrammesCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ourprogrammes");
        $scope.menutitle = NavigationService.makeactive("Our Programmes");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.tab = 1;
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }

        NavigationService.getOurProgrammes(function (data) {
            console.log(data);
            $scope.OurProgrammes = data.data.results;
            console.log($scope.OurProgrammes);
        });

    })
    .controller('OurTeachersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("ourteachers");
        $scope.menutitle = NavigationService.makeactive("Our Teachers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
    })
    .controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("gallery");
        $scope.menutitle = NavigationService.makeactive("Gallery");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
    })
    .controller('ContactUsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contactus");
        $scope.menutitle = NavigationService.makeactive("Contact Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
        initMap = function () {
            var myLatLng = {
                lat: 19.183042,
                lng: 72.949746
            };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: myLatLng,
                disableDefaultUI: true,
                scrollwheel: false
            });
            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Weavers Pre-school</h1>' +
                '<div id="bodyContent">' +
                '<p><b>WEAVERS</b>,</p>' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }
            var image = 'img/contact/mapmarker.png';
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image,
                title: 'Weavers',
                animation: google.maps.Animation.DROP,
                optimized: false
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
            // var marker = new google.maps.Marker({
            //   position: myLatLng,
            //   map: map,
            // });
        };

        setTimeout(function () {
            initMap();
        }, 100);

        $scope.formData = {};
        $scope.flags = {};
        $scope.submitForm = function () {
            //$scope.flags.thankyou = false;
            //console.log("ffff", $scope.formData);
            $scope.formData.subject = "Contact Us form details";
            NavigationService.submitForm($scope.formData, function (res) {
                if (res.value) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: "views/modal/thankyou.html",
                        scope: $scope,
                        windowClass: "width80"
                    });
                    $scope.formData = {};
                } else {

                }
            });

            NavigationService.submitContact($scope.formData, function (res) {
                if (res.value) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: "views/modal/thankyou.html",
                        scope: $scope,
                        windowClass: "width80"
                    });
                    $scope.formData = {};
                } else {

                }
            });
        };
    })
    .controller('ArtAttackCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("artattack");
        $scope.menutitle = NavigationService.makeactive("Art Attack");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        if (typeof $.fn.fullpage.destroy == 'function') {
            $.fn.fullpage.destroy('all');
        }
    })

.controller('headerctrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.isopen = false;
    // $scope.formSlide = function() {
    //     $scope.isopen = !$scope.isopen;
    // };
    $scope.formClass = "form-in";
    $scope.formSlide = function () {
        if ($scope.formClass == "form-in") {
            $scope.formClass = "form-out";
        } else {
            $scope.formClass = "form-in";
        }
    }

    $scope.formData = {};
    $scope.flags = {};
    $scope.submitForm = function () {
        //$scope.flags.thankyou = false;
        //console.log("ffff", $scope.formData);
        $scope.formData.subject = "Contact Us form details";
        NavigationService.submitForm($scope.formData, function (res) {
            if (res.value) {
                $uibModal.open({
                    animation: true,
                    templateUrl: "views/modal/thankyou.html",
                    scope: $scope,
                    windowClass: "width80"
                });
                $scope.formData = {};
            } else {

            }
        });

        NavigationService.submitContact($scope.formData, function (res) {
            console.log('$scope.formData');
            if (res.value) {
                $uibModal.open({
                    animation: true,
                    templateUrl: "views/modal/thankyou.html",
                    scope: $scope,
                    windowClass: "width80"
                });
                $scope.formData = {};
            } else {

            }
        });
    };
})

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
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
    };


})


;