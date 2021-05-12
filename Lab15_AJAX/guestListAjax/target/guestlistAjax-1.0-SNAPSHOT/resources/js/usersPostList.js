$(function() {
    $("#showPost").click(userPostsList);
});

function userPostsList() {
    console.log("test")
    var id = 1;
    $.get("http://jsonplaceholder.typicode.com/posts?userId="+$("#uid").val(), {
        "success":displayUserPosts,
        "error":showError,
    });
        // .done(displayUserPosts);
    function showError(xhr,status,exception){
        console.log(xhr)
        console.log('test')
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