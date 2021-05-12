$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    let gL="";
    $.each(data,function (index,item){
        let temp = "<p>" + item.first + " " + item.last + "</p>";
        gL+=temp;
    });
    $("#guestList").html(gL);
}