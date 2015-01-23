/**
 * Created by rui.li on 15-1-14.
 */
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

var lastMenuItem;

$(document).ready(function(){

    screenInfo();
    $.ajax({type:"get",
        url:"http://api.map.baidu.com/telematics/v3/weather?location=雅安&output=json&ak=IkrwzRyiguCgvMEqmDxx8qTX",
        async:"true",
        dataType:"jsonp",
        success:function(data){
            if(data != null){
                var today = data.results[0].weather_data[0];
                $(".weather-img").attr("src",today.dayPictureUrl);
                $(".weather-info").html(today.temperature+"&nbsp;"+today.wind+"&nbsp;"+today.date) ;

                //console.log(today.temperature+today.wind+today.date);
            }
        }});

    $(".header .navigation-2 li a").bind({
        mouseover:function(){

            //console.log(curMenuItem);
            var curMenuItem = $(this).attr("id");
            if(curMenuItem !== "yaan" && curMenuItem !== "lxyj" && curMenuItem !== "yah"){
                $(".header .row-3").css("display","block");
                loadMenuDataById(curMenuItem);
            }

        },
        mouseout:function(){
            $(".header .row-3").css("display","none");
        }
    });

    $("#menu").bind({
        mouseover:function(){
            $(this).css("display","block");},
        mouseout:function(){
            $(this).css("display","none");}
    });
});

function screenInfo(){
    var  s = document.body.clientWidth;
    var p;
    if(s > 1440){
        p  = (s-1012)/2;
        $(".header .row-1").css({"paddingLeft":p,"paddingRight":p});
        $(".header .row-2").css({"paddingLeft":p,"paddingRight":p});
        $(".header .logo").css("left",p);
        $(".header .row-3").css({"paddingLeft":p,"paddingRight":p});
        $(".footer .line-1").css({"paddingLeft":p,"paddingRight":p});
        $(".footer .line-2").css({"paddingLeft":p,"paddingRight":p});
    }
    //console.log(s+","+p);
}

