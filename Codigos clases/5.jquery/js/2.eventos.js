$(document).ready(function(){
    //eventos mouseover y mouseout
    var caja=$("#caja");
    /*caja.mouseover(function(){//cambia de color cuando pongo el mouse encima
        $(this).css("background","green");
    });
    caja.mouseout(function(){//cambia de color cuando quito el mouse
        $(this).css("background","blue");
    });*/
    function cambiarVerde(){
        $(this).css("background","green");
    }
    function cambiarAzul(){
        $(this).css("background","blue");
    }
    //evento hover
    caja.hover(cambiarVerde,cambiarAzul);//la diferencia con lo comentado es la velocidad de cambio
    //click
    caja.click(function(){
        $(this).css("background","red");
    });
    //doble click
    caja.dblclick(function(){
        $(this).css("background","pink");
    });
    caja.on("click",function(){//ya no funciona el red xq se sobreponen las funciones
        $(this).css("background","yellow");
    });
    //focus-blur
    var nombre=$("#nombre");
    nombre.focus(function(){
        $(this).css("border","2px solid blue");
    });
    nombre.blur(function(){
        $(this).css("border","2px solid red");
    });

    var datos=$("#datos");
    datos.mousedown(function(){
        $(this).css("border-color","blue");
    });
    datos.mouseup(function(){
        $(this).css("border-color","red");
    });

    $(document).mousemove(function(){//hace desaparecer el mouse
        $('body').css("cursor","none");
        $("#sigueme").css("left", event.clientX)
                    .css("top", event.clientY);
    });
});