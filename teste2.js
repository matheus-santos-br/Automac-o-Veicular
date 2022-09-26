
var initialLoad = true;

$(document).ready(function() {

    window.alert("Olá, O token para testes é 0000.");

    initialLoad = false;

});

$(document).ready(function(){
    $("#btnEnviar").click(function(){

        var txt = $("#code").val();       	

        var settings = {
            "url": "https://localhost:5001/v1/token",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "token": txt
            }),
          };
          
          $.ajax(settings).done(function () {

                $("#code").css("border","solid");
                $("#code").css("border-color","#55efc4");
                setTimeout(function(){
                    // window.location.href = 'https://claudiojrsx.github.io/card-automation/teste.html';
                    window.location.href = 'C:\\TrabMatheus\\card-automation-main\\card-automation-main\\teste.html';
                },1000);

          }).fail(function(){
            $("#code").css("border","solid");
            $("#code").css("border-color","red");
          });    
          
    });
    });