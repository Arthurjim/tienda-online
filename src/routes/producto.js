import { Router } from 'express'
const router = Router();


// Controllers
import { getNuevoProducto, createProducto,getInicio,getTodosProd,getDelete} from '../controllers/producto.controller';

// Routes
router.post('/nuevoProducto', createProducto);
router.get('/nuevoProducto',getNuevoProducto);
router.get('/nuevoProducto/:id',getDelete);

router.post('/Productos',getTodosProd);
router.get('/Productos',getTodosProd);
router.get('/', getInicio);
/*router.get('/productos',getProducto)
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.get('/:id', getOneProject)
*/
export default router;