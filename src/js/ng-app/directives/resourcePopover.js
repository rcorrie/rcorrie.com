(function() {

    'use strict';

    angular.module( 'Rcorrie' )

    .directive( 'rcResourcePopover', function( $compile ) {

        return {
            restrict: 'AE',
            scope: {
                item: '=rcResourcePopover'
            },
            link: function( scope, element ) {
                var popover = angular.element( '<rc-resource-popover-template></rc-resource-popover-template>' )
                element.on('mouseenter', function() {
                    var comp = $compile(popover)(scope);
                    element.append( comp )
                    scope.$apply();
                })
                element.on('mouseleave', function() {
                    popover.remove();
                })
            }
        }

    } )

    .directive( 'rcResourcePopoverTemplate', function() {

        return {
            restrict: 'AE',
            templateUrl: 'resourcePopoverComponent.html'
        }

    } )

})();
