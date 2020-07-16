import { CountUp } from "./countUp.min.js";
$(document).ready(function () {
        //Variables Hero
        var hero_desktop = $("#hero_desktop");
        var hero_movile = $("#hero_movile");

        //Cambio de Hero
        (function ($) {
                function mediaSize() {
                        if (window.matchMedia("(min-width: 768px)").matches) {
                                hero_desktop.show();
                                hero_movile.hide();
                        } else {
                                hero_movile.show();
                                hero_desktop.hide();
                        }
                }

                mediaSize();

                window.addEventListener("resize", mediaSize, false);
        })(jQuery);
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

        //Freelancer Animation
        var freelancer_square = $(".center-freelancer");
        freelancer_square.css({ visibility: "hidden" });
        var web_page = $(".web-page");
        var web_page_content = $(".web-page-content-div");
        $(".center-freelancer div h1, .center-freelancer div p").hide();
        var waypoint = new Waypoint({
                element: $(freelancer_square),
                handler: function (direction) {
                        this.destroy();
                        if (direction == "down") {
                                if (hero_desktop.height() > 0 && hero_movile.height() > 0) {
                                        freelancer_square.addClass("activo-freelancer");
                                        freelancer_square.css({ visibility: "visible" });
                                        $(
                                                ".center-freelancer div h1, .center-freelancer div p"
                                        ).fadeIn(4000);
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
                        }
                },
                offset: 600,
        });

        //Contador
});
