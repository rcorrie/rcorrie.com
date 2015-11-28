(function() {

    'use strict';

    angular.module( 'Rcorrie' )

    .controller( 'ResourcesViewCtrl', function( $scope ) {

        $scope.filter = '';

        $scope.getLevelTicks = function( n ) {
            return new Array(n); 
        };

        $scope.heatMap = [
            '#9899A0',
            '#8C92C1',
            '#C343E8',
            '#43A8E8',
            '#43E8BE',
            '#87E843',
            '#FFE658',
            '#FFC758',
            '#FF9158',
            '#FF5858'
        ];

        $scope.model = [

            {
                category: 'basics',
                items: [
                    {
                        name: 'javascript',
                        level: 10,
                        years: 6,
                        keywords: 'js, languages'
                    },
                    {
                        name: 'ruby',
                        level: 4,
                        years: '~1',
                        keywords: 'rb, languages'
                    },
                    {
                        name: 'php',
                        level: 7,
                        years: 3,
                        keywords: 'languages, lamp'
                    },
                    {
                        name: 'bash',
                        level: 7,
                        years: 3,
                        keywords: 'shell, languages'
                    },
                    {
                        name: 'c++',
                        level: 1,
                        years: '<1',
                        keywords: 'cpp, languages'
                    },
                    {
                        name: 'html',
                        level: 10,
                        years: 10,
                        keywords: 'markup'
                    },
                    {
                        name: 'css',
                        level: 10,
                        years: 10,
                        keywords: 'stylesheets'
                    },
                    {
                        name: 'sql',
                        level: 8,
                        years: 3,
                        keywords: 'database, languages, data'
                    },
                    {
                        name: 'osx',
                        level: 9,
                        years: 4,
                        keywords: 'apple, mac, systems'
                    }
                ]
            },

            {
                category: 'frameworks + dsl\'s',
                items: [
                    {
                        name: 'angularjs',
                        level: 10,
                        years: 2,
                        keywords: 'javascript, framework, mvc'
                    },
                    {
                        name: 'react',
                        level: 8,
                        years: 1.5,
                        keywords: 'javascript, js, framework'
                    },
                    {
                        name: 'ruby on rails',
                        level: 5,
                        years: '~1',
                        keywords: 'ruby, rb, framework, mvc'
                    },
                    {
                        name: 'cordova',
                        level: 9,
                        years: 2,
                        keywords: 'phonegap, native, ios, android, app, hybrid'
                    },
                    {
                        name: 'wordpress',
                        level: 8,
                        years: 3,
                        keywords: 'cms, blog, php'
                    },
                    {
                        name: 'haml',
                        level: 8,
                        years: '~1',
                        keywords: 'html'
                    },
                    {
                        name: 'sass',
                        level: 9,
                        years: 2,
                        keywords: 'css, scss, stylesheets'
                    },
                    {
                        name: 'mysql',
                        level: 7,
                        years: 3,
                        keywords: 'sql, lamp, database, data'
                    },
                    {
                        name: 'postgres',
                        level: 2,
                        years: '<1',
                        keywords: 'sql, database, data'
                    },
                    {
                        name: 'redis',
                        level: 2,
                        years: '<1',
                        keywords: 'nosql, data, dsl'
                    },
                    {
                        name: 'firebase',
                        level: 4,
                        years: 1,
                        keywords: 'nosql, data, google, dsl'
                    },
                    {
                        name: 'bootstrap',
                        level: 5,
                        years: '<1',
                        keywords: 'css, framework, html, ui'
                    }
                ]
            },

            {
                category: 'tooling + misc',
                items: [
                    {
                        name: 'git',
                        level: 10,
                        years: 2,
                        keywords: 'source control, repository, versioning'
                    },
                    {
                        name: 'browserify',
                        level: 7,
                        years: 1,
                        keywords: 'dependency management'
                    },
                    {
                        name: 'gulp',
                        level: 7,
                        years: '<1',
                        keywords: 'task manager'
                    },
                    {
                        name: 'grunt',
                        level: 10,
                        years: 2,
                        keywords: 'task manager'
                    },
                    {
                        name: 'karma',
                        level: 7,
                        years: 1,
                        keywords: 'unit testing, test runner'
                    },
                    {
                        name: 'vim',
                        level: 9,
                        years: 5,
                        keywords: 'text editor'
                    },
                    {
                        name: 'scrum',
                        level: 8,
                        years: 2,
                        keywords: 'process, product, agile'
                    }
                ]
            }

        ];

    } );

})();
