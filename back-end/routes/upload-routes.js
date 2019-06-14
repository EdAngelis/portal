const router = require('express').Router();
const uploadCTRL = require('../controller/uploads-controllers')

router.post('/notice', uploadCTRL.addNotice)
router.post('/addComent', uploadCTRL.addComent)
router.post('/replic', uploadCTRL.addReplicComent)
module.exports = router;