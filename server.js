const express              = require('express');
const path                 = require('path');
const bodyParser           = require('body-parser');
const expressRoutes        = require('./server/routes/routes.js');
const app                  = express();
const server               = require('http').createServer(app);
const port                 = process.env.PORT || 8080;
const distDirectoryPath    = path.resolve(__dirname, 'dist');
const appName          = require('./appName');

function initExpress(app) {
  app.enable("trust proxy");
  app.set('views', __dirname);
  app.engine('html', require('ejs').renderFile);
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

  app.use('/' + appName, express.static(distDirectoryPath));
  app.use('/', expressRoutes);
}



server.listen(port, function () {
  initExpress(app);
  console.log('listening on port: ' + port);
});


