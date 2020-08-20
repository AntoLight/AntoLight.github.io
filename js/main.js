import { CountUp } from "./countUp.min.js";
$(document).ready(function () {
  /*
  ----Barra Hero Desktop Follow----
  */

  //Variables
  var barra_hero = $("#barra_hero");

  //Funciones
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

  /*
  ----Barra Nav Celular----
  */

  //Funciones
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
  ----Main Interactividad----
  */

  //Variables
  var flecha_1 = $("#flecha_1"),
    flecha_2 = $("#flecha_2"),
    puntos = 0,
    main = $("main"),
    yo = $("#yo"),
    diseño = $("#design");

  //Eventos
  flecha_1.click(function () {
    puntos -= 1;
    mostrarEleMain();
  });
  flecha_2.click(function () {
    puntos += 1;
    mostrarEleMain();
  });

  //Funciones
  function mostrarEleMain() {
    if (puntos == -1) {
      mostrarDesign();
    }
    if (puntos == 0) {
      mostrarYo();
    }
    if (puntos == 1) {
      mostrarWork();
    }
  }

  function mostrarDesign() {
    yo.addClass("popOutRight");
    flecha_1.hide();
    setTimeout(() => {
      yo.hide();
      diseño.show();
      diseño.removeClass("popOutLeft");
      diseño.addClass("popInLeft");
    }, 1500);
  }
  function mostrarYo() {
    diseño.addClass("popOutLeft");
    setTimeout(() => {
      diseño.hide();
      yo.show();
      yo.removeClass("popOutRight");
      yo.addClass("popInRight");
      flecha_1.show();
    }, 1500);
  }
});
