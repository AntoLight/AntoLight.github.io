import { CountUp } from "./countUp.min.js";
$(document).ready(function () {
  //Barra Hero Desktop Follow
  var barra_hero = $("#barra_hero");
  (function ($) {
    function mediaSize() {
      if (window.matchMedia("(min-width: 480px)").matches) {
        var windowsAltura = $(window).height() - 825;
        var barraAltura = barra_hero.innerHeight();
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll > windowsAltura) {
            barra_hero.addClass("activo-barra");
            $("body").css({ "padding-top": `61px` });
          } else {
            barra_hero.removeClass("activo-barra");
            $("body").css({ "padding-top": "0px" });
          }
        });
      } else {
      }
    }

    mediaSize();

    window.addEventListener("resize", mediaSize, false);
  })(jQuery);

  //Barra Nav Celular
  (function ($) {
    function mediaSize() {
      if (window.matchMedia("(max-width: 480px)").matches) {
        $("#menu").show();

        $(".links").hide();
        $("#nav_mobile").append($("#contact"));
        barra_hero.children().addClass("movile-menu");

        $("#menu").click(function () {
          $(".links").slideToggle();
        });
      }
    }

    mediaSize();

    window.addEventListener("resize", mediaSize, false);
  })(jQuery);

  /*
  ----Lenguajes Interactividad----
  */
});
