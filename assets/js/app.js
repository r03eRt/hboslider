var app = angular.module('StarterApp', ['ngMaterial']);

app.config(function( $mdIconProvider, $mdThemingProvider ){

  $mdIconProvider.defaultIconSet("assets/img/avatars.svg", 128);
  $mdIconProvider.icon("share", "assets/img/share.svg", 24);
  $mdIconProvider.icon("close", "assets/img/close.svg", 24);
  $mdIconProvider.icon("menu", "assets/img/menu.svg", 24);

  $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('red');
});