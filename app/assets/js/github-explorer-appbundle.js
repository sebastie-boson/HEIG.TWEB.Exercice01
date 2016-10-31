/*!
* github-explorer - v0.0.1 - MIT LICENSE 2016-10-30. 
* @author Sébastien Boson
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('github-explorer', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		 'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'page1',
		'page2',
		'page3',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('github-explorer')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/page1');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

(function () {
    'use strict';

    /**
	 * @ngdoc function
	 * @name app.module:page1Module
	 * @description
	 * # page1Module
	 * Module of the app
	 */

    angular.module('page1', []);

})();

(function () {
    'use strict';

    /**
	 * @ngdoc function
	 * @name app.module:page2Module
	 * @description
	 * # page2Module
	 * Module of the app
	 */

    angular.module('page2', ['chart.js']);

})();

(function () {
    'use strict';

    /**
	 * @ngdoc function
	 * @name app.module:page3Module
	 * @description
	 * # page3Module
	 * Module of the app
	 */

    angular.module('page3', []);

})();

'use strict';

/**
 * @ngdoc function
 * @name app.route:page1Route
 * @description
 * # page1Route
 * Route of the app
 */

angular.module('page1')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('page1', {
				url:'/page1',
				templateUrl: 'app/modules/page1/page1.html',
				controller: 'Page1Ctrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:page2Route
 * @description
 * # page2Route
 * Route of the app
 */

angular.module('page2')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('page2', {
				url:'/page2',
				templateUrl: 'app/modules/page2/page2.html',
				controller: 'Page2Ctrl',
				controllerAs: 'vm'
			});

		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:page3Route
 * @description
 * # page3Route
 * Route of the app
 */

angular.module('page3')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('page3', {
				url:'/page3',
				templateUrl: 'app/modules/page3/page3.html',
				controller: 'Page3Ctrl',
				controllerAs: 'vm'
			});

		
	}]);

(function () {
    'use strict';

    /**
	* @ngdoc function
	* @name app.controller:page1Ctrl
	* @description
	* # page1Ctrl
	* Controller of the app
	*/

    angular
		.module('page1')
		.controller('Page1Ctrl', Page1);

    Page1.$inject = [];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function Page1() {
        /*jshint validthis: true */
        var vm = this;

        vm.title = "Welcome to GitHub Explorer!";
		
    }

})();

(function () {
    'use strict';

    /**
	* @ngdoc function
	* @name app.controller:page2Ctrl
	* @description
	* # page2Ctrl
	* Controller of the app
	*/

    angular
		.module('page2')
		.controller('Page2Ctrl', Page2);

    Page2.$inject = ['Page2Service'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function Page2(Page2Service) {
        /*jshint validthis: true */
        var vm = this;
        vm.labels = Page2Service.getLabels();
        vm.data = Page2Service.getData();

    }

})();

(function () {
    'use strict';

    /**
	* @ngdoc function
	* @name app.controller:page3Ctrl
	* @description
	* # page3Ctrl
	* Controller of the app
	*/

    angular
		.module('page3')
		.controller('Page3Ctrl', Page3);

    Page3.$inject = [];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function Page3() {
        /*jshint validthis: true */
        var vm = this;

    }

})();

(function () {
    'use strict';

    /**
	 * @ngdoc function
	 * @name app.service:page1Service
	 * @description
	 * # page1Service
	 * Service of the app
	 */

    angular
		.module('page1')
		.factory('Page1Service', Page1);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    Page1.$inject = ['$http'];

    function Page1($http) {

    }

})();

(function () {
    'use strict';

    /**
	 * @ngdoc function
	 * @name app.service:page2Service
	 * @description
	 * # page2Service
	 * Service of the app
	 */

    angular
		.module('page2')
		.factory('Page2Service', Page2);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    Page2.$inject = ['$http'];

    function Page2($http) {

        var labels = ["Bad", "Not bad", "Good", "Very good"];

        var data = [100, 200, 300, 400];

        return {
            getLabels: getLabels,
            getData: getData
        };

        function getLabels() {
            return labels;
        }

        function getData() {
            return data;
        }

    }

})();

(function () {
    'use strict';

    /**
	 * @ngdoc function
	 * @name app.service:page3Service
	 * @description
	 * # page3Service
	 * Service of the app
	 */

    angular
		.module('page3')
		.factory('Page3Service', Page3);
    // Inject your dependencies as .$inject = ['$http', 'someSevide'];
    // function Name ($http, someSevide) {...}

    Page3.$inject = ['$http'];

    function Page3($http) {

    }

})();
