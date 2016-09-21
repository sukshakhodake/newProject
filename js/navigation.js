var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

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
      submitForm: function(mydata, callback) {
    $http({
      url: 'http://ting.in/1899/mail.php?name='+mydata.name+'&email='+mydata.email+'&phone='+mydata.phone+'&comment='+mydata.comment+'&subject='+mydata.subject,
      method: 'GET',
      withCredentials: true,
      data: mydata
    }).success(callback);
  }

  };
});
