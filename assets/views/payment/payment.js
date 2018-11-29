// --------------------------------------------------------------------------------
// CONTROLLER - PAYMENT 
//---------------------------------------------------------------------------------

$(document).on("click",'.payment-method-selector > div', function(e, ele){
	var paymentMethod = $(this).attr('class');

	clearPaymentMethodSelector();

	switch (paymentMethod) {
		case "payment-method payment-method-credit-card":
			$(".payment-form-credit-card").show();
			$(".payment-method.payment-method-credit-card").addClass("active");
			break;

		case "payment-method payment-method-bank-account":
			$(".payment-form-bank-account").show();
			$(".payment-method.payment-method-bank-account").addClass("active");
			break;

		case "payment-method payment-method-paypal":
			$(".payment-form-paypal").show();
			$(".payment-method.payment-method-paypal").addClass("active");
			break;

		case "payment-method payment-method-none":
			$(".payment-form-none").show();
			$(".payment-method.payment-method-none").addClass("active");
			break;			
	}
});

function clearPaymentMethodSelector(){
	$(".payment-method-selector > div").removeClass("active");
	$(".payment-forms > div").hide();

}

$(document).on("click",'#test-payment-error', function(e, ele){
	$(".m-notifications").css("right", 0);
});

$(document).on("click",'.m-notification-cls', function(e, ele){
	$(".m-notifications").css("right", "-300px");
});

