jQuery(function($){

    $.supersized({

        // 功能
        slide_interval     : 1500, 
        transition         : 1,  
        transition_speed   : 2000,
        performance        : 1, 

        // 大小和位置
        min_width          : 0, 
        min_height         : 0,  
        vertical_center    : 1,  
        horizontal_center  : 1,  
        fit_always         : 0,  
        fit_portrait       : 1, 
        fit_landscape      : 0, 

        // 组件
        slide_links        : 'blank',  
        slides             : [    
            { image: 'img/love1.png' },
            { image: 'img/love2.png' },
            { image: 'img/love3.png' },
            { image: 'img/love4.png' }
        ]

    });

});
