!(function r(e, n, t) {
    function o(i, f) {
        if (!n[i]) {
            if (!e[i]) {
                var p = "function" == typeof require && require;
                if (!f && p) return p(i, !0);
                if (u) return u(i, !0);
                throw (
                    (((p = new Error("Cannot find module '" + i + "'")).code =
                        "MODULE_NOT_FOUND"),
                    p)
                );
            }
            (p = n[i] = { exports: {} }),
                e[i][0].call(
                    p.exports,
                    function (r) {
                        return o(e[i][1][r] || r);
                    },
                    p,
                    p.exports,
                    r,
                    e,
                    n,
                    t
                );
        }
        return n[i].exports;
    }
    for (
        var u = "function" == typeof require && require, i = 0;
        i < t.length;
        i++
    )
        o(t[i]);
    return o;
})(
    {
        1: [
            function (require, module, exports) {
                require("./setMinHeight")();
            },
            { "./setMinHeight": 2 },
        ],
        2: [
            function (require, module, exports) {
                module.exports = function () {
                    var content =
                            (content = document.querySelector(".article")) ||
                            document.querySelector(".homepage"),
                        navbarHeight = window
                            .getComputedStyle(document.querySelector(".navbar"))
                            .getPropertyValue("height"),
                        heroHeight = 0;
                    document.querySelector(".hero") &&
                        (heroHeight = window
                            .getComputedStyle(document.querySelector(".hero"))
                            .getPropertyValue("height"));
                    var minHeight = window
                            .getComputedStyle(document.querySelector(".footer"))
                            .getPropertyValue("height"),
                        minHeight =
                            document.documentElement.clientHeight -
                            parseInt(navbarHeight) -
                            parseInt(heroHeight) -
                            parseInt(minHeight);
                    content.style.minHeight = minHeight + "px";
                };
            },
            {},
        ],
    },
    {},
    [1]
);
