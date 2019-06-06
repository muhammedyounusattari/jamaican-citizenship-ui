//v0.2
//$(document).ready(function(){$(".question_description li h5").click(function(e){e.preventDefault(),$(this).parent().toggleClass("ask")});var e=(new Date).getFullYear();document.getElementById("thisYear").innerHTML=e,$(".actionBlock li img, a.help_links").click(function(e){var t=$(this).attr("alt");if($("#innerPage").empty(),"action_start"==t)var i="https://passport.pica-online.com/jm-online/#EligibilityQuestions";else if("action_resume"==t)i="https://passport.pica-online.com/jm-online/#Login/Search";else if("action_status"==t)i="https://passport.pica-online.com/jm-online/#CheckStatus";else if("photo_check"==t)i="https://passport.pica-online.com/jm-online/#PhotoChecker";else if("fee_calc"==t)i="https://passport.pica-online.com/jm-online/#FeeCalculator";var n=$('<iframe src="'+i+'" scrolling="no" width="100%" frameborder="0" />').insertAfter("#iframe-info");n.load(function(){var e=n.contents().find("body").first();e.resize(function(){var e=$(this);n.css({height:e.outerHeight(!0)}),n.contents().find("body").attr("style","height:auto;")}),e.resize()})})});

//v0.3
$(document).ready(function() {
    $(".question_description li h5").click(function(e) {
        e.preventDefault(), $(this).parent().toggleClass("ask")
    });
    var e = (new Date).getFullYear();
    document.getElementById("thisYear").innerHTML = e, $(".actionBlock li img, a.help_links").click(function(e) {
        var t = $(this).attr("alt");
        if ($("#innerPage").empty(), $(".nav-main-menu").remove(), $(".footer_2_right.right > ul").remove(), "action_start" == t) var i = "https://passport.pica-online.com/jm-online/#EligibilityQuestions";
        else if ("action_resume" == t) i = "https://passport.pica-online.com/jm-online/#Login/Search";
        else if ("action_status" == t) i = "https://passport.pica-online.com/jm-online/#CheckStatus";
        else if ("photo_check" == t) i = "https://passport.pica-online.com/jm-online/#PhotoChecker";
        else if ("fee_calc" == t) i = "https://passport.pica-online.com/jm-online/#FeeCalculator";
        var n = $('<iframe src="' + i + '" scrolling="no" width="100%" frameborder="0" />').insertAfter("#iframe-info");
        n.load(function() {
            var e = n.contents().find("body").first();
            e.resize(function() {
                var e = $(this);
                n.css({
                    height: e.outerHeight(!0)
                }), n.contents().find("body").attr("style", "height:auto;")
            }), e.resize()
        })
    })
});