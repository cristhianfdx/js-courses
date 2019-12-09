var app={
    
    inicio:function(){
        this.inicioFastClick();
    },

    inicioFastClick:function(){
        FastClick.attach(document.body);
    },

    dispositivoListo:function(){
        navigator.geolocation.watchPosition(app.pintaCoordenadasEnMapa, app.errorAlSolicitarLocalizacion);
    },

    /*dibujaCoordenadas:function(position){
        var coordenadasDibujadas=document.getElementById("coords");
        coordenadasDibujadas.innerHTML = "Latitud: " + position.coords.latitude+ " Longitud: " + position.coords.longitude;
    },*/

    pintaCoordenadasEnMapa:function(position){
        var miMapa = L.map("map").setView([position.coords.latitude, position.coords.longitude], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/cristhianforerod/cjjuhxjd709yc2rp2kq8wylpk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3Jpc3RoaWFuZm9yZXJvZCIsImEiOiJjamp1ZXVjYmQ5ZzM5M3ZsZnhnZ3pqb2Y3In0.6gjPnJ7swac8tQAjk1wCsg', 
        {   maxZoom:18
        }).addTo(miMapa);

        app.pintarUbicacion([position.coords.latitude, position.coords.longitude], "¡Estoy Aquí!", miMapa);

        miMapa.on('click', function(evento){
            var texto = 'Marcador en l(' + evento.latlng.lat.toFixed(2) + ') y L(' + evento.latlng.lng.toFixed(2) + ')';
            app.pintaMarcador(evento.latlng, texto, miMapa);
          });
    },
    
    pintarUbicacion:function(lat_lng,texto,mapa){
        
        L.circleMarker(lat_lng, {
            radius:10,
            color:"blue",            
            fillColor:"#42A5F5",
            fillOpacity:1
        }).addTo(mapa).bindPopup(texto).openPopup();
    },

    pintaMarcador:function(lat_lng,texto,mapa){
        var marcador = L.marker(lat_lng).addTo(mapa);
        marcador.bindPopup(texto).openPopup();       
    },

    errorAlSolicitarLocalizacion:function(error){
        console.log(error.code + ":" +error.message);
    }
};

if("addEventListener" in document){
    document.addEventListener("DOMContentLoaded", function(){
        app.inicio();
    },false);
    document.addEventListener("deviceready", function(){
        app.dispositivoListo();
    },false);
}