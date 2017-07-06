 /* catch scroll postion in the page */
  $(window).on('scroll', function() {
      if(self.retainService.okSave){
          self.scrollPos = $(window).scrollTop();
          retainPageService.setPos(self.scrollPos);
      }  
  });

 /* When the user click out of the page, clear the search term that was stored in navbarSearchService. */
$scope.$on('$locationChangeStart', function() {
    self.navbarSearchService.setTerm('');
    self.retainService.setFilterParas(self.itemSortby, self.itemInterest, self.dealStatus);
    self.retainService.setIndex(self.itemIndex);
    self.retainService.setNeedRetain(true);
    self.retainService.setOkSave(false);
    self.retainService.setSearchTerm(self.searchTerm);
    self.retainService.setSearchOption(self.searchOptions);
});

 $scope.$on('ngRepeatFinished', function() {
     if(self.retainService.needRetain){
         $(window).scrollTop(self.retainService.position ? self.retainService.position : 0);
         self.retainService.setOkSave(true);
     }    
 });

function init() {
    getInterestArea();
    if(self.retainService.needRetain){
        self.itemInterest = self.retainService.filterParas.itemInterest;
        self.dealStatus = self.retainService.filterParas.dealStatus;
        self.itemSortby = self.retainService.filterParas.itemSortby;
        self.itemIndex = self.retainService.index;
        if(self.retainService.searchTerm){
            self.searchTerm = self.retainService.searchTerm;
            self.searchOptions = self.retainService.searchOption;
            self.searchTypes = self.searchOptions.toUpperCase();
            getSearchItems(self.searchTerm, self.searchTypes, self.itemInterest, self.dealStatus, self.itemSortby, 0, self.itemIndex);
        } else {
            getDealPreviewBox(self.itemInterest, self.dealStatus, self.itemSortby, 0, self.itemIndex);
        }

    }else if(self.navbarSearchService.searchTerm === ''){
        self.endIndex = self.itemIndex + self.totalItemsPerPage;
        getDealPreviewBox(self.itemInterest, self.dealStatus, self.itemSortby, self.itemIndex, self.endIndex);
        self.itemIndex = self.itemIndex + self.totalItemsPerPage;
    }        
    setTitleAndMeta();
    self.isMobile = isMobileService.isMobile();
}



