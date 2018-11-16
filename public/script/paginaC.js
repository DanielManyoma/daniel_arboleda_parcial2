window.addEventListener('load', function(){

    document.querySelector('.link_b').addEventListener('click', function(){

        //al entrar a la pagina b desde la pagina b, se suma al contador
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

    //al entrar a la pagina a desde la pagina c, se suma al contador
    document.querySelector('.link_a').addEventListener('click', function(){


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


