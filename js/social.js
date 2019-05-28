document.ready(function () {
  $("ul li a:nth-child(1)").hover(function(){
      $(".social").text("Linkedin");
    },
    function(){
      $(".social").text("");
    });
  $("ul li a:nth-child(2)").hover(function(){
      $(".social").text("Twitter");
    },
    function(){
      $(".social").text("");
    });

})
