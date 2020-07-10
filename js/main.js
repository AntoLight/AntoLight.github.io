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
                                        barra_hero.slideToggle();
                                });
                        } else {
                                hero.append(barra_hero);
                                menu.hide();
                        }
                }

                mediaSize();

                window.addEventListener("resize", mediaSize, false);
        })(jQuery);
});
