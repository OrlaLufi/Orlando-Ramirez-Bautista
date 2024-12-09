//service worker

if('servicewotker'){
    console.log('Puedes usar los serviceworker del navegador');

    navigator.serviceWorker.register('./sw.js')
                            .then(res =>console.log('serviceworker cargado correctamente', res))
                            .catch(err =>console.log('serviceworker no se ha podido registrar',err))
}else{
    console.log('No puedes usar los servicuios del navegador')
}


//scroll suavizado
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});