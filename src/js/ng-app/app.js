(function() {

    'use strict';

    var app = angular.module( 'Rcorrie', [
        'Rcorrie.templates',
        'Rcorrie.animations',
        'ngAnimate',
        'ui.router',
        'anim-in-out'
    ] );

    app.run(function() {
        console.log('Rcorrie ready');
    });

    // Router

    app.config( function( $stateProvider, $urlRouterProvider ) {

        $stateProvider

        .state('splash', {
            url: '',
            views: {
                'app': {
                    templateUrl: 'splash.html'
                }
            }
        })

        .state('profile', {
            url: 'profile',
            views: {
                'app': {
                    templateUrl: 'profile.html'
                }
            }
        })

    } )



})();
