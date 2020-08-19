import { CountUp } from "./countUp.min.js";
$(document).ready(function () {
  //Barra Hero Desktop Follow
  (function ($) {
    function mediaSize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        var barra_hero = $("#barra_hero");
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

  /*
  ----Lenguajes Interactividad----
  */
});
