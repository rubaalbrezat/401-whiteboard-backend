'use strict '

const { usersModel } = require('../models/index');

async function checkUser(req, res, next) {
    try {

        const username = await usersModel.findOne({ where: { userName: req.body.username } });

        if (username) {
            next(`Username is already taken`);
        } 

        const email = await usersModel.findOne({ where: { email: req.body.email } });

        if (email) {
            next(`Email is already taken`);
        }

        next();

    } catch (e) {
        console.log(e);
    }

}

module.exports = {
    checkUser
}

// const User = require('../models').userModel;

// const saveUser = async (req, res, next) => {
// 	try {
// 		const username = await User.findOne({
// 			where: {
// 				userName: req.body.userName
// 			}
// 		});

// 		if (username) {
// 			return res.status(409).send('username already taken')
// 		}

// 		const email = await User.findOne({
//      where:{
// 		email: req.body.email
// 	 }
// 		});
// 		if(email){
// 			return res.status(409).send('Email already taken')
// 		}
// 		next()
// 		}catch(e){
// 			console.log(e)
// 		 }
// 	}

// module.exports = {
// 	saveUser
// }