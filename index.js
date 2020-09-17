let express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const Greetings = require('./greetings');
let app = express();
const greet = Greeting();




app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function (req, res) {

  res.render('index', {
      name: Greetings.getName(),
      counter: Greetings.greetCount(),
      color: Greetings.greetUser()

  });
})


let PORT = process.env.PORT || 3012;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});

