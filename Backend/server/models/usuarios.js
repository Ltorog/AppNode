module.exports = (sequelize, DataTypes) => {
    const usuarios = sequelize.define('USUARIOS', {
        Id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
        },
        User:DataTypes.STRING,
        Password:DataTypes.STRING,
        Activo:DataTypes.BOOLEAN,
        Usuario_Creacion:DataTypes.STRING,
        Fecha_Registro:DataTypes.DATE,
        Fecha_Actualizacion:DataTypes.DATE,
        Id_Rol:DataTypes.INTEGER,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE
    });

    return usuarios;
}