function validarFormulario() {
    var nombre = document.forms["fcontacto"]["nombre"];
    var email = document.forms["fcontacto"]["email"];
    var mensaje = document.forms["fcontacto"]["mensaje"];

    if (nombre.value == "") {
        window.alert("Por favor escribi tu nombre.");
        nombre.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Por favor escribi tu e-mail.");
        email.focus();
        return false;
    }

    if (mensaje.value == "") {
        window.alert("Por favor contanos el motivo de tu consulta.");
        mensaje.focus();
        return false;
    }

    return true;
}