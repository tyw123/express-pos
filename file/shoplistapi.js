$(document).ready(function(){
    var s=JSON.parse(localStorage.getItem("a"));
    var allItems=[],allsaved=[];
    input_temp=infodeal_1(s);
    item_temp=infodeal_2(input_temp);
    $.ajax("http://localhost:3000/goods").done(function(sa){
        allItems=JSON.parse(sa);
        item=getgoodinfo(item_temp,allItems);
        $.ajax("http://localhost:3000/forsave").done(function(haha){
            allsaved=JSON.parse(haha);
            gift=getsaved(item,allsaved);
            Receipt=calprice(gift,item);
            var compiled = _.template($("#list").text());
            var test=compiled({"Receipt":Receipt});
            $(".row").after(test);
        });
     });
})
