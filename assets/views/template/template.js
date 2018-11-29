// --------------------------------------------------------------------------------
// CONTROLLER - TEMPLATE
//---------------------------------------------------------------------------------

// navSetActive
function navSetActive(child) {
	$(".m-steps > a").removeClass("active");

	$(".m-steps > a:nth-child(" + child + ")").addClass("active");	
}