const router = require('express').Router();
const esmiucadoCTRL = require('./esmiucado-controles')

router.post('/add', esmiucadoCTRL.add )
router.get('/getEsmiu', esmiucadoCTRL.getEsmiu ) 
router.get('/eventList:pageName', esmiucadoCTRL.getEvents )
router.post('/eventList', esmiucadoCTRL.eventList )
router.post('/removeEvent', esmiucadoCTRL.removeEvent )


module.exports = router;