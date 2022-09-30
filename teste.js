
$(document).ready(function() {

    $.get("http://20.226.10.110/v1/VerificaToken",

    function(data){

        if(!(data == "Sucesso")){
            window.location.href = 'http://matheus-santos-br.github.io/AutomacaoVeicular/index.html';
        }
    });
});

$(document).ready(function(){
    $("#btnLamp").click(function(){
        $.get("http://20.226.10.110/v1/objeto/2",

        function(data){

        setTimeout(function(){
            if(data == "Objeto ATIVO"){
                $("#txtLamp").css("color","#2ed573");
                $("#txtLamp").html("Lâmpada acesa");
            }
            else{
                $("#txtLamp").css("color","#ff4757");
                $("#txtLamp").html("Lâmpada apagada");
            }
        },1000);

        });
    });
    });

function metodoPortao(botao, texto, id, nomePortao) {
    $(document).ready(function(){
        $.get("http://20.226.10.110/v1/objeto/" + id,

        function(data){

            if(!(data == "Objeto ATIVO")){
                
                $(texto).css("color","#ffd32a");
                $(texto).html(nomePortao + " fechando...");

            setTimeout(function(){

                $(texto).css("color","#ff4757");
                $(texto).html( nomePortao + " fechado");
                $(botao).css("background-color","#f39191");
                $(botao).css("background-image","url('assets/gate_open.png')");

                $(botao).hover(function(){
                    $(this).css("background-color", "#fa7979");
                    }, function(){
                    $(this).css("background-color", "#f39191");
                  });

            },4000);
    
            }
            else{
                $(texto).css("color","#ffd32a");
                $(texto).html(nomePortao + " abrindo...");

                setTimeout(function(){

                    $(texto).css("color", "#2ed573");
                    $(texto).html(nomePortao + " aberto");
                    $(botao).css("background-color","#97f59f");
                    $(botao).css("background-image","url('assets/gate_closing.png')");

                    $(botao).hover(function(){
                        $(this).css("background-color", "#2ed573");
                        }, function(){
                        $(this).css("background-color", "#97f59f");
                      });

                },4000);
            }

        });
    }
    )
}

$(document).ready(function(){
    $("#buttonReset").click(function(){
        $.get("http://20.226.10.110/v1/reset",
        
        function(){

                $("#txtLamp").css("color","#ff4757");
                $("#txtLamp").html("Lâmpada apagada");

                $("#txtPortao1").css("color","#ff4757");
                $("#txtPortao1").html("Portão 1 fechado");

                
                $("#txtPortao2").css("color","#ff4757");
                $("#txtPortao2").html("Portão 2 fechado");

                window.location.href = 'http://matheus-santos-br.github.io/AutomacaoVeicular/index.html';
            });
    });
    });