/**
 * This service is creadted to maitain scroll position
 */
(function () {
    'use strict';

	angular
		.module('app')
		.service('retainPageService', retainPageService);

	retainPageService.$inject = [];

	function retainPageService () {
		this.position = "";
		this.okSave = true;
		this.searchTerm = '';
		this.searchOption = 'Title';
		this.index = 0;
		this.filterParas = {};
		this.needRetain = false;

        this.setPos = function(pos) {
            this.position = pos;
        }

		this.setOkSave = function(flag) {
			this.okSave = flag;
		}

		this.setSearchTerm = function(term) {
			this.searchTerm = term;
		}

		this.setSearchOption = function(type) {
			this.searchOption = type;
		}

		this.setIndex = function(index) {
			this.index = index;
		}

		this.setNeedRetain = function(flag) {
			this.needRetain = flag;
		}
		
		this.setFilterParas = function(sort, interest, status) {
			this.filterParas.itemSortby = sort;
			this.filterParas.itemInterest = interest;
			this.filterParas.dealStatus = status;
		}
    }
})();
