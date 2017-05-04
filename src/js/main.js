//= ../../node_modules/jquery-custom/jquery.2/dist/jquery.min.js
//var $ = require("jquery");
//tabs
(function($){
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;

			showPage = function(i){
				$(tabs).find(".jq-tabs-list").children("div").hide();
				$(tabs).find(".jq-tabs-list").children("div").eq(i).show();
				$(tabs).find(".js-tab").children("li").removeClass("l-active");
				$(tabs).find(".js-tab").children("li").eq(i).addClass("l-active");
			}

			showPage(0);

			$(tabs).find(".js-tab").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;
			});

			$(tabs).find(".js-tab").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});
		};
		return this.each(createTabs);
	};
})(jQuery);
$(document).ready(function(){
	$(".tabs").lightTabs();
});
//