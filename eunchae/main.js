$(document).ready(function func(){
    $("input[name=id]").on("propertychange change keyup paste input", function() {
        if(($("input[name=ps]").val()!="") & ($("input[name=id]").val()!="")){
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 1)");
            $(".blueBtn").css("cursor", "pointer");
        }
        else{
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 0.3)");
            $(".blueBtn").css("cursor", "default");
        }
    });
    $("input[name=ps]").on("propertychange change keyup paste input", function() {
        if(($("input[name=ps]").val()!="") & ($("input[name=id]").val()!="")){
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 1)");
            $(".blueBtn").css("cursor", "pointer");
        }
        else{
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 0.3)");
            $(".blueBtn").css("cursor", "default");
        }
    });
});