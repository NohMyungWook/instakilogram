var feed_like = 1;
var comment1 = 1;
var comment2 = 1;

function like(){
    if(feed_like == 1){
        document.getElementById("feed_like").src = "img/like.svg";
        feed_like-=1;
    }
    else{
        document.getElementById("feed_like").src = "img/heart.svg";
        feed_like+=1;
    }
}

function comment1_like(){
    if(comment1 == 1){
        document.getElementById("comment1").src = "img/like.svg";
        comment1-=1;
    }
    else{
        document.getElementById("comment1").src = "img/heart.svg";
        comment1+=1;
    }
}

function comment2_like(){
    if(comment2 == 1){
        document.getElementById("comment2").src = "img/like.svg";
        comment2-=1;
    }
    else{
        document.getElementById("comment2").src = "img/heart.svg";
        comment2+=1;
    }
}

$(document).ready(function func(){
    $("input[class=comment_body]").on("propertychange change keyup paste input", function() {
        if($(".comment_body").val()==""){
            $(".comment_btn").css("color", "rgba(0, 140, 255, 0.3)");
            $(".comment_btn").css("cursor", "Default");
        }
        else{
            $(".comment_btn").css("color", "rgba(0, 140, 255, 1)");
            $(".comment_btn").css("cursor", "pointer");
        }
    });
});
