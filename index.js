'use strict';


require('dotenv').config();
const { start } = require('./server');
const { dataBase } = require('./models/index');



dataBase.sync()
.then(()=>{start(process.env.PORT)})
.catch((err)=>{console.log(err)});

// 'use strict';
// require('dotenv').config();
// const server = require('./server');
// const { db } = require('./models/index')
// db.sync().then(() => server.start(process.env.PORT || 3000)).catch((err) => console.log(err));