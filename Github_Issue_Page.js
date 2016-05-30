// ==UserScript==
// @name         Github Issue Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make the github issue page not be tiny
// @author       You
// @include      https://github.com*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/martindevans/GithubEnhancements/master/Github_Issue_Page.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.githubusercontent.com/martindevans/d0470b25664150145603ae6a71074445/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements("#new_comment_field", function() {
        var txtarea = document.getElementById("new_comment_field");
        if (txtarea) {

            //Make comment textarea taller
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
    });

    waitForKeyElements(".container.new-discussion-timeline.experiment-repo-nav", function() {
        //Make entire issue form larger
        var issueFormContainer = document.getElementsByClassName("container new-discussion-timeline experiment-repo-nav");
        if (issueFormContainer.length === 1)
        {
            issueFormContainer[0].style.width = "65%";
        }
    });

    waitForKeyElements(".discussion-timeline.js-quote-selection-container", function() {
        //Make comment section container fill extra width
        var commentContainer = document.getElementsByClassName("discussion-timeline js-quote-selection-container");
        if (commentContainer.length === 1)
        {
            commentContainer[0].style.width = "calc(100% - 220px)";
        }
    });

    waitForKeyElements(".timeline-comment-wrapper.timeline-new-comment.js-comment-container", function() {
        //Make submission form fill extra width
        var submitForm = document.getElementsByClassName("timeline-comment-wrapper timeline-new-comment js-comment-container");
        if (submitForm.length === 1)
        {
            submitForm[0].style.maxWidth = "none";
        }
    });
})();