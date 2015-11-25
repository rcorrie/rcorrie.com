(function() {

    'use strict';

    angular.module( 'Rcorrie' )

    .directive( 'rcGoBack', function( $state ) {

        //TODO make this actually work
        //var prevState;

        return {
            restrict: 'AE',
            link: function( $scope, element ) {
                //$scope.$on('$stateChangeSuccess', function( e, toS, toP, fromS ) {
                    //prevState = (prevState == fromS.name ? 'splash' : fromS.name);
                //})
                element.on('click', function() {
                    $state.go('splash');
                })
            }
        }

    } )

})();
