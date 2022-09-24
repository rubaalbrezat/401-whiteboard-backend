'use strict';

function notFoundHandler(req,res) {

    res.status(404).send({
        code : 404,
        Message : `Not Route found`
    })
}



module.exports = {notFoundHandler};
// function handleNotFoundError(req, res) {
// 	res.status(404).send('error 404 not exist');
// }

// module.exports = { handleNotFoundError };