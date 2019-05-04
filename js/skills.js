// Text appears when hovering over the links of languages,
// and disappear when the mouse is out of the link

$(document).ready(function(){
    // Text for HTML5
    $("ol li:nth-child(1)").hover(function(){
            $("#level").text("HTML5")
                .css("fontSize","30px").css("display","inline").css('position','relative')
                .css('textAlign','left')
        },
        function(){
            $("#level").text("");
        });

    //Text for CSS3
    $("ol li:nth-child(2)").hover(function(){
            $("#level").text("CSS3");
        },
        function(){
            $("#level").text("");
        });

    //Text for JavaScript
    $("ol li:nth-child(3)").hover(function(){
            $("#level").text("JAVASCRIPT");
        },
        function(){
            $("#level").text("");
        });

    //Text for Github
    $("ol li:nth-child(4)").hover(function(){
            $("#level").text("PYTHON");
        },
        function(){
            $("#level").text("");
        });

    //Text for Linux
    $("ol li:nth-child(5)").hover(function(){
            $("#level").text("MONGO DB");
        },
        function(){
            $("#level").text("");
        });

    //Text for Python
    $("ol li:nth-child(6)").hover(function(){
            $("#level").text("NODE JS");
        },
        function(){
            $("#level").text("");
        });
});
