  function transitionEnd() {
    var app = angular.module('app', ['ui.bootstrap']);
app.constant('_', window._);
app.controller('ExampleController', [function() {
  var image = 'http://lorempixel.com/800/600/city/';
  this.interval = 5000;
  this.slides = [
    {
      image: image+'1',
      text: 'slide 1 text'
    },
    {
      image: image+'2',
      text: 'slide 2 text'
    },
    {
      image: image+'3',
      text: 'slide 3 text'
    },
    {
      image: image+'4',
      text: 'slide 4 text'
    },
    {
      image: image+'5',
      text: 'slide 5 text'
    }
  ];
}]);
    
  }


