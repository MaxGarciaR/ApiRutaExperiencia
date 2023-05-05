module.exports = function(app, databaseService){

    //post para solicitar información
    app.post('/solicitarinfo',(request, response) =>{
        const nuevaSolicitud = request.body;
        console.log(nuevaSolicitud);

        databaseService.solicitarInformacion(
            nuevaSolicitud.SiNombre,
            nuevaSolicitud.SiApellidoPaterno,
            nuevaSolicitud.SiApellidoMaterno,
            nuevaSolicitud.SiCorreo,
            nuevaSolicitud.SiTelefono,
            nuevaSolicitud.SiFechaNacimiento,
            nuevaSolicitud.CaNombre,
            nuevaSolicitud.SeNombre,
            nuevaSolicitud.SiModalidad,
            nuevaSolicitud.SiFechaSolicitud,
            nuevaSolicitud.SiTipoContacto)
            .then(()=>{
                response.json({"Mensaje": "Solicitud Creada"});
            }).catch(e =>{
                response.status(500).json(e);
            });
    })

    //get para obtener sedes
    app.get('/nombressedes', (request, response)=>{
        databaseService.leerNombresSedes()
            .then(nombresSedes=>{
                response.json(nombresSedes)
            }).catch(e => response.status(500).json(e));
    });

    //get para obtener carreras
    app.get('/nombrescarreras', (request, response)=>{
        databaseService.leerNombresCarreras()
            .then(nombresCarreras=>{
                response.json(nombresCarreras)
            }).catch(e => response.status(500).json(e));
    });
}
