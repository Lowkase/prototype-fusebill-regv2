// --------------------------------------------------------------------------------
// CONTROLLER - CONFIGURE
//---------------------------------------------------------------------------------
$(document).on("change",'.addon-include', function(e, ele){
	// Prevent the checkbox / label combo from firing change event twice
	e.stopPropagation();

	if ( $(this).is(":checked") ) {
		// Addon = active
		$(this).parent().parent().parent().addClass("include-active");
		$(this).parent().parent().parent().find(".addon-quantity input").removeAttr("disabled");

	} else {
		// Addon = default
		$(this).parent().parent().parent().removeClass("include-active");
		$(this).parent().parent().parent().find(".addon-quantity input").attr("disabled", true);
	}
});


$(document).on("click",'#varies', function(e, ele){
	$("#modal-varies").show();
	$("body").css("overflow", "hidden");
});

$(document).on("click",'.modal-varies-cancel-action', function(e, ele){
	$("#modal-varies").hide();
	$("body").css("overflow", "auto");
});