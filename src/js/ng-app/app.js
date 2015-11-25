(function() {

    'use strict';

    var app = angular.module( 'Rcorrie', [
        'Rcorrie.templates',
        'Rcorrie.animations',
        'rc.tidyImg',
        'ngAnimate',
        'ui.router',
        'anim-in-out'
    ] );

    app.run(function() {
        console.log('Rcorrie ready');
    });

    // Router

    app.config( function( $stateProvider, $urlRouterProvider ) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('splash', {
            url: '/',
            views: {
                'app': {
                    templateUrl: 'splash.html'
                }
            }
        })

        .state('profile', {
            url: '/profile',
            views: {
                'app': {
                    templateUrl: 'profile.html'
                }
            }
        })

        .state('resources', {
            url: '/resources',
            views: {
                'app': {
                    templateUrl: 'resources.html',
                    controller: 'ResourcesViewCtrl'
                }
            }
        })

        .state('projects', {
            url: '/recent',
            views: {
                'app': {
                    templateUrl: 'recent.html'
                }
            }
        })

    } )



})();
