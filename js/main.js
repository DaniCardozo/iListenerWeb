
/*
    Archivo principal para los archivos html
*/


$(document).ready(function(){

    var x = localStorage.length;
 
/*
    Formulario de registro
*/
    $("#form_register").submit(function(){
        var usuario= {
            nombre : $("#register_nombre").val(),
            password: $("#register_password").val()
        };
        
        localStorage.setItem(x,JSON.stringify(usuario))
        
        x=x+1;
        event.preventDefault();
    });

/*
    Formulario de login
*/
    $("#form_login").submit(function(){
        var login_nombre = $("#login_nombre").val();
        var login_password = $("#login_password").val();
        usuario_validar ={
            "nombre" : login_nombre,
            "password" : login_password
        }

        for(let index in localStorage){
            var key = localStorage.key(index);
            console.log();
        }
        event.preventDefault();
    }); 

});