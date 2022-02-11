// menu mobile 
$(document).ready(function() {
    $(".header-mobile li").on("click", function(e) {
        e.stopPropagation();
        var element = $(this);
        if (element.hasClass("open")) {
            element.removeClass("open");
            element.find("li").removeClass("open");
            element.find("ul").slideUp(400, "swing");
        } else {
            element.addClass("open");
            element.children("ul").slideDown(400, "swing");
            element.siblings("li").children("ul").slideUp(400, "swing");
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
            element.siblings("li").find("ul").slideUp(400, "swing");
        }
    })
});