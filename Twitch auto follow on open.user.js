// ==UserScript==
// @name          Twitch auto follow on open
// @description   Auto follow twitch channel when you open its page
// @include       http://www.twitch.tv/*
// @include       https://www.twitch.tv/*
// @version       1.1.1
// @author        wOxxOm
// @namespace     wOxxOm.scripts
// @license       MIT License
// @grant         none
// @run-at        document-start
// @require       https://greasyfork.org/scripts/12228/code/setMutationHandler.js
// ==/UserScript==

setMutationHandler(document, '.channel-actions .follow-button:not(.is-following) a', function(nodes) {
	var a = nodes[0];
	if (a.wOxxOmized)
		return;
	a.wOxxOmized = true;
	var interval = setInterval(function() { a.click() }, 50);
	setMutationHandler(a.parentNode.parentNode, '.notify-menu', function(nodes) {
		nodes[0].style.display = 'none';
		this.disconnect();
		clearInterval(interval);
	});
});
