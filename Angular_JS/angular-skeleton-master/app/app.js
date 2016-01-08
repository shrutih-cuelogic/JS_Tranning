'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
    'ngRoute',
    'LocalStorageModule',
    'employee',
    'registration',
    'login',
    'home'
]).
config(['$routeProvider', function($routeProvider) {

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }])
    .config(['localStorageServiceProvider', '$httpProvider',
        function(localStorageServiceProvider, $httpProvider) {
            localStorageServiceProvider
                .setPrefix('authtoken')
                .setStorageType('localStorage')
                .setNotify(true, true);

            $httpProvider.interceptors.push('interceptorService');
        }
    ])
    .run(['$rootScope', '$location', 'serverLocalStorageService', 'loginService',
        function($rootScope, $location, serverLocalStorageService, loginService) {
            $rootScope.$on('$routeChangeStart', function(event, next, current) {
                if (serverLocalStorageService.get('tokenid') == null || serverLocalStorageService.get('tokenid') == undefined) {
                    $location.path('/login');
                } else if (next.originalPath == "/login" && serverLocalStorageService.get('tokenid') != null && serverLocalStorageService.get('tokenid') != undefined) {
                    $location.path('/home');
                }
            })
        }
    ]);
