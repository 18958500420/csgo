$(function(){

  $('.news_list ul').eq(0).find('.hot').eq(0).addClass('red');
  $('.news_list ul').eq(0).find('.hot').eq(1).addClass('red');

  eventScroll();
  function flashChecker() {
    var hasFlash = 0; //是否安装了flash
    var flashVersion = 0; //flash版本
    if (document.all) {
      var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      if (swf) {
        hasFlash = 1;
        VSwf = swf.GetVariable("$version");
        flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
      }
    } else {
      if (navigator.plugins && navigator.plugins.length > 0) {
        var swf = navigator.plugins["Shockwave Flash"];
        if (swf) {
          hasFlash = 1;
          var words = swf.description.split(" ");
          for (var i = 0; i < words.length; ++i) {
            if (isNaN(parseInt(words[i]))) continue;
            flashVersion = parseInt(words[i]);
          }
        }
      }
    }
    return { f: hasFlash, v: flashVersion };
  }
  var fls = flashChecker();
  var s = "";
  if (fls.f) {
    addSWF('http://www.csgo.com.cn/web201703/images/main/bg.swf','item1', 1920, 1300);
  }else{
    $('.bg_swf').hide();
  }

  function myBrowser(){
      var userAgent = navigator.userAgent
      var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;
      if (isChrome) {
        var str="";
        str+='<video id="video" width="282" height="160" autoplay loop src="http://media.dl.wanmei.com/media/media/csgo5cg.mp4"></video>'
        str+='<span style="display: block; width: 100%; height: 100%; background: url(http://www.csgo.com.cn/web201704/img/cover/play170411.png) no-repeat center center; position: absolute; left: 0; top: 0; z-index: 2;cursor: pointer;"></span>'
          $("#video_preview").html(str);
      }else{
          addPreviewVideo('video_preview',282,160,{ 
        source: 'http://media.dl.wanmei.com/media/media/csgo5cg.flv',
        eventHandler:'pwrdVideoCallback_Fuck',
        wmode:'opaque'
     })
      }
  };
  myBrowser()

  //顶部视频
  // addPreviewVideo('video_preview',282,160,{ 
  //   source: 'http://media.dl.wanmei.com/media/media/csgo5cg.flv',
  //   eventHandler:'pwrdVideoCallback_Fuck',
  //   wmode:'opaque'
  // })
  function playerClickHandler(){
    $.simpleDialog({
     skin:false,
     content: '.pop_video',
     id : 'pop_video'
       }); 
    addVideo('video_main', 800, 500, { 
      source:'http://media.dl.wanmei.com/media/media/csgo_800_002.flv',
     autoPlay:true});
  }
  $('.section01 div').click(function(){
    $.simpleDialog({
     skin:false,
     content: '.pop_video',
     id : 'pop_video'
       }); 
    addVideo('video_main', 800, 500, { 
      source:'http://media.dl.wanmei.com/media/media/csgo_800_002.flv',
     autoPlay:true});

  });
  $('.closeBtn').click(function () {
    $('.boxy_layer').hide();
    $('.boxy-modal-blackout').hide();
  });

	//背景
	$('.lb_s2').skitter({
		dots: false,
		auto_play: true,
    interval: 4000,
		enable_navigation_keys: false,
		navigation: false,
    numbers: true,
		hideTools: false,
    animateNumberActive: {backgroundColor:'#5e72a5', color:'#2d3344'},
    animateNumberOver: {backgroundColor:'#5e72a5', color:'#2d3344'}
	});
  $('.lunbo_s02').on('mouseover',function(){
    $(this).find('a').attr('target','_blank');
  });
  $('.lunbo_s02 .box_skitter .info_slide').css({
    'width': ($('.info_slide').find('span').length * 62) + 'px',
    'margin-left': -($('.info_slide').find('span').length * 62 / 2) + 'px',
    'left': '50%'
  });
  //地图、武器、玩法模式切换
  $('.detail_list').css({
    'width':($('.detail_list a').length*19)+'px',
    'margin-left': -(($('.detail_list a').length*19)/2)+'px'
  })
  $('.detail_list a').hover(function(){
    if($(this).hasClass('on')){return} 
    $(this).addClass('on').siblings().removeClass('on');
    $('.s03_cen ul li').removeClass('on').eq($(this).index()).addClass('on');
  })

  $('.s05_lb01').slide({
    effect: 'left',
    mainCell:".bxslider1",
    pnLoop: true
  });

  //媒体合作滚动条
  $('.media_list ul').css({'width':(307*$('.media_list ul li').length)+2})
  $(".media_list").easyScroll({
    scrollOffset: 0,
    scrollHorizontal : true,
    scrollAutoHide : false,
    scrollOffset : 0,
    scrollMinHeight : 20,
    scrollStep : 120,
    scrollButtons : false
  });

  //新闻
  $('.news_tab li').on('click',function(){
    if($(this).hasClass('on')){ return }
    $(this).addClass('on').siblings().removeClass('on');
    $(this).closest('.section').find('.tit_more').attr({'href':$(this).data('url')})
    $('.s03_left .news_list ul').removeClass('on').eq($(this).index()).addClass('on');
  })
  $('.s6Nav1 li').on('click',function(){
    if($(this).hasClass('on')){ return }
    $(this).addClass('on').siblings().removeClass('on');
    $('.s06_cont01 .news_list ul').removeClass('on').eq($(this).index()).addClass('on');
  })

  // $('.section04').slide({
  //   effect: 'left',
  //   mainCell:".mediaList",
  //   vis: 4,
  //   autoPlay: true,
  //   autoPage: true,
  //   pnLoop: true
  // });

  //视频集锦
  $('.s6Nav2 li').on('click',function(){
    if($(this).hasClass('on')){ return }
    $(this).addClass('on').siblings().removeClass('on');
    $('.s06list').animate({'left': -(362 * $(this).index()) + 'px'});
  })

  //玩家工坊
  $('.s07_img .s07_imgBox').eq(0).addClass('style0'+$('.s07_imgBox').eq(0).find('a').length);
  $('.s07_tab span').on('click',function(){
    if($(this).hasClass('on')){ return }
    $(this).addClass('on').siblings().removeClass('on');
    $('.s07_img .s07_imgBox').removeClass('on').eq($(this).index()).addClass('on');
  })

  //media
  var instanceOne = new ImageFlow();
  instanceOne.init({ ImageFlowID: 'starsIF',
      captions: false,
      slider: false,
      startID: Number($("#S_Num").val()) + 1
  });

  //event
  $.ajax({    
    url: 'http://data.csgo.com.cn/csgoMatch/matchResult/',
    data: { 
      limit: 6,
      offset: 0
    },
    dataType: 'jsonp',
    success: function(data){ 
        if(data.code === 1){  
          render('events','list-tmpl',{list:data.result.rows})
          $('.event_list').slide({
            effect: 'top',
            mainCell:".events",
            vis: 2,
            autoPage: true,
            pnLoop: true
          });
        }
    }
  })
  var render = function(containerId,templateId,data){  
    document.getElementById(containerId).innerHTML = template(templateId, data);
  }
  function ChangeDateFormat(d){
    //将时间戳转为int类型，构造Date类型
    var date = new Date(parseInt(d.time,10));

    //月份得+1，且只有个位数时在前面+0
    var month = date.getMonth() + 1 < 10 ?"0" + (date.getMonth() + 1) : date.getMonth() + 1;

    //日期为个位数时在前面+0
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

    //getFullYear得到4位数的年份 ，返回一串字符串
    return date.getFullYear()+"-" +month +"-" +currentDate;
  }

  //日期格式
  template.helper('dateFormat', function (date, format) {

    date = new Date(date);

    var map = {
        "M": date.getMonth() + 1, //月份 
        "d": date.getDate(), //日 
        "h": date.getHours(), //小时 
        "m": date.getMinutes(), //分 
        "s": date.getSeconds(), //秒 
        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
  });

  //slideBox
  $('.silderSmall').on('click',function(){
    $(this).hide().css('right','-27px');
    $('.silderBig').animate({right:0},300);
  })
  $('.silderBig a').on('click',function(){
    $('.silderBig').animate({right:'-158px'},300,function(){
      $('.silderSmall').show().animate({right:0},300);
    });
  })
  $('.silderBox .top').on('click',function(){
    $('html,body').animate({scrollTop:0},500);  
  })

})

function eventScroll(){
  var ws = $(this).scrollTop();
  reSection(ws);
  $(window).on('scroll',function(){
    ws = $(this).scrollTop();
    reSection(ws);
  })
}
function reSection(num){
  var wH = $(window).height();
  var s3 = $('.section03').offset().top - wH - 50;
  var s4 = $('.section04').offset().top - wH - 50;
  var s5 = $('.section05').offset().top - wH - 50;
  var s6 = $('.section06').offset().top - wH - 50;
  var s7 = $('.section07').offset().top - wH - 50;
  var ss = $('.section_media').offset().top - wH - 50;
  var s8 = $('.section08').offset().top - wH - 50;
  if(num > s3){
    $('.section03').addClass('on');
  }
  if(num > s4){
    $('.section04').addClass('on');
  }
  if(num > s5){
    $('.section05').addClass('on');
  }
  if(num > s6){
    $('.section06').addClass('on');
  }
  if(num > s7){
    $('.section07').addClass('on');
  }
  if(num > ss){
    $('.section_media').addClass('on');
  }
  if(num > s8){
    $('.section08').addClass('on');
  }
}