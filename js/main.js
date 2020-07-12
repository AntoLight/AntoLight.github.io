$(document).ready(function () {
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
        var freelancer_square = $(".freelancer");
        freelancer_square.css({ visibility: "hidden" });
        $(".center-freelancer div h1, .center-freelancer div p").hide();
        var waypoint = new Waypoint({
                element: $(freelancer_square),
                handler: function (direction) {
                        if (direction == "down") {
                                freelancer_square.addClass("activo-freelancer");
                                freelancer_square.css({ visibility: "visible" });
                                $(".center-freelancer div h1, .center-freelancer div p").fadeIn(
                                        4000
                                );
                        }
                },
                offset: 600,
        });
});
