$(document).ready(function(){
    var allItems=[],allsaved=[],s;//,s;
  //  var s=JSON.parse(localStorage.getItem("a"));
    $.ajax("http://localhost:3000/input").done(function(sss){
        s=JSON.parse(sss);debugger
        input_temp=infodeal_1(s);
        item_temp=infodeal_2(input_temp);
        $.ajax("http://localhost:3000/goods").done(function(sa){
            allItems=JSON.parse(sa);debugger
   //         allItems=sa;
           // console.log(allItems);
            item=getgoodinfo(item_temp,allItems);
           // console.log(item);
            $.ajax("http://localhost:3000/forsave").done(function(haha){
//                console.log(haha);
                allsaved=haha;debugger
  //              allsaved=JSON.parse(haha);debugger
//                console.log(allsaved);
                gift=getsaved(item,allsaved);//console.log(gift);
                Receipt=calprice(gift,item);
                var compiled = _.template($("#list").text());debugger
                var test=compiled({"Receipt":Receipt});debugger
                $(".row").after(test);debugger
            });
         });
    });
})

//
//
//$(document).ready(function(){
//    var s=JSON.parse(localStorage.getItem("a"));
//    var allItems=[],allsaved=[];
//    input_temp=infodeal_1(s);
//    item_temp=infodeal_2(input_temp);
//    $.ajax("http://localhost:3000/goods").done(function(sa){
//        allItems=JSON.parse(sa);
//        item=getgoodinfo(item_temp,allItems);
//        $.ajax("http://localhost:3000/forsave").done(function(haha){
//            allsaved=JSON.parse(haha);
//            gift=getsaved(item,allsaved);
//            Receipt=calprice(gift,item);
//            var compiled = _.template($("#list").text());
//            var test=compiled({"Receipt":Receipt});
//            $(".row").after(test);
//        });
//     });
//})
