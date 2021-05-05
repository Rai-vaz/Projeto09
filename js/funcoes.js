$(function(){
    $("nav a").hover(function(){
        $("nav li").removeClass("selected");
        $(this).parent().addClass("selected");
    });

    $(".fa-bars").click(function(){
        console.log("ok");
        $("nav.mobile ul").slideToggle();
    });
});