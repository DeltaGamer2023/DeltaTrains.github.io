$(document).ready(function () {
    $.getJSON("https://mockjson-co.herokuapp.com/bin/61d58d3a3fd65c001fbf4c51", function (data) {
        var ok = 0;

        $(".btn").click(function () {
            var EmailAdress = $("#exampleInputEmail1").val();
            var UserPassword = $("#exampleInputPassword1").val();
            
            for(i=0;i<data.length;i++){
                if(EmailAdress === data[i].Emailadress){
                    if(UserPassword === data[i].Pasword){
                        ok=1;
                        console.log("Email adress and password found!");
                        $(".btn").attr("href","mainpage.html");
                    }
                }
            }
            if(ok==0){
                alert("Email or password is wrong. Please try again.");
            }
        });
    })
})