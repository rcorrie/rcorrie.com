(function() {

    'use strict';

    angular.module('Rcorrie')
    .directive( 'bgColor', function() {

        var DEFAULT_COLOR = '#2A3A50';
        var bgColorStateMap = {
            splash: DEFAULT_COLOR,
            profile: '#2A6F4C',
            projects: '#352A50'
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
