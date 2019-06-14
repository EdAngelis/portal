const router = require('express').Router();
const noticesCTRL = require('../controller/notices-controller')

router.post('/add', noticesCTRL.addNotice)
router.get('/', noticesCTRL.getNoticeList)
router.get('/find:pageName', noticesCTRL.getNotice) 
router.post('/addComent', noticesCTRL.addComent)
router.get('/coments:pageName', noticesCTRL.getComents)
router.post('/replic', noticesCTRL.addReplicComent)

module.exports = router;
