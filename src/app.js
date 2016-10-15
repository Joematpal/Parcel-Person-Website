//node_modules
// import 'jquery';
import './css/master.css'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import 'bootstrap/dist/js/bootstrap.js'
import angular from "angular";
import uiRouter from "angular-ui-router"

//Components
import appComponents from "./js/components/appComponents.js"
import userInfo from "./js/components/userComponents.js"

import accordion from "./js/components/accordionComponents.js"
import accordionPanel from "./js/components/accordionPanel.js"

//Component Architecture
import main from './js/componentStructure/start'

angular
  .module('app', [uiRouter])
  // .controller('homeCtrl', ($scope)=>{
  //   $scope.message = "Hello, World";
  // })
  // .directive("bullshit", function(){
  //   return {
  //     scope:{},
  //      bindToController:{
  //
  //     },
  //     controller:{
  //
  //     },
  //     controllerAs:"$ctrl"
  //   }
  // })
  .component('menuBar', appComponents)
  .component('userInfo', userInfo)
  .component('accordion', accordion)
  .component('accordionPanel', accordionPanel)
  .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
      .state('home', {
        url:'/',
        template:
          `
          <h1> Home </h1>
          <a class="btn btn-block btn-social btn-lg btn-google-plus" href="/auth/google">
            <i class="fa fa-google-plus"></i>
            Sign in with Google
          </a>
          `
      })
      .state('welcome', {
        url:'/welcome',
        template:'<h1> Welcome </h1>'
      });
      $urlRouterProvider
        .otherwise('/')
  })
