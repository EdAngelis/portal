const express = require('express');
const mongoose = require('mongoose');

const indexRoute = require('./routes/index-routes')
const noticeRoute = require('./routes/notices-routes')
const esmiucadoRoute = require('./esmiu-module/esmiucado-route')
const routesUser = require('./user-module/routes-user')
const uploadRoutes = require('./routes/upload-routes')

const app = express();

mongoose.connect('mongodb://DeAngelis84:Mlab4259@ds221095.mlab.com:21095/esmiucado', { useNewUrlParser: true });
app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/*app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});
*/

app.use('/user', routesUser);
app.use('/', indexRoute );
app.use('/notice', noticeRoute);
app.use('/esmiucado', esmiucadoRoute);
app.use('/upload', uploadRoutes);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

  