$(document).ready(function(){
    var caja=$("#caja");
    //$("#mostrar").hide();//oculta el boton mostrar
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.fadeTo('slow',1);
    });
    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.fadeTo('slow',0);
    });

    $("#todoEnUno").click(function(){
        caja.slideToggle('slow');
    });

    $("#animar").click(function(){
        caja.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, 'slow')
        .animate({
            borderRadius: '900px',
            marginTop: '150px'
        }, 'slow')
    });
});