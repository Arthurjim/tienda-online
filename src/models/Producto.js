import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Producto = sequelize.define('productos', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true 
    },
    codigo:{
        type: Sequelize.STRING
    },
    nombre:{
        type: Sequelize.TEXT
    },
    descripcion:{
        type:Sequelize.TEXT
    },
    existencia:{
        type:Sequelize.INTEGER
    },
    precio:{
        type:Sequelize.DECIMAL
    },
    urlimg:{
        type: Sequelize.STRING
    },
    public_id:{
        type: Sequelize.STRING
    },
    categoriaid:{
        type:Sequelize.INTEGER
    },
},{
    timestamps:false
});


export default Producto;