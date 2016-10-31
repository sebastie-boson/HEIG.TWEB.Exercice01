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
