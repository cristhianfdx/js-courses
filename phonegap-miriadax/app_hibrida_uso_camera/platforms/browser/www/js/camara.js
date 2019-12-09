var app = {

    inicio: function(){
        this.inicioFastClick();
        this.iniciarBoton();
    },

    inicioFastClick:function(){
        FastClick.attach(document.body);
    },

    iniciarBoton:function(){
        //---------Boton Tomar foto--------------------------
        var button = document.getElementById("button_action");
        button.addEventListener("click",function(){
            app.cargarFoto(Camera.PictureSourceType.CAMERA);
        }, false);
        //----------------------------------------------------

        //--------Botones para filtros----------------------------
        var filterButtons = document.querySelectorAll(".button_filter");

        filterButtons[0].addEventListener("click",function(){
            app.aplicaFiltro("gray");
        },false);

        filterButtons[1].addEventListener("click",function(){
            app.aplicaFiltro("negative");
        },false);

        filterButtons[2].addEventListener("click",function(){
            app.aplicaFiltro("sepia");
        },false);
        //-----------------------------------------------------------

        //-----------Boton Galeria------------------------------------

        var button_gallery = document.getElementById("button_gallery");
        button_gallery.addEventListener("click",function(){
            app.cargarFoto(Camera.PictureSourceType.PHOTOLIBRARY);
        },false);
        //------------------------------------------------------------
    },    

    cargarFoto:function(pictureSourceType){

        var opciones = {

            quality:100,
            sourceType:pictureSourceType,
            destinationType: Camera.DestinationType.File_URI,
            targetWidth:300,
            targetHeight:300,
            correctOrientation:true
        };

        navigator.camera.getPicture(app.fotoTomada, app.errorAlTomarFoto, opciones);        
    },

    fotoTomada:function(imageURI){
        //var image = document.getElementById("foto");        

        var img = document.createElement("img");
        img.onload = function(){
            app.pintarFoto(img);            
        }
        img.src = imageURI;
    },

    pintarFoto:function(img){
        var canvas = document.getElementById("foto");
        var context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        
    },

    errorAlTomarFoto:function(){
        console.log("Fallo al tomar foto o toma cancelada " + message);
    },

    aplicaFiltro:function(filterName){

        var canvas = document.getElementById("foto");
        var context = canvas.getContext("2d");
        imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        
        effects[filterName](imageData.data);
        context.putImageData(imageData, 0, 0);
        
    }
};

var imageData;
if("addEventListener" in document){
    document.addEventListener("DOMContentLoaded", function(){
        app.inicio();
    },false);
}