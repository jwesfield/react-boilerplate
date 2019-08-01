const app              = require('express');
const router           = app.Router();
const indexController  = require('../controllers/indexController');
const appName         = require('../../appName');

router.get(`/${appName}/health-check`, (req, res) => res.sendStatus(200));
router.get(`/${appName}/hello-world`, indexController.renderIndexFile);
router.get(`/${appName}/sunrise/:latitude/:longitude`, indexController.getSunrise);

module.exports = router;