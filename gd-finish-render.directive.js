/**
 * This directive is developed to listen the event that ng-repeat is fully loaded.
 */
(function () {
	'use strict';

	angular
		.module('app')
		.directive('onFinishRender', onFinishRender);

	function onFinishRender($timeout) {
		var directive = {
			restrict: 'EA', //Element directive
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onFinishRender);
                    });
                }
            }	
		};
		return directive;
	}
})();
