'use strict';

    const mobileView = module.mobileView;
    const pageView = module.pageView;

    mobileView.init();
    pageView.init();

    $(window).resize(function(){
        mobileView.init();
    });

    // $(window).on('load', pageView.init);
