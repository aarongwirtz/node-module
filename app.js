let express = require ('express');
let app = express();
let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');

sequelize.sync();
//sequelize.sync({force: true})

app.use('/journal', journal)

app.listen(3000, function (){
    console.log('App is listening on port 3000');
})
