'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const postsRouters = require('./routes/post.route');
const commentsRouters = require('./routes/comment.route');
const usersRouters = require('./routes/user.route');
const { errHandler } = require('./error-handlers/500');
const { notFoundHandler } = require('./error-handlers/404');


app.use(cors());
app.use(express.json());
app.use(commentsRouters);
app.use(usersRouters);
app.use(postsRouters);

function handleMain(req,res) {
    res.status(200).send('at the main page')
}
function start(port) {
    app.listen(port, () => console.log(`Server is up and running at ${port}`));
};

app.get('/',handleMain);



app.use(errHandler);
app.use('*',notFoundHandler);

module.exports = { start, app };


// const express = require('express');
// const cors = require('cors');
// const app = express();
// const { errorHandler } = require('./error-handlers/500')
// const { handleNotFoundError } = require('./error-handlers/404');
// const postRouter = require('./routes/post.route');
// const CommentRouter = require('./routes/comment.route');
// const router = require('./routes/user.routes');

// // built-in express middlewares / appllication level
// app.use(express.json());
// app.use(cors());
// app.use(postRouter);
// app.use(CommentRouter);
// app.use(router);



// // router middlewares
// app.get('/', handleHome);

// function handleHome(req, res) {
// 	res.status(200).send('Hello from the home page');
// }


// // server port
// function start(port) {
// 	app.listen(port, () => {
// 		console.log(`Up and running on port ${port}`)
// 	})
// };
// // error handlers

// app.use(errorHandler);
// app.get('*', handleNotFoundError);

// module.exports = { app, start }
