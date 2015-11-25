(function() {

    'use strict';

    angular.module('Rcorrie')
    .directive( 'bgColor', function() {

        var DEFAULT_COLOR = '#1185CC'; //blue
        var bgColorStateMap = {
            splash: DEFAULT_COLOR,
            profile: '#549600', //green
            resources: '#C17F01', //orange
            projects: '#7E3DC3' //purple
        };

        return {
            restrict: 'AE',
            link: function( scope, element, attr ) {
                scope.$on('$stateChangeSuccess', function( e, toState ) {
                    element.css({backgroundColor: (bgColorStateMap[toState.name] || DEFAULT_COLOR) });
                })
            }
        }

    } )

})();
