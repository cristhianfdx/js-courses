var app = {

    inicio: function(){

        this.inicioBotones();
        this.inicioFastClick();
        this.inicioHammer();
    },

    inicioFastClick: function(){
        FastClick.attach(document.body);
    },

    inicioBotones: function(){

        var botonClaro = document.getElementById("claro");
        var botonOscuro = document.getElementById("oscuro");

        botonClaro.addEventListener("click",function(){
            document.body.className = "claro";
        },false);
    
        botonOscuro.addEventListener("click",function(){
            document.body.className = "oscuro";
        },false); 


    },

    inicioHammer: function(){

        var zona = document.getElementById("zona");
        var hammertime = new Hammer(zona);

        hammertime.get("pinch").set({enable:true});
        hammertime.get("rotate").set({enable:true});

        zona.addEventListener("webkitAnimationEnd", function(e){
            zona.className = "";
        },false);

        hammertime.on("doubletap" , function(e){
            zona.className="doubletap";
        });

        hammertime.on("press" , function(e){
            zona.className="press";
        });

        hammertime.on("swipe", function(e){
            var clase = undefined;
            direccion = e.direction;

            if(direccion==4) clase = "swipe_right";
            if(direccion==2) clase = "swipe_left";

            zona.className=clase;

        });

        hammertime.on("rotate", function(e){
             
            var umbral = 25;
            if(e.distance > umbral) zona.className="rotate";
        });
    }

    
};

if("addEventListener" in document){
    document.addEventListener("DOMContentLoaded" , function(){
        app.inicio();
    },false);
}