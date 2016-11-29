// ==UserScript==
// @name         Github Trending
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a "Trending" link to the header of every github page
// @author       You
// @grant        none
// @include      https://github.com*
// @downloadURL  https://raw.githubusercontent.com/martindevans/GithubEnhancements/master/Github_Trending.js
// ==/UserScript==

(function () {
    'use strict';
    
    //get the headers, find the one tagged with attribute role="navigation"
    var el = Array.from(document.getElementsByClassName("header-nav")).filter(function(element) {
        return element.getAttribute("role") == "navigation";
    });
   
    console.log(el.length);
    
    if (el.length === 1) {
        
        //Other link elements in this header look like:
        /*
         * <li class="header-nav-item">
         *   <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
         * </li>
         */
        
        var container = document.createElement("li");
        container.className = "header-nav-item";

        var link = document.createElement("a");
        link.className = "header-nav-link";
        link.href = "https://github.com/trending";
        link.innerHTML = "Trending";

        container.appendChild(link);
        el[0].appendChild(container);
    }
})();
