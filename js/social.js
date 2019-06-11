document.ready(function () {
  $("ul li span").hover(function(){
      $(".social1").text("Linkedin");
      $(".social2").text("Twitter");
    },
    function(){
      $(".social1").text("");
      $(".social2").text("");
    });
});
