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

  //Mostrar Parte Diseño
  function mostrarDesign() {
    yo.removeClass("popOut");
    yo.removeClass("popIn");
    yo.addClass("popOut");
    flecha_1.fadeTo(100, 0.8);
    flecha_1.fadeTo(100, 0.4);
    flecha_1.fadeTo(100, 0);
    (function ($) {
      function mediaSize() {
        if (window.matchMedia("(max-width: 480px)").matches) {
          flecha_2.fadeTo(100, 0.8);
          flecha_2.fadeTo(100, 0.4);
          flecha_2.fadeTo(100, 0);
          setTimeout(() => {
            flecha_2.hide();
          }, 1000);
        }
      }
      mediaSize();
      window.addEventListener("resize", mediaSize, false);
    })(jQuery);
    setTimeout(() => {
      yo.hide();
      diseño.show();
      diseño.removeClass("driveOutLeft");
      diseño.addClass("driveInLeft");
      flecha_1.hide();
      (function ($) {
        function mediaSize() {
          if (window.matchMedia("(max-width: 480px)").matches) {
            setTimeout(() => {
              flecha_2.fadeTo(100, 0);
              flecha_2.fadeTo(100, 0.5);
              flecha_2.fadeTo(100, 1);
              flecha_2.show();
            }, 1000);
          }
        }
        mediaSize();
        window.addEventListener("resize", mediaSize, false);
      })(jQuery);
    }, 1000);
  }

  //Mostrar Parte Yo
  function mostrarYo() {
    (function ($) {
      function mediaSize() {
        if (window.matchMedia("(max-width: 480px)").matches) {
          flecha_1.fadeTo(100, 0.8);
          flecha_1.fadeTo(100, 0.4);
          flecha_1.fadeTo(100, 0);
          flecha_2.fadeTo(100, 0.8);
          flecha_2.fadeTo(100, 0.4);
          flecha_2.fadeTo(100, 0);
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
              flecha_1.fadeTo(100, 0);
              flecha_1.fadeTo(100, 0.5);
              flecha_1.fadeTo(100, 1);
              flecha_2.fadeTo(100, 0);
              flecha_2.fadeTo(100, 0.5);
              flecha_2.fadeTo(100, 1);
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
            flecha_1.fadeTo(100, 0);
            flecha_1.fadeTo(100, 0.5);
            flecha_1.fadeTo(100, 1);
            flecha_2.fadeTo(100, 0);
            flecha_2.fadeTo(100, 0.5);
            flecha_2.fadeTo(100, 1);
            flecha_1.show();
            flecha_2.show();
          }
        }
        mediaSize();
        window.addEventListener("resize", mediaSize, false);
      })(jQuery);
    }, 1000);
  }

  //Mostrar Parte Trabajo
  function mostrarWork() {
    yo.removeClass("popOut");
    yo.removeClass("popIn");
    yo.addClass("popOut");
    flecha_2.fadeTo(100, 0.8);
    flecha_2.fadeTo(100, 0.4);
    flecha_2.fadeTo(100, 0);
    (function ($) {
      function mediaSize() {
        if (window.matchMedia("(max-width: 480px)").matches) {
          flecha_1.fadeTo(100, 0.8);
          flecha_1.fadeTo(100, 0.4);
          flecha_1.fadeTo(100, 0);
          setTimeout(() => {
            flecha_1.hide();
          }, 1000);
        }
      }
      mediaSize();
      window.addEventListener("resize", mediaSize, false);
    })(jQuery);
    setTimeout(() => {
      yo.hide();
      work.show();
      work.removeClass("driveOutRight");
      work.addClass("driveInRight");
      flecha_2.hide();
      (function ($) {
        function mediaSize() {
          if (window.matchMedia("(max-width: 480px)").matches) {
            setTimeout(() => {
              flecha_1.fadeTo(100, 0);
              flecha_1.fadeTo(100, 0.5);
              flecha_1.fadeTo(100, 1);
              flecha_1.show();
            }, 1000);
          }
        }
        mediaSize();
        window.addEventListener("resize", mediaSize, false);
      })(jQuery);
    }, 1000);
  }

  /*
  ----Lenguajes Programacion----
  */

  //Variables
  var b_1 = $(".b-1"),
    b_2 = $(".b-2"),
    b_3 = $(".b-3"),
    b_4 = $(".b-4"),
    b_5 = $(".b-5"),
    b_6 = $(".b-6"),
    fc_1 = $(".fc-1"),
    fc_2 = $(".fc-2"),
    fc_3 = $(".fc-3"),
    fc_4 = $(".fc-4"),
    fc_5 = $(".fc-5"),
    fc_6 = $(".fc-6"),
    fb_1 = $(".fb-1"),
    fb_2 = $(".fb-2"),
    fb_3 = $(".fb-3"),
    fb_4 = $(".fb-4"),
    fb_5 = $(".fb-5"),
    fb_6 = $(".fb-6"),
    p_1 = $(".p-1"),
    p_2 = $(".p-2"),
    p_3 = $(".p-3"),
    p_4 = $(".p-4"),
    p_5 = $(".p-5"),
    p_6 = $(".p-6");

  //Funciones

  //Funcion Progreso Barra e iconos
  function progressBar() {
    progressIconosH(b_1, fb_1, fc_1, p_1);
    setTimeout(() => {
      progressIconosW(b_4, fb_4, fc_4, p_4);
      setTimeout(() => {
        progressIconosH(b_5, fb_5, fc_5, p_5);
        setTimeout(() => {
          progressIconosW(b_2, fb_2, fc_2, p_2);
          setTimeout(() => {
            progressIconosH(b_3, fb_3, fc_3, p_3);
            setTimeout(() => {
              progressIconosH(b_6, fb_6, fc_6, p_6);
            }, 2500);
          }, 2500);
        }, 2500);
      }, 2500);
    }, 2500);
  }

  //Funcion Barra Height
  function progressIconosH(barra, ban, check, texto) {
    //Barra
    barra.animate(
      {
        height: "100px",
      },
      3000
    );
    //Ban
    ban.fadeTo(100, 1);
    ban.fadeTo(100, 0.5);
    ban.fadeTo(100, 0);
    //Check
    setTimeout(() => {
      ban.css({
        display: "none",
      });
      check.css({
        display: "block",
      });
      check.fadeTo(100, 0);
      check.fadeTo(100, 0.5);
      check.fadeTo(100, 1);
      //Texto
      setTimeout(() => {
        check.fadeTo(100, 1);
        check.fadeTo(100, 0.5);
        check.fadeTo(100, 0);
        setTimeout(() => {
          check.css({
            display: "none",
          });
          texto.css({
            display: "none",
          });
          texto.fadeTo(100, 0);
          texto.fadeTo(100, 0.5);
          texto.fadeTo(100, 1);
        }, 500);
      }, 1000);
    }, 600);
  }

  //Funcion Barra Width
  function progressIconosW(barra, ban, check, texto) {
    //Barra
    barra.animate(
      {
        width: "120px",
      },
      3000
    );
    //Ban
    ban.fadeTo(100, 1);
    ban.fadeTo(100, 0.5);
    ban.fadeTo(100, 0);
    //Check
    setTimeout(() => {
      ban.css({
        display: "none",
      });
      check.css({
        display: "block",
      });
      check.fadeTo(100, 0);
      check.fadeTo(100, 0.5);
      check.fadeTo(100, 1);
      //Texto
      setTimeout(() => {
        check.fadeTo(100, 1);
        check.fadeTo(100, 0.5);
        check.fadeTo(100, 0);
        setTimeout(() => {
          check.css({
            display: "none",
          });
          texto.css({
            display: "none",
          });
          texto.fadeTo(100, 0);
          texto.fadeTo(100, 0.5);
          texto.fadeTo(100, 1);
        }, 500);
      }, 1000);
    }, 600);
  }
  progressBar();
});
