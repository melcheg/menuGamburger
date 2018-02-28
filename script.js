
$(document).ready(function(){
$( ".button-open-menu" ).click(function() {
  $( ".menu" ).slideToggle( 500);
});
$( ".sub-link" ).click(function() {
  $(this).next(".subBlock").slideToggle( 500);
});
	$( ".search-open-menu" ).click(function() {
  $(".search").slideToggle( 500);
});
});