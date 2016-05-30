// ==UserScript==
// @name         Github Trending
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a "Trending" link to the header of every github page
// @author       You
// @grant        none
// @include      https://github.com*
// @downloadURL  https://github.com/martindevans/GithubEnhancements/Github_Trending.js
// ==/UserScript==

(function () {
    'use strict';
    
    //Get the header, there should be only one!
    var el = document.getElementsByClassName("header-nav left");
    
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