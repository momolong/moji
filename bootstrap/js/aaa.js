var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})
mui.init();
document.getElementById('main').addEventListener('tap',function(){
    mui.openWindow({
        url:'main.html',
        id:'mian',
        show:{
            autoShow:true,
            aniShow:'slide-in-right',
            duration:500
        },//动画
        createNew:false
    })
})
mui.init({
    preloadPages:[ //加载一个界面
        {
            url:'main.html',
            id:'main',
            styles:{},//窗口参数
            extras:{},//自定义扩展参数
            subpages:[{},{}]//预加载页面的子页面
        }
    ]
});