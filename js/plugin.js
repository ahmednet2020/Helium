"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var togglemenu = document.querySelector(".toggle-menu");
    var navlist = document.querySelector(".nav-list");
    var shadow = document.querySelector(".shadow");
    var navitem = document.querySelectorAll(".nav-item");
    TweenMax.set(navlist, { scale: 0 });
    function elemt(e) {
        e.preventDefault();
        togglemenu.focus();
        return false;
    }
    function closeMenu() {
        TweenMax.to(togglemenu, 0.5, { className: "-=close", rotation: 0, ease: SlowMo.easeIn, onComplete: function () {
                togglemenu.setAttribute("aria-expanded", "false");
                navitem[0].querySelector("a").focus();
                navitem.forEach(function (e) {
                    e.querySelector("a").setAttribute("tabindex", "-1");
                });
            } });
        TweenMax.to(navlist, 0.5, { scale: 0, transformOrigin: "top left" });
        TweenMax.set(shadow, { className: "-=show" });
    }
    function openMenu() {
        TweenMax.to(togglemenu, 0.5, { className: "+=close", rotation: 180, ease: SlowMo.easeOut, onComplete: function () {
                togglemenu.setAttribute("aria-expanded", "true");
                navitem[0].querySelector("a").focus();
                navitem[navitem.length - 1].addEventListener("keydown", elemt);
                navitem.forEach(function (e) {
                    e.querySelector("a").setAttribute("tabindex", "0");
                });
            } });
        TweenMax.to(navlist, 1, { scale: 1, transformOrigin: "top left", ease: Elastic.easeOut });
        TweenMax.set(shadow, { className: "+=show" });
    }
    togglemenu.addEventListener("click", function (e) {
        e.preventDefault();
        if (togglemenu.classList.contains("close")) {
            closeMenu();
        }
        else {
            openMenu();
        }
    });
    shadow.addEventListener("click", function (e) {
        e.preventDefault();
        closeMenu();
    });
    setTimeout(function () {
        TweenMax.to(".preload", 0.5, { scale: 0 });
    }, 1000);
});
//# sourceMappingURL=plugin.js.map