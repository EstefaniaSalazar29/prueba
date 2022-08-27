const {Router} = require('express');
const router = Router();

const {getEmpleado, postEmpleado, putEmpleado, deleteEmpleado} = require('../controllers/empleado')

router.get('/getEmpleado', getEmpleado)
router.post('/postEmpleado', postEmpleado)
router.put('/putEmpleado/:codigo', putEmpleado)
router.delete('/deleteEmpleado/:codigo', deleteEmpleado)

module.exports = router;