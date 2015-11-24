(function() {

    var app = angular.module('Rcorrie.animations', []);

    app.animation('.animate-state-change', function($timeout) {
        return {
            enter: function( element, doneFn ) {
                element.css({display:'none'});
                $timeout( function() {
                    element.css({display:'block'});
                    element.addClass('animated fadeInUp');
                }, 500 )
                $timeout( doneFn, 3000 );
            },
            leave: function( element, doneFn ) {
                element.addClass('animated fadeOutDown');
                $timeout( doneFn, 3000 );
            }
        }
    })

    app.animation('.animate-pop', function() {
        return {

        }
    })

    function animate( animation, element, done ) {
        element.addClass('animated ' + animation);
        setTimeout( done, 3000 );
    }

})();
