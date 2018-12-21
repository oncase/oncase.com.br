$(document).ready(function () {

    $(window).on('scroll',function() {
        var top = $(this).scrollTop();
        if(top > 300){
            $(".progresso").css("display", "flex");
        }else{
            $(".progresso").css("display", "none");
        }


    })

    var objQuiz = {
        quest_current: 1,

    };

    $(".radio-check").click(function () {
        var num = parseInt($(this).attr("data-num"));
        var prox_row = (num + 1);

        if(objQuiz.quest_current <= num){
            objQuiz.quest_current = num;
        }

        var perc = (objQuiz.quest_current * 8.333333333);

        $("#row-"+prox_row).slideDown();
        $("html, body").animate({scrollTop: $('#row-'+prox_row).offset().top - 50}, 500);
        $(".progresso").css("width", perc+"%");
    });


});