angular.module('interceptor.service', [])
    .service('interceptorService', ['serverLocalStorageService', interceptorService]);

function interceptorService(apiLocalStorageService) {
    var setInjector = {
        request: function(config) {
            if (serverLocalStorageService.isSupported()) {
                config.headers['authorization'] = serverLocalStorageService.get('tokenid');
            }
            return config;
        }
    };
    return setInjector;
};