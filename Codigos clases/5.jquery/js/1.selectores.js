//evento ready verifica que toda la pagina este cargada
$(document).ready(function(){
    //seleccion por id
    var rojo=$("#rojo").css("background","red");
    //encadenamiento de elementos para no estar haciendo de uno en uno
    var amarillo=$("#amarillo").css("background","yellow")
                               .css("color","green");
    var verde=$("#verde").css("background","green")
                               .css("color","white");
    //seleccion por clase
    var miClase = $(".zebra");
    miClase.css("padding", "20px");

    $(".sin_borde").click(function(){
        $(this).addClass("zebra");//para activarle debe hacer click para ver cambios
    });

    //seleccion por etiqueta
    var parrafos=$('p').css("cursor","pointer"); //parrafos se pone el cursor encima y se puede hacer click
    //seleccionar varias etiquetas
    $('p,a').addClass("grande");

    var busqueda=$('#caja').find(".resaltado");
    console.log(busqueda);

    //seleccion por atributos
    $('[title="Google"]').css("background","green")
                          .css("color","white");
    $('[title="Facebook"]').css("background","blue")
                          .css("color","white");
    
});