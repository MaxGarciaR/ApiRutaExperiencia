const databaseService = () => {

    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });

    //tabla solicitar info
    const tblSolicitarInfo = "tblSolicitarinfo";
    const solicitarInformacion = (SiNombre, SiApellidoPaterno, SiApellidoMaterno, SiCorreo, SiTelefono, SiFechaNacimiento, CaNombre, SeNombre, SiModalidad, SiFechaSolicitud, SiTipoContacto) =>{
        return knex(tblSolicitarInfo).insert({
            SiNombre: SiNombre,
            SiApellidoPaterno: SiApellidoPaterno,
            SiApellidoMaterno: SiApellidoMaterno,
            SiCorreo: SiCorreo,
            SiTelefono: SiTelefono,
            SiFechaNacimiento: SiFechaNacimiento,
            CaNombre: CaNombre,
            SeNombre: SeNombre,
            SiModalidad: SiModalidad,
            SiFechaSolicitud: SiFechaSolicitud,
            SiTipoContacto: SiTipoContacto
        });
    };

    //tabla sede para obtener nombres
    const tblSede = "tblSede";
    const leerNombresSedes = () => {
        return knex(tblSede).select('SeNombre');
    }

    //tabla carreras para obtener nombres
    const tblcarrera = "tblCarrera";
    const leerNombresCarreras = () =>{
        return knex(tblcarrera).select('CaNombre');
    }

    return {
       solicitarInformacion, leerNombresSedes, leerNombresCarreras
    }
};
module.exports = {
    databaseService
};