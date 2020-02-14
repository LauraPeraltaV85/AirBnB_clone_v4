$( document ).ready(function() {
    $('.amenities.popover li').click(function() {
	if ($("input[type=checkbox]").prop(
            ":checked")) {
            alert("Check box in Checked");
        } else {
            alert("Check box is Unchecked");
        }
    })
})
