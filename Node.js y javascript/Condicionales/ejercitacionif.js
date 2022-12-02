let perfil = "";
switch (perfil) {
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case "asistente":
        console.log("Usted solo tiene permisos de registrar, modificar y consultar datos");
        break;
    case "invitado":
        console.log("usted solo tiene permisos de consultar datos");
        break;
    default:
        console.log("Debe especificar el perfil de usuario")
        break;
}
