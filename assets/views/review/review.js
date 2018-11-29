// --------------------------------------------------------------------------------
// CONTROLLER - REVIEW
//---------------------------------------------------------------------------------

$(document).on("change",'#terms', function(e, ele){

	if($("#terms").is(':checked')) {
		$('.m-button-buy').removeAttr('disabled');
		$('.m-button-test-buy-error').removeAttr('disabled');
	}
	else {
		$('.m-button-buy').attr('disabled', true);
		$('.m-button-test-buy-error').attr('disabled', true);
	}

});

$(document).on("click",'.m-button-buy', function(e, ele){
	$(".m-loading").show();

	setTimeout(function(){ 
		window.location.href = "confirm.html";
	}, 3000);
});


$(document).on("click",'.m-button-test-buy-error', function(e, ele){
	$("#test-buy-error").css("right", 0);
});




$(document).on("click",'.coupon-apply-button', function(e, ele){
	$(".coupon-error").hide();
	$(".m-notifications").css("right", "-300px");
	$(".discount").hide();

	if( isEmpty( $(".coupon-value") ) ) {
		$(".coupon-error").show();
	} else {
		var couponInput = $(".coupon-value").val();

		if (couponInput === "1234") {
			$(".coupon-label").html( $(".coupon-value").val() ); 
			$(".coupon-apply").hide();
			$(".coupon-applied").show();
			$(".discount").show();
		} else {
			$("#invalid-coupon").css("right", 0);
		}
	}
});

$(document).on("click",'.coupon-undo-button', function(e, ele){
	$(".coupon-apply").show();
	$(".coupon-applied").hide();
});

function isEmpty( el ){
	return !$.trim( el.val() );
}

$(document).on("click",'.change-plan', function(e, ele){
	$("#modal-abandon-plan").show();
});

$(document).on("click",'.modal-abandon-plan-action', function(e, ele){
	window.location.href = "index.html";
});




$(document).on("click",'.m-notification-cls', function(e, ele){
	$(".m-notifications").css("right", "-300px");
});