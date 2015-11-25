(function() {

    'use strict';

    angular.module( 'Rcorrie' )

    .directive( 'rcNav', function( $state ) {

        var backMap = [
            'profile',
            'resources',
            'projects'
        ]
        return {
            restrict: 'AE',
            scope: {
                rcNav: '@'
            },
            link: function( $scope, element ) {
                element.on('click', function() {
                    var state = (backMap[backMap.indexOf($state.current.name) + parseInt($scope.rcNav)]) || (parseInt($scope.rcNav)>0?'profile':'projects');
                    $state.go(state);
                })
            }
        }

    } )

})();
