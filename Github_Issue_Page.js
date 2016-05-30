// ==UserScript==
// @name         Github Issue Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make the github issue page not be tiny
// @author       You
// @include      https://github.com/*/*/issues*
// @grant        none
// @downloadURL  https://github.com/martindevans/GithubEnhancements/Github_Issue_Page.js
// ==/UserScript==

(function() {
    'use strict';
    
    //Make comment textarea taller
    var txtarea = document.getElementById("new_comment_field");
    if (txtarea) {
        txtarea.style.height = "300px";

        //txt area gets recreated when it is resized for some reason
        //Put these styles into a node in the head
        var css = "#new_comment_field { max-height: none !important; }";
        var head = document.head;
        var style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }
    
    //Make entire issue form larger
    var issueFormContainer = document.getElementsByClassName("container new-discussion-timeline experiment-repo-nav");
    if (issueFormContainer.length === 1)
        issueFormContainer[0].style.width = "65%";
    
    //Make comment section container fill extra width
    var commentContainer = document.getElementsByClassName("discussion-timeline js-quote-selection-container");
    if (commentContainer.length === 1)
        commentContainer[0].style.width = "calc(100% - 220px)";
        
    //Make submission form fill extra width
    var submitForm = document.getElementsByClassName("timeline-comment-wrapper timeline-new-comment js-comment-container");
    if (submitForm.length === 1)
        submitForm[0].style.maxWidth = "none";
    
})();