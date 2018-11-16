window.addEventListener('load', function(){

    document.querySelector('.link_b').addEventListener('click', function(){

        //al entrar a la pagina b desde la pagina a, se suma al contador
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

    document.querySelector('.link_c').addEventListener('click', function(){

        //al entrar a la pagina c desde la pagina a, se suma al contador
        
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

