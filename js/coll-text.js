/**
 * Created by Administrator on 2016/11/5.
 */
$(function () {
    $.ajax({
        url:"json/coll-text.json",
        dataType:"json",
        type:"get",
        success: function (data) {
            var data1=eval(data);
            var html = template('coll-text', data1);
            $("#accordion").html(html);
        },error:function(e){
            console.log("出错")
        }
    })
})
