# RetainPage
Keep the page's content(e.g. scroll position) between leave and back

reference: https://stackoverflow.com/questions/14107531/retain-scroll-position-on-route-change-in-angularjs

Our boss came up a requirement that the page will keep the previous position after navigation back. Based on above solution, I did some change. Cuz in our website, we have addtional filters, search term and load more to keep to achieve that.

How:
1. Since we need to keep info in per session, I pack them in one service -> gd-retain-page.service.js. 
###### SERIVCE ONLY INITATE ONCE, NO MATTER HOW MANY CONTROLLERs IT HAS BEEN INGECTED, SO THE INFO CAN BE SOTRED PER SESSION. ONLY RELOAD CAN INITIATE SERVICE AGAIN.

2. The reason why we need self.retainService.okSave in scroll listener is that at $locationChangeStart, ScrollPos will set to 0.

When:
1. Only when the before before page is explore, retain page info.  However I don't know how to get before before page. I can only get before page by $routeChangeSuccess parameters.

2. Set a flag needRetain, defualt false, cuz the first time user arrives explore doesn't need any retain.
 Every time $locationChangeStart set needRetain ture. Only when user clicked explore button it will set to false. That means if user use navigation back, the explore page position can keep, even for a back back. 

Process
1. retain-page-service initiate
2. into explore page, if needRetain = flase , init normally. catch scroll position by listener. We user is leaving($locationChangeStart), pass all parameter into retainService and set needRetain to ture.
3. navigation back to explore, if needRetain = true, init parameters in controller by retainService.
4. click explore button in header or footer, set needRetain = false.
