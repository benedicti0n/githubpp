// ==UserScript==
// @name         GitHub++
// @namespace    https://github.com/Storm99999/githubpp
// @version      0.1
// @description  A github theme utilization tool
// @author       Storm
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var theme = "Jellybeans"

    function main() {
        const injectCSS = css => {
            let x = document.createElement('style');
            x.type = ('text/css'); // deprecated, but i do not give two shits
            x.innerText = css;
            document.head.appendChild(x);
            return x;
        };

        let theme_storage = {
            "Dracula": "https://raw.githubusercontent.com/Storm99999/githubpp/main/src/themes/dracula/dracula_main.css",
            "TokyoNight": "https://raw.githubusercontent.com/Storm99999/githubpp/main/src/themes/tokyo_night/tokyo_night_main.css",
            "Aura": "https://raw.githubusercontent.com/Storm99999/githubpp/main/src/themes/aura/aura_main.css",
            "Jellybeans": "https://raw.githubusercontent.com/Storm99999/githubpp/main/src/themes/jellybeans/jellybeans_main.css",
            "CustomTestTheme": "https://raw.githubusercontent.com/Storm99999/githubpp/main/tests/theme2.css"
        };

        // Injection process
        fetch(theme_storage[theme]).then(response => response.text()).then(data => injectCSS(data)).catch(error => console.error('Error:', error));
    }

    main();
})();
