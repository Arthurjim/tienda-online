import Producto from '../models/Producto';


const fs = require('fs-extra');
const cloudinary = require('cloudinary');

export async function getTodosProd(req, res) {
    try {

        const productos = await Producto.findAll();
       
        return res.render('productos', {
            data: productos,

        });
       
    } catch (error) {
        console.log(error);
    }

}
export async function createProducto(req, res) {
    cloudinary.config({
        cloud_name: 'dlhwnrcqk',
        api_key: '443383464891562',
        api_secret: 'Eme835UtZP4-LSI2ooBk3HW1mno'
    });
    const { codigo, nombre, existencia, precio, descripcion, categoriaid, } = req.body;

    console.log(req.body);
    console.log(req.file);
    try {

        const result = await cloudinary.v2.uploader.upload(req.file.path);
        console.log(result);
        let newProducto = await Producto.create({
            codigo,
            nombre,
            existencia,
            precio,
            descripcion,
            urlimg: result.url,
            public_id: result.public_id,
            categoriaid,
        }, {
                fields: ['codigo', 'nombre', 'existencia', 'precio', 'descripcion', 'urlimg', 'public_id', 'categoriaid']
            });
        await fs.unlink(req.file.path);
        if (newProducto) {
            return res.redirect('/')
        }
    } catch (error) {
        /*next(error);*/
        console.log(error);
        res.status(500).json({
            message: 'Something Goes Wrong. Try Again.',
            data: {},
        })
    }



};



export async function getDelete(req, res) {
    cloudinary.config({
        cloud_name: 'dlhwnrcqk',
        api_key: '443383464891562',
        api_secret: 'Eme835UtZP4-LSI2ooBk3HW1mno'
    });
    const { id } = req.params;
    try {
        const prod = await Producto.findByPk(id);
        await Producto.destroy({
            where: {
                id
            }
          
        }, await cloudinary.v2.uploader.destroy(prod.public_id));
        
        res.redirect('/nuevoProducto'); 
        
        
    } catch (error) {
        console.log(error);
        res.json({
            message: 'Delete Failed.',
            data: {}
        });
    }
};

// const {id}=req.params;
// User.destroy('`id` LIKE "ID%"').success(function() { // We just deleted all rows that have a name starting with "J" })

// const  = await Producto.deleteAll(id);
// const result = await cloudinary.v2.upload.destroy(producto.img_id);
// console.log(result);
// res.redirec('nuevoProducto');




export async function getNuevoProducto(req, res) {
    try {

        const productos = await Producto.findAll();
        return res.render('productoNuevo', {
            data: productos,

        });
    } catch (error) {
        console.log(error);
    }

};

export async function getInicio(req, res) {
    res.render('principal')
};


/*
export async function getOneProject(req, res) {
    const { id } = req.params;
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        })
        res.json(project);
    } catch (error) {
        console.log(error);
    }
}

export async function updateProject(req, res) {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;
    try {
        const projects = await Project.findAll({
            atributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id
            }
        });
        if (projects.length > 0) {
            projects.forEach(async (project) => {
                await project.update({
                    // name: name ? name : project.name,
                    name,
                    priority,
                    description,
                    deliverydate
                });
            });
            return res.json({
                message: 'Project Updated',
                data: projects
            })
        }
    } catch (e) {
        res.json({
            message: 'Cannot update this Project.',
            data: {}
        })
    }
};

export async function deleteProject(req, res) {
    const { id } = req.params;
    try {
        await Task.destroy({
            where: {
                projectid: id
            }
        });
        const deleteRowsCount = await Project.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Project Deleted',
            count: deleteRowsCount
        })
    } catch (error) {
        res.json({
            message: 'Delete Failed.',
            data: {}
        });
    }
};*/