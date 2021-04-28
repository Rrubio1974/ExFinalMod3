$(document).ready(function(){
    //ejercicio 1
    $('#adjuntar').click(function() {
        $('#agregarTexto').data('prueba', {
            first: 'estimados',
            last: 'el día'
        });
        $("span:first").text($("#agregarTexto").data("prueba").first);
        $("span:last").text($("#agregarTexto").data("prueba").last);
    });

    $('#obtener').click(function() {
        $("#datosagregados").text("Los datos agregados son: " +
            $("#agregarTexto").data("prueba").first + " y " + $("#agregarTexto").data("prueba").last);
    });

    $('#remover').click(function() {
        $("span:first").text("");
        $("span:last").text("");
        $("#datosagregados").text("");;
    });

    //ejercicio 2
    $('#color').click(function() {
        $('#colortexto').addClass('text-danger fw-bold')
    });
    
    $('#antes').click(function() {
        $('#colortexto').removeClass('text-danger fw-bold')
    });

    //ejercicio 3
    $('#desaparecer').click(function() {
        $('#imagen1').toggle();
    });

    //ejercicio 4
    $('#agregatxt').click(function() {
        $('#textoagredado').append('<span id="nuevoTexto"> Nuevo texto agregado al final del parrafo<span>');
    });

    $('#remover1').click(function() {
        $('#nuevoTexto').remove();
    });

    //ejercicio 5
    $("button").click(function(){
        $("input:text").val("Rodrigo");
      });

      $('#remover2').click(function() {
        $('input:text').remove();
    });

    //ejercicio 6
    $('#fadeIn').click(function() {
        $('#imagen2').fadeIn("slow");
    });

    $('#fadeOut').click(function() {
        $('#imagen2').fadeOut("slow");
    });

    //ejercicio 7
    $('#onfocus').click(function(e) {
        e.preventDefault();
        $('input:text').focus();
        $('#Text1').css('display', 'inline');
        $('#Text1').addClass('text-danger fw-bold');
    });

    //ejercicio 8
    $('#hidetext').click(function() {
        $('#efectotxt').hide();
    });

    $('#showtext').click(function() {
        $('#efectotxt').show();
    });

    //ejercicio 9
    $('#slideUp').click(function() {
        $('#slidetxt').slideUp("slow");
    });

    $('#slideDown').click(function() {
        $('#slidetxt').slideDown("slow");
    });

    
});