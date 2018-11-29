// --------------------------------------------------------------------------------
// CONTROLLER - SELECT
//---------------------------------------------------------------------------------
$(document).on("click",'.plan-select-action', function(e, ele){
	$("#modal-frequency").show();
	$("body").css("overflow", "hidden");
});

$(document).on("click",'.modal-frequency-cancel-action', function(e, ele){
	$("#modal-frequency").hide();
	$("body").css("overflow", "auto");
});