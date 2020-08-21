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
    diseño = $("#design"),
    work = $("#work");

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
    yo.removeClass("popOut");
    yo.removeClass("popIn");
    yo.addClass("popOut");
    flecha_1.hide();
    (function ($) {
      function mediaSize() {
        if (window.matchMedia("(max-width: 480px)").matches) {
          flecha_2.hide();
        }
      }
      mediaSize();
      window.addEventListener("resize", mediaSize, false);
    })(jQuery);
    setTimeout(() => {
      yo.hide();
      $("#flecha_2 p").html("About Me");
      diseño.show();
      diseño.removeClass("driveOutLeft");
      diseño.addClass("driveInLeft");
      (function ($) {
        function mediaSize() {
          if (window.matchMedia("(max-width: 480px)").matches) {
            setTimeout(() => {
              flecha_2.show();
            }, 1000);
          }
        }
        mediaSize();
        window.addEventListener("resize", mediaSize, false);
      })(jQuery);
    }, 1000);
  }

  function mostrarYo() {
    (function ($) {
      function mediaSize() {
        if (window.matchMedia("(max-width: 480px)").matches) {
          flecha_1.hide();
          flecha_2.hide();
        }
      }
      mediaSize();
      window.addEventListener("resize", mediaSize, false);
    })(jQuery);
    diseño.addClass("driveOutLeft");
    work.addClass("driveOutRight");
    setTimeout(() => {
      $("#flecha_1 p").html("How i Design?");
      $("#flecha_2 p").html("How i Work?");
      diseño.hide();
      work.hide();
      yo.show();
      yo.removeClass("popOut");
      yo.removeClass("popIn");
      yo.addClass("popIn");
      (function ($) {
        function mediaSize() {
          if (window.matchMedia("(max-width: 480px)").matches) {
            setTimeout(() => {
              flecha_1.show();
              flecha_2.show();
            }, 1000);
          }
        }
        mediaSize();
        window.addEventListener("resize", mediaSize, false);
      })(jQuery);
      (function ($) {
        function mediaSize() {
          if (window.matchMedia("(min-width: 480px)").matches) {
            flecha_1.show();
            flecha_2.show();
          }
        }
        mediaSize();
        window.addEventListener("resize", mediaSize, false);
      })(jQuery);
    }, 1000);
  }

  function mostrarWork() {
    yo.removeClass("popOut");
    yo.removeClass("popIn");
    yo.addClass("popOut");
    flecha_2.hide();
    (function ($) {
      function mediaSize() {
        if (window.matchMedia("(max-width: 480px)").matches) {
          flecha_1.hide();
        }
      }
      mediaSize();
      window.addEventListener("resize", mediaSize, false);
    })(jQuery);
    setTimeout(() => {
      $("#flecha_1 p").html("About Me");
      yo.hide();
      work.show();
      work.removeClass("driveOutRight");
      work.addClass("driveInRight");
      (function ($) {
        function mediaSize() {
          if (window.matchMedia("(max-width: 480px)").matches) {
            setTimeout(() => {
              flecha_1.show();
            }, 1000);
          }
        }
        mediaSize();
        window.addEventListener("resize", mediaSize, false);
      })(jQuery);
    }, 1000);
  }
});
