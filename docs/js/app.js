"use strict";var App=App||{};!function(){function t(){this.$leagleForm=$(".l-form"),this.$leagleTxt=$(".l-text__area"),this.init()}function i(){this.$p1=$(".p1"),this.$p2=$(".p2"),this.$p3=$(".p3"),this.$pro=$(".prologue"),this.$link=$(".topLink"),this.init()}function s(){this.init()}function e(){this.init()}function o(){this.init()}t.prototype.init=function(){this.changePage()},t.prototype.changePage=function(){var t=this;t.$leagleForm.submit(function(){switch(t.val=t.$leagleTxt.val(),console.log(t.val),t.val){case"yoshinari takashi":case"Yoshinari Takashi":case"YOSHINARI TAKASHI":case"yoshinaritakashi":case"YoshinariTakashi":case"YOSHINARITAKASHI":case"takashi yoshinari":case"Takashi Yoshinari":case"TAKASHI YOSHINARI":case"takashiyoshinari":case"TakashiYoshinari":case"TAKASHIYOSHINARI":case"吉成敬":case"よしなりたかし":case"ヨシナリタカシ":case"吉成 敬":case"よしなり たかし":case"ヨシナリ タカシ":case"吉成　敬":case"よしなり　たかし":case"ヨシナリ　タカシ":location.href="/myprofile/top.html";break;case"":break;default:window.location.href="https://www.google.co.jp/#q="+t.val}return!1})},i.prototype.init=function(){this.prologue()},i.prototype.prologue=function(){var t=this;this.$pro.contents().each(function(){3==this.nodeType&&$(this).replaceWith($(this).text().replace(/(\S)/g,"<span>$1</span>"))}),setTimeout(function(){t.$p1.css({opacity:1});for(var i=0;i<=t.$p1.children().size()-1;i++)t.$p1.children("span:eq("+i+")").delay(100*i).fadeIn(300)},2e3),setTimeout(function(){t.$p2.css({opacity:1});for(var i=0;i<=t.$p2.children().size()-1;i++)t.$p2.children("span:eq("+i+")").delay(100*i).fadeIn(300)},4500);var i=function(){t.$pro.fadeOut(1e3)},s=function(i){t.$p3.css({display:"block"}).animate({opacity:1},1500),i()},e=function(){setInterval(function(){t.$p3.animate({marginTop:"-3px"},700,"swing").animate({marginTop:"3px"},700,"swing")},800)};setTimeout(function(){i(),s(e)},8e3)},s.prototype.init=function(){this.$hdrWrapper=$(".hdrWrapper"),this.$contWrapper=$(".d-cont__innerWrap"),this.$list=$(".d-cont__list li"),this.$listImg=$(".d-cont__list li").find("img"),this.$listHover=$("d-contList__hover"),this.$width=$(window).width(),this.$height=$(window).height(),this.$listHeight=this.$height/3,this.$listWidth=this.$width/3,this.setSize(),this.hoverAction()},s.prototype.setSize=function(){var t=this;this.$hdrWrapper.css("height",t.$height+"px"),this.$list.css("height",t.$listHeight+"px"),$(window).on("resize",function(){t.$height=$(window).height(),t.$listHeight=this.$height/3,t.$hdrWrapper.css("height",t.$height+"px"),t.$list.css("height",t.$listHeight+"px")}),$(window).on("load",function(){t.$hdrWrapper.fadeIn(700);for(var i=0;i<t.$list.length;i++)t.$list.delay(100).fadeIn(),t.$list.eq(i).animate({opacity:1,top:0},1e3)})},s.prototype.hoverAction=function(){var t=this;this.$list.on("mouseenter",function(){var i=t.$list.index(this);t.$list.eq(i).find("img").css("-webkit-filter","grayscale(0)"),7==i&&t.$list.eq(7).find("img").attr("src",t.$list.eq(7).find("img").attr("src").replace("_off","_on")),t.$list.eq(i).find("div").children(".d-hoverTtl__en").stop().fadeOut(600),t.$list.eq(i).find("div").children(".d-hoverTtl__ja").stop().fadeIn(600)}).on("mouseleave",function(){var i=t.$list.index(this);t.$list.eq(i).find("img").css("-webkit-filter","grayscale(100%)"),7==i&&t.$list.eq(7).find("img").attr("src",t.$list.eq(7).find("img").attr("src").replace("_on","_off")),t.$list.eq(i).find("div").children(".d-hoverTtl__en").stop().fadeIn(600),t.$list.eq(i).find("div").children(".d-hoverTtl__ja").stop().fadeOut(600)})},e.prototype.init=function(){this.$width=$(window).width(),this.$height=$(window).height(),this.$ul=$(".d-contMore__slideList"),this.$list=$(".d-contMore__slideList").find("li"),this.$listHeight=this.$list.height(),this.$listlength=this.$list.length,this.$listWholeH=this.$list.length*this.$listHeight,this.$slideBtn=$(".d-contMore__slideBtn"),this.$up=this.$slideBtn.find(".up"),this.$down=this.$slideBtn.find(".down"),this.$downHeight=this.$down.height(),this.$listHover=$("d-contList__hover"),console.log(),this.setPos(),this.hoverSlide(),this.picSlide(),this.matchSlide(),this.ajaxEach()},e.prototype.setPos=function(){var t=this;this.$down.css({top:this.$height-this.$downHeight+"px"}),$(window).on("resize",function(){this.$height=$(window).height(),this.$listHeight=t.$list.height(),this.$slideBtn=$(".d-contMore__slideBtn"),this.$down=this.$slideBtn.find(".down"),this.$downHeight=this.$down.height(),this.$down.css({top:this.$height-this.$downHeight+"px"})})},e.prototype.hoverSlide=function(){var t=this;this.$list.on("mouseover",function(){var i=t.$list.index(this);t.$list.eq(i).find("img").css("-webkit-filter","grayscale(0)"),t.$list.eq(i).find("div").children(".d-hoverTtl__en").stop().fadeOut(600),t.$list.eq(i).find("div").children(".d-hoverTtl__ja").stop().fadeIn(600)}).on("mouseout",function(){var i=t.$list.index(this);t.$list.eq(i).find("img").css("-webkit-filter","grayscale(100%)"),t.$list.eq(i).find("div").children(".d-hoverTtl__en").stop().fadeIn(600),t.$list.eq(i).find("div").children(".d-hoverTtl__ja").stop().fadeOut(600)})},e.prototype.picSlide=function(){var t=this;this.$up.on("click",function(){var i=t.$list.offset().top-$(window).scrollTop();0>i&&(Math.abs(i)>t.$listHeight?t.$ul.stop().animate({top:"+="+t.$listHeight+"px"}):t.$ul.stop().animate({top:"+="+Math.abs(i)+"px"}))}),this.$down.on("click",function(){var i=t.$ul.offset().top-$(window).scrollTop(),s=Math.abs(i)+t.$height,e=t.$listWholeH-s;s<t.$listWholeH&&(e>t.$listHeight?t.$ul.stop().animate({top:"-="+t.$listHeight+"px"}):t.$ul.stop().animate({top:"-="+e+"px"}))})},e.prototype.matchSlide=function(){for(var t,i=this,s=window.location.href,e=0;e<i.$listlength;e++){var o=this.$list.eq(e).find("a").attr("href");s.match(o)&&(t=e,this.$list.eq(e).find("img").css({cssText:"-webkit-filter: grayscale(0);"}))}this.$list.eq(t).on("mouseout",function(){i.$list.eq(t).find("img").css("-webkit-filter","grayscale(0)")})},e.prototype.ajaxEach=function(){var t=this,i=window.location.hash,s=["#background","#oversea","#skill","#sports","#game","#tv-movie","#book","#mygirl","#future"],e=window.location.href.split("/");e[e.length-1];this.$moreList=$(".d-contMore__list");for(var o=0;o<s.length;o++)if(i==s[o]){var n=o;$.ajax({url:"../json/data.json",dataType:"json",data:{name:"contents"}}).done(function(i){var s=i.contents;$("title").text(s[n].title),t.$moreList.prepend(s[n].body)}).fail(function(t){console.log(n)})}window.onhashchange=function(){for(var i,e=window.location.hash,o=0;o<s.length;o++)e==s[o]&&(i=o,$.ajax({url:"../json/data.json",dataType:"json",data:{name:"contents"}}).done(function(s){var e=s.contents;$("title").text(e[i].title),t.$moreList.empty().animate({scrollTop:0}).prepend(e[i].body),t.$list.find("img").css({cssText:"-webkit-filter: grayscale(100%);"}),t.$list.eq(i).find("img").css({cssText:"-webkit-filter: grayscale(0);"})}).fail(function(t){console.log(i)}));t.$list.on("mouseout",function(){t.$list.find("img").css("-webkit-filter","grayscale(100%)"),t.$list.eq(i).find("img").css("-webkit-filter","grayscale(0)")}),t.$list.eq(i).on("mouseout",function(){t.$list.eq(i).find("img").css("-webkit-filter","grayscale(0)")})}},o.prototype.init=function(){this.$width=$(window).width(),this.$height=$(window).height(),this.$gWrap=$(".g-cont__wrapper"),this.$gImgs=this.$gWrap.find("img"),this.$gOverLay=$(".g-overlay"),this.$gLayImg=$(".g-overlay__img"),this.$modalBtn=$(".g-overlay__btn"),this.$modalClose=$(".g-modal-close"),this.$modalImg=$(".modal-img"),this.sortPic(),this.modalPic()},o.prototype.sortPic=function(){for(var t=this,i=[],s=0;48>s;s++){var e=s+1;t.$gImgs.eq(s).each(function(){i.push(e)})}var o=(i.sort(function(){return Math.random()-Math.random()}),0);this.$gImgs.each(function(){console.log(o),t.$gImgs.eq(o).attr({src:"../img/gallery/photo"+i[o]+".jpg"}),o++}),$(window).on("load",function(){t.$gImgs.animate({opacity:1},1e3)})},o.prototype.modalPic=function(){var t,i,s,e=this;e.$gImgs.on("click",function(){s=$(window).scrollTop(),t=e.$gImgs.index(this),i=e.$gImgs.eq(t).attr("src"),console.log(i),e.$gWrap.css({position:"fixed",top:-1*s}),e.$gOverLay.css({width:"100%",height:e.$height}).fadeIn(1e3),e.$gLayImg.append('<img class="modal-img" src="'+i+'">')}),$(window).on("resize",function(){var t=$(window).height();e.$gOverLay.css({width:"100%",height:t})}),e.$modalClose.on("click",function(){function t(){e.$gLayImg.empty()}e.$gWrap.css({position:"initial"}),$("html, body").prop({scrollTop:s}),e.$gOverLay.fadeOut(700,t)}),e.$modalBtn.find("img").on("click",function(){var s=e.$modalBtn.find("img").index(this),o=e.$modalBtn.find("img").eq(s).attr("class");"g-next"===o&&47!==t?(t+=1,i=e.$gImgs.eq(t).attr("src"),e.$gLayImg.empty().append('<img class="modal-img" src="'+i+'">')):"g-prev"===o&&0!==t?(t-=1,i=e.$gImgs.eq(t).attr("src"),e.$gLayImg.empty().append('<img class="modal-img" src="'+i+'">')):"g-next"===o&&47===t?(t=0,i=e.$gImgs.eq(t).attr("src"),e.$gLayImg.empty().append('<img class="modal-img" src="'+i+'">')):"g-prev"===o&&0===t&&(t=47,i=e.$gImgs.eq(t).attr("src"),e.$gLayImg.empty().append('<img class="modal-img" src="'+i+'">'))})},App.Leagle=t,App.Top=i,App.list=s,App.Detail=e,App.Gallery=o}(),$(function(){var t=window.location.href,i=t.split("/");"detail.html"===i[4]&&(location.href="#background"),!i[4]||t.match("index.html")?(console.log("This is leagle"),new App.Leagle):t.match("top.html")?(console.log("This is top"),new App.Top):t.match("gallery.html")?(console.log("This is gallery"),new App.Gallery,new App.list,new App.Detail):(console.log("This is contents"),new App.list,new App.Detail)});