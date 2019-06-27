

import Sequelize, { ForeignKeyConstraintError } from "sequelize";
import { sequelize } from "../database/database";


import Producto from './Producto';

const Categoria = sequelize.define('categorias',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true 
    },
    categoria:{
        type:Sequelize.TEXT
    }
},{
    timestamps:false
});

Categoria.hasMany(Producto,{foreignKey: 'categoriaid', sourceKey: 'id'});
Producto.belongsTo(Categoria,{foreignKey: 'categoriaid', sourceKey: 'id'})

export default Categoria;