$(document).ready(function(){
    var item=[];
    $("button").on("click",function(){
    if($(this).data("barcode")!=undefined){
        var temp="";
         temp+=$(this).data("barcode");
        var num=$(this).closest(".col-md-2").find(".quantity").val()
        temp+="-"+num;
        item.push(temp);
        var itemp=JSON.stringify(item)
        localStorage.setItem("a",itemp);

        $.ajax({url:"http://localhost:3000/itemp",type:"post",data:{"itemp":itemp}});debugger
        }
    });
    })