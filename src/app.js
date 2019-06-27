import express, { json } from 'express'
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const app = express();

// Import routes
import productoRoutes from './routes/producto';
//settings

app.set('views', path.resolve(__dirname,'views'));
app.set('view engine','ejs');
//middlewares
app.use(express.json());

app.use(express.urlencoded({extended:false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/upload'),
    filename:(req,file,cb)=>{
        cb(null,new Date().getTime() +path.extname(file.originalname).toLocaleLowerCase());
    }
});


app.use(multer({
    storage: storage,
    dest : path.join(__dirname,'public/upload'),
    fileFilter:(req,file,cb)=>{
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype =filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: Archivo con extencion no valida");
    }
 
}).single('image'));
 
// Routes
app.use('/', productoRoutes);

app.use(express.static(path.join(__dirname, '/public')));
export default app;