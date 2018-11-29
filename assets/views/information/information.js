// --------------------------------------------------------------------------------
// CONTROLLER - INFORMATION
//---------------------------------------------------------------------------------

function informationInit() {
	updateBilling("DEFAULT");
	updateShipping("DEFAULT");
}

$(document).on("change",'#use-billing-address', function(e, ele){
	if ( $(this).is(':checked') ) {
		$(".shipping-address-form").show();
	} else {
		$(".shipping-address-form").hide();
	}
});

$(document).on("change",'#use-billing-address', function(e, ele){
	if ( $(this).is(':checked') ) {
		$(".shipping-address-form").show();
	} else {
		$(".shipping-address-form").hide();
	}
});

$(document).on("change",'.billing-country', function(e, ele){
	var option = $( ".billing-country option:selected" ).text();
	updateBilling(option);
});

$(document).on("change",'.shipping-country', function(e, ele){
	var option = $( ".shipping-country option:selected" ).text();
	updateShipping(option);
});

function updateBilling(option) {
	if (option === "Canada" || option === "DEFAULT") {
		$(".billing-state-province .label").text("PROVINCE");
		$(".billing-state-province .province").show();
		$(".billing-state-province .state").hide();

		$(".billing-zip-postal .label").text("POSTAL CODE");
	}

	if (option === "United States") {
		$(".billing-state-province .label").text("STATE");
		$(".billing-state-province .province").hide();
		$(".billing-state-province .state").show();

		$(".billing-zip-postal .label").text("ZIP");
	}
}

function updateShipping(option) {
	if (option === "Canada" || option === "DEFAULT") {
		$(".shipping-state-province .label").text("PROVINCE");
		$(".shipping-state-province .province").show();
		$(".shipping-state-province .state").hide();

		$(".shippig-zip-postal .label").text("POSTAL CODE");
	}

	if (option === "United States") {
		$(".shipping-state-province .label").text("STATE");
		$(".shipping-state-province .province").hide();
		$(".shipping-state-province .state").show();

		$(".shipping-zip-postal .label").text("ZIP");
	}
}