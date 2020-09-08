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
  ----Lenguajes Programacion Desktop----
  */

  //Variables
  var len_desc = $("#len_desc1"),
    len_cont = $("#len_cont1"),
    len_desc2 = $("#len_desc2"),
    len_cont2 = $("#len_cont2");

  len_desc.on("click", function () {
    sas(len_desc, len_cont);
  });

  len_desc2.on("click", function () {
    sas(len_desc2, len_cont2);
  });

  function sas(desc, cont) {
    desc.fadeTo("slow", 0);
    setTimeout(() => {
      desc.hide();
      cont.css("display", "grid");
      cont.fadeTo("slow", 1);
      cont.show();
      setTimeout(() => {
        (function ($) {
          function mediaSize() {
            if (window.matchMedia("(max-width: 480px)").matches) {
              programeLanguages("70px", "70px", cont);
            }
          }
          mediaSize();
          window.addEventListener("resize", mediaSize, false);
        })(jQuery);

        (function ($) {
          function mediaSize() {
            if (window.matchMedia("(min-width: 481px)").matches) {
              programeLanguages("120px", "100px", cont);
            }
          }
          mediaSize();
          window.addEventListener("resize", mediaSize, false);
        })(jQuery);
      }, 500);
    }, 1000);
  }

  //Funciones
  function programeLanguages(anchura, altura, cont) {
    var b_1 = cont.parent().children(".b-1"),
      b_2 = cont.parent().children(".b-2"),
      b_3 = cont.parent().children(".b-3"),
      b_4 = cont.parent().children(".b-4"),
      b_5 = cont.parent().children(".b-5"),
      b_6 = cont.parent().children(".b-6"),
      p_1 = cont.children().children(".p-1"),
      p_2 = cont.children().children(".p-2"),
      p_3 = cont.children().children(".p-3"),
      p_4 = cont.children().children(".p-4"),
      p_5 = cont.children().children(".p-5"),
      p_6 = cont.children().children(".p-6");

    progressIconosH(b_1, p_1);
    setTimeout(() => {
      progressIconosW(b_4, p_4);
      setTimeout(() => {
        progressIconosH(b_5, p_5);
        setTimeout(() => {
          progressIconosW(b_2, p_2);
          setTimeout(() => {
            progressIconosH(b_3, p_3);
            setTimeout(() => {
              progressIconosH(b_6, p_6);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);

    //Funcion Barra Height
    function progressIconosH(barra, texto) {
      //Barra
      barra.animate(
        {
          height: altura,
        },
        3000
      );
      setTimeout(() => {
        //Texto
        texto.css({
          display: "block",
        });
        texto.fadeTo(100, 0);
        texto.fadeTo(100, 0.5);
        texto.fadeTo(100, 1);
      }, 100);
    }

    //Funcion Barra Height
    function progressIconosW(barra, texto) {
      //Barra
      barra.animate(
        {
          width: anchura,
        },
        3000
      );
      setTimeout(() => {
        //Texto
        texto.css({
          display: "block",
        });
        texto.fadeTo(100, 0);
        texto.fadeTo(100, 0.5);
        texto.fadeTo(100, 1);
      }, 600);
    }
  }
});
