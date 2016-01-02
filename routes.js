
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('homepage.ejs');
  });

  app.get('/about', function(req, res) {
  	res.render('about.ejs'); 
  });

  // back to sign in page 
  app.get('/homepage', function(req, res) {
    res.render('homepage.ejs'); 
  });

};
