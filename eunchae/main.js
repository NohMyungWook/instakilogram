$(document).ready(function func(){
    // main.html 
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

    //findPw.html
    $("#findPw_id").on("propertychange change keyup paste input", function() {
        if($("#findPw_id").val()!=""){
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 1)");
            $(".blueBtn").css("cursor", "pointer");
        }
        else{
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 0.3)");
            $(".blueBtn").css("cursor", "default");
        }
    });

    //signUp.html
    $("#sign_name").on("propertychange change keyup paste input", function() {
        if(($("#sign_name").val()!="") & ($("#sign_id").val()!="") & ($("#sign_ps").val()!="")){
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 1)");
            $(".blueBtn").css("cursor", "pointer");
        }
        else{
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 0.3)");
            $(".blueBtn").css("cursor", "default");
        }
    });
    $("#sign_id").on("propertychange change keyup paste input", function() {
        if(($("#sign_name").val()!="") & ($("#sign_id").val()!="") & ($("#sign_ps").val()!="")){
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 1)");
            $(".blueBtn").css("cursor", "pointer");
        }
        else{
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 0.3)");
            $(".blueBtn").css("cursor", "default");
        }
    });
    $("#sign_ps").on("propertychange change keyup paste input", function() {
        if(($("#sign_name").val()!="") & ($("#sign_id").val()!="") & ($("#sign_ps").val()!="")){
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 1)");
            $(".blueBtn").css("cursor", "pointer");
        }
        else{
            $(".blueBtn").css("background-color", "rgba(0, 140, 255, 0.3)");
            $(".blueBtn").css("cursor", "default");
        }
    });
});