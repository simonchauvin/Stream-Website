/**
 * @author schauvin
 */
$(document).ready(function(){

$('#gallery a').lightBox(); // Select all links in object with gallery ID

$("span.logo").click(function() {
	$("#home_content").show("slow");
	
	$("#overview_content").hide("slow");
	$("#screenshots_content").hide("slow");
	$("#trailer_content").hide("slow");
	$("#download_content").hide("slow");
	$("#contact_content").hide("slow");
});

$("a.home").click(function() {
	$("#home_content").show("slow");
	
	$("#overview_content").hide("slow");
	$("#screenshots_content").hide("slow");
	$("#trailer_content").hide("slow");
	$("#download_content").hide("slow");
	$("#contact_content").hide("slow");
});

$("a.overview").click(function() {
	$("#overview_content").show("slow");
	
	$("#home_content").hide("slow");
	$("#screenshots_content").hide("slow");
	$("#trailer_content").hide("slow");
	$("#download_content").hide("slow");
	$("#contact_content").hide("slow");
});

$("a.screenshots").click(function() {
	$("#screenshots_content").show("slow");
	
	$("#home_content").hide("slow");
	$("#overview_content").hide("slow");
	$("#trailer_content").hide("slow");
	$("#download_content").hide("slow");
	$("#contact_content").hide("slow");
});

$("a.trailer").click(function() {
	$("#trailer_content").show("slow");
	
	$("#home_content").hide("slow");
	$("#screenshots_content").hide("slow");
	$("#overview_content").hide("slow");
	$("#download_content").hide("slow");
	$("#contact_content").hide("slow");
});

$("a.download").click(function() {
	$("#download_content").show("slow");
	
	$("#home_content").hide("slow");
	$("#screenshots_content").hide("slow");
	$("#trailer_content").hide("slow");
	$("#overview_content").hide("slow");
	$("#contact_content").hide("slow");
});

$("a.contact").click(function() {
	$("#contact_content").show("slow");
	
	$("#home_content").hide("slow");
	$("#screenshots_content").hide("slow");
	$("#trailer_content").hide("slow");
	$("#overview_content").hide("slow");
	$("#download_content").hide("slow");
});

});