$(function() {
    $("#showPost").click(userPostsList);
});

function userPostsList() {
    $.ajax("http://jsonplaceholder.typicode.com/posts?userId="+$("#uid").val(), {
		"type": "get",
        "success":displayUserPosts,
        "error":showError,
    });
    function showError(xhr,status,exception){
        $('#user').html(xhr+status+exception);
    }

    function displayUserPosts(data) {

        var gL = "";
        var userData = ".";
        var usersUrl = "http://jsonplaceholder.typicode.com/users?id=" + $("#uid").val();
        $.ajax(usersUrl, {
            "type": "get",
        }).done(function (result) {
            userData += "<p> Name:" + result[0].username + " Email:" + result[0].email + "</p>";
            $("#user").html(userData);
        });

        // data.forEach((item,index)=>{
        //     let temp = "<div><p>" + item.title + " <br>" + item.body + "</p></div>";
        //     gL+=temp;
        // })
        $.each(data, function (index,item) {
            let temp = "<div><p>" + item.title + " <br>" + item.body + "</p></div>";
            gL += temp;
        })
        $("#postList").html(gL);
    }
}