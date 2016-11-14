var adminurl = "http://104.155.129.33:91/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  // var navigation = [{
  //   name: "Home",
  //   classis: "active",
  //   anchor: "home",
  //   subnav: [{
  //     name: "Subnav1",
  //     classis: "active",
  //     anchor: "home"
  //   }]
  //   name: "Our Story",
  //   classics: "active",
  //   anchor: "ourstory"
  // }];

  var navigation = [{
    name: "Our Story",
    classis: "active",
    link: "ourstory",
    fullno: 2,
    subnav: []
  },{
    name: "Our Team",
    classis: "active",
    link: "ourteam",
    fullno: 3,
    subnav: []
  },{
    name: "Our Programmes",
    classis: "active",
    link: "ourprogrammes",
    fullno: 4,
    subnav: []
  },{
    name: "Environment",
    classis: "active",
    link: "environment",
    fullno: 5,
    subnav: []
  },{
    name: "Gallery",
    classis: "active",
    link: "gallery",
    fullno: 6,
    subnav: []
  },{
    name: "Contact Us",
    classis: "active",
    link: "contact",
    fullno: 7,
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
  //   submitForm: function(mydata, callback) {
  //   $http({
  //     url: 'http://www.weaverspreschool.com/mail.php?name='+mydata.name+'&email='+mydata.email+'&mobile='+mydata.mobile+'&message='+mydata.message+'&subject='+mydata.subject,
  //     method: 'GET',
  //     withCredentials: true,
  //     data: mydata
  //   }).success(callback);
  // },
  submitContact: function(mydata, callback) {
    console.log(mydata);
    $http({
      url: adminurl + 'Contact/saveContact',
      method: 'POST',
      withCredentials: true,
      data: mydata
    }).success(callback);
},
  getAboutUs: function(callback) {
      $http({
        url: adminurl + 'AboutUs/search',
        method: 'POST',
        withCredentials: true
      }).success(callback);
    },
    getOurTeam: function(callback) {
        $http({
          url: adminurl + 'Team/search',
          method: 'POST',
          withCredentials: true
        }).success(callback);
      },
      getOurProgrammes:function(callback) {
          $http({
            url: adminurl + 'Program/search',
            method: 'POST',
            withCredentials: true
          }).success(callback);
        },
        getOurApproach:function(callback) {
            $http({
              url: adminurl + 'Approach/search',
              method: 'POST',
              withCredentials: true
            }).success(callback);
          },
        getGallery:function(callback) {
            $http({
              url: adminurl + 'Gallery/getAllImages',
              method: 'POST',
              withCredentials: true
            }).success(callback);
          },


  };
});
