window.addEventListener('load', function(){

    document.querySelector('.link_a').addEventListener('click', function(){

        //fetch para pedir la solicitud de la página a la que ha entrado
        fetch(('api/datos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(function(respuesta){
            return respuesta.text();
        })
        .then(function(texto){
            console.log(texto)
        })
        .catch(console.error))
    });

    //al entrar a la pagina c desde la pagina b, se suma al contador
    document.querySelector('.link_c').addEventListener('click', function(){


        fetch(('api/datos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(function(respuesta){
            return respuesta.text();
        })
        .then(function(texto){
            console.log(texto)
        })
        .catch(console.error))
    });


});