function loadMenuDataById(id){
    if(id !== lastMenuItem){
        console.log("id has change here");
        //fist remove cur menu list
        $(".row-3 .menu-content .menu-list").remove();
        //second request new menu list data and create new list
        var pwya = "{\"results\":[{\"title\":\"探秘雅安\",\"list\":[\"一分钟了解雅安\",\"雅安进化论\",\"气候与资源\",\"雅安的N种解读\",\"\",\"\",\"\",\"\",\"\",\"\"]},{\"title\":\"地方文化\",\"list\":[\"大熊猫的故乡\",\"览地缘文化，赏雅安三绝\",\"禅茶故乡，宁谧圣地\",\"红色雅安抹不去的岁月峥嵘\",\"寻古道遗迹，闻马蹄铃声\",\"一阵风将雅安吹回汉朝\",\"一段被尘封的西康记忆\",\"六大贡品今何在\",\"人杰地灵，生态雅安\",\"非物质文化遗产那些事儿\"]},{\"title\":\"民风民俗\",\"list\":[\"一起来跳锅庄吧\",\"燃烧吧，火把节\",\"探秘尔苏木雅的新年\",\"上里来过年猪节\",\"荥经砂器，土与火的瑰丽绝恋\",\"蜀山奇葩之庐山根雕\",\"\",\"\",\"\",\"\"]},{\"title\":\"历史人物\",\"list\":[\"颛顼\",\"樊敏\",\"吴理真\",\"高颐\",\"何崇政\",\"吴之英\",\"陈邦直\",\"罗日增\",\"\",\"\"]},{\"title\":\"史说雅安\",\"list\":[\"雅安历史沿革\",\"吴理真种茶\",\"王小波攻占雅州\",\"翼王全军覆没\",\"发现大熊猫\",\"化装夺芦山\",\"西康省省会\",\"\",\"\",\"\"]}]}";
        var tyya = "{\"results\":[{\"title\":\"经典景区\",\"list\":[\"上里古镇\",\"碧峰峡景区\",\"红豆相思谷\",\"望鱼古镇\",\"周公山温泉\",\"天河风景区\",\"金凤山公园\",\"蒙顶山景区\",\"百丈湖景区\",\"龙苍沟景区\"]},{\"title\":\"食遍雅安\",\"list\":[\"吃货推荐\",\"名菜馆\",\"美食街\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]},{\"title\":\"娱乐达人\",\"list\":[\"特优推荐\",\"茶楼\",\"酒吧\",\"咖啡馆\",\"疗休养\",\"时尚雅安\",\"美容美发\",\"保健\",\"婴童\",\"休闲运动\",]},{\"title\":\"购最时尚\",\"list\":[\"特优推荐\",\"传统名特产\",\"雅安老字号\",\"名品商厦\",\"\",\"\",\"\",\"\",\"\",\"\"]},{\"title\":\"住在雅安\",\"list\":[\"特优推荐\",\"星级酒店\",\"品牌酒店\",\"经济型酒店\",\"民宿\",\"\",\"\",\"\",\"\",\"\"]},{\"title\":\"代步工具\",\"list\":[\"骑单车\",\"租车行\",\"出租车\",\"搭公交\",\"乘大巴\",\"自驾营地\",\"\",\"\",\"\",\"\"]}]}";
        var hdss = "{\"results\":[{\"title\":\"当月热点\",\"list\":[\"上里年猪节\",\"跷碛上九节\",\"云峰寺庙会\",\"藏族菩萨节\",\"蒙顶山国际茶文化节\",\"芦山七里夺标节\",\"汉源梨花节\",\"\",\"\",\"\"]},{\"title\":\"热点回顾\",\"list\":[\"双溪桃花节\",\"熊猫 动物与自然电影周\",\"栗子坪彝族火把节\",\"尔苏木雅还山鸡节\",\"八月彩楼会\",\"东拉山红叶节\",\"二郎山红叶节\",\"\",\"\",\"\"]},{\"title\":\"活动日历\",\"list\":[\"1月\",\"2月\",\"3月\",\"4月\",\"5月\",\"6月\",\"7月\",\"8月\",\"9月\",\"10月\"]},{\"title\":\"活动日历\",\"list\":[\"11月\",\"12月\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]}]}";
        var cyzs = "{\"results\":[{\"title\":\"旅游工具\",\"list\":[\"手机APP（iPhone版）\",\"手机APP（Android版）\",\"手机网\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]},{\"title\":\"旅游指南\",\"list\":[\"PDF攻略集合\",\"电子杂志集合\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]},{\"title\":\"旅游咨询\",\"list\":[\"在线咨询\",\"咨询中心\",\"网上投诉\",\"常见问题\",\"出游常识\",\"护照办理\",\"维权宝典\",\"\",\"\",\"\"]},{\"title\":\"其他\",\"list\":[\"便民查询\",\"影像雅安（视频下载）\",\"天籁雅安（语音下载）\",\"图说雅安（图片走廊）\",\"\",\"\",\"\",\"\",\"\",\"\"]}]}";
        var xhx = "{\"results\":[{\"title\":\"最潮自驾\",\"list\":[\"蜀中异彩 风情万种\",\"寻找西环线上的蜀山奇葩\",\"追 秋\",\"去朝圣吧\",\"游遍大西环\",\"撒欢小西环\",\"18日潇洒游\",\"8日经典游\",\"\",\"\"]},{\"title\":\"心享骑迹\",\"list\":[\"梦想318\",\"悦骑小西环\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]}]}";
        var localdata;
        if(id === "pwya"){
            localdata = pwya;
        }else if(id === "tyya"){
            localdata = tyya;
        }else if(id === "cyzs"){
            localdata = cyzs;
        }else if(id === "hdss"){
            localdata = hdss;
        }else if(id === "xhx"){
            localdata = xhx;
        }

        var jsonObj = eval("("+localdata+")");
        var r =  jsonObj.results;
        var l= r.length;
        var i, j;
        for(i  = 0;i< l;i++){
            if(jsonObj != null){
                var c = jsonObj.results[i];
                $(".row-3 .menu-content").append("<li><ul class=\'menu-list\'id=\'list_"+i+"\'></ul></li>");
                $("#list_"+i).append("<li><p class=\'name\'>"+c.title+"</p></li>");
                //var n = c.list.length;
                for(j=0;j<10;j++){
                    $("#list_"+i).append("<li><a href=\'"+c.list[j]+"\'>"+c.list[j]+"</a></li>");
                }
            }
        }
    }
    lastMenuItem = id;
}
