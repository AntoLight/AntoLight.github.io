import { CountUp } from "./countUp.min.js";
$(document).ready(function () {
  //Variables Hero
  var hero_desktop = $("#hero_desktop");
  var hero_movile = $("#hero_movile");

  //Variables Resize Menu inicial
  var barra_hero = $("#barra_hero");
  var barra_header = $("#barra_header");
  var hero = $("#hero");
  var menu = $("#menu");
  //BarraHero a BarraHeader
  (function ($) {
    function mediaSize() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        barra_header.append(barra_hero);
        menu.show();
        barra_hero.hide();
        menu.on("click", function () {
          barra_hero.stop().slideToggle("slow");
        });
      } else {
        hero.append(barra_hero);
        menu.hide();
      }
    }

    mediaSize();

    window.addEventListener("resize", mediaSize, false);
  })(jQuery);

  //Barra Hero Desktop Follow
  (function ($) {
    function mediaSize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        var windowsAltura = $(window).height() - 815;
        var barraAltura = barra_hero.innerHeight();
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll > windowsAltura) {
            barra_hero.addClass("activo-barra");
            $("body").css({});
          } else {
            barra_hero.removeClass("activo-barra");
            $("body").css({ "margin-top": "0px" });
          }
        });
      } else {
      }
    }

    mediaSize();

    window.addEventListener("resize", mediaSize, false);
  })(jQuery);

  //Freelancer Animation-1
  var freelancer_square = $("#freelancer_1");
  freelancer_square.css({ visibility: "hidden" });
  $(".center-freelancer div h1, .center-freelancer div p").hide();
  var waypoint = new Waypoint({
    element: $(freelancer_square),
    handler: function (direction) {
      this.destroy();
      if (direction == "down") {
        freelancer_square.addClass("activo-freelancer");
        freelancer_square.css({ visibility: "visible" });
        $(".center-freelancer div h1, .center-freelancer div p").fadeIn(4000);
      }
    },
    offset: 850,
  });

  //Web-Page-Content
  var web_page = $(".web-page");
  var web_page_content = $(".web-page-content-div");
  var waypoint = new Waypoint({
    element: $(web_page),
    handler: function (direction) {
      this.destroy();
      if (direction == "down") {
        web_page_content.addClass("activo-web-all-div");
        const options = {
          duration: 5,
        };
        let demo = new CountUp("animacion_numero_1", 94, options);
        if (!demo.error) {
          demo.start();
        }
        const options2 = {
          duration: 15,
        };
        let demo2 = new CountUp("animacion_numero_2", 66, options2);
        if (!demo2.error) {
          demo2.start();
        }
        const options3 = {
          duration: 25,
        };
        let demo3 = new CountUp("animacion_numero_3", 75, options3);
        if (!demo3.error) {
          demo3.start();
        }
      }
    },
    offset: 600,
  });
  // Freelancer Animacion-2
  var freelancer_square2 = $("#freelancer_2");
  freelancer_square2.css({ visibility: "hidden" });
  var waypoint = new Waypoint({
    element: $(freelancer_square2),
    handler: function (direction) {
      this.destroy();
      if (direction == "down") {
        freelancer_square2.addClass("activo-freelancer");
        freelancer_square2.css({ visibility: "visible" });
        $(".center-freelancer div h1, .center-freelancer div p").fadeIn(4000);
      }
    },
    offset: 800,
  });
});
