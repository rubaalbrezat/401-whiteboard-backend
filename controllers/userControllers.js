'use strict'


const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { usersModel } = require('../models/index');

async function signup(req, res) {
    try {
        const { username, email, password } = req.body;
        const hashedData = {
            userName: username,
            email: email,
            passWord: await bcrypt.hash(password, 10)
        }
        const user = await usersModel.create(hashedData);
        res.status(201).send(user);
    } catch (e) {
        console.log(e);
    }
}


async function login(req, res) {
    res.status(200).json(req.newUserWithToken);
}


async function getAllUsers(req, res) {
    try {
        const users = await usersModel.findAll();
        res.json(users);
    } catch (e) {
        console.log(e);
    }
}




module.exports = {
    signup,
    getAllUsers,
    login
}

// const bcrypt = require('bcrypt');
// const base64 = require('base-64')
// const { userModel } = require('../models');
// const { use } = require('../routes/post.route');

// const signup = async (req, res) => {
// 	try {
// 		const { userName, email, password } = req.body;
// 		const data = {
// 			userName,
// 			email,
// 			password: await bcrypt.hash(password, 10)

// 		};
// 		const user = userModel.create(data);
// 		if (user) {
// 			res.status(201).json(user)
// 		}
// 	} catch (e) {
// 		console.log(e)
// 	}
// }


// const login = async (req,res)=>{
// 	const basicHeader = req.headers.authorization.split(' ');
// 	const encodedValue = basicHeader.pop();
// 	const decodedValue = base64.decode(encodedValue);
//     const [email,password] = decodedValue.split(':');

// 	const user = await userModel.findOne({where:{
// 		email:email
// 	}});

// 	if(user){
// 		const isSame = await bcrypt.compare(password,user.password);

// 		if(isSame){
// 			return res.status(200).json(user)
// 		}else{
// 			return res.status(401).send('you are not authorized');

// 		}
// 	}
// }

// const allUser = async (req,res) => {
// 	const users = await userModel.findAll();
// 	res.json(users);
// }

// module.exports = {
// 	signup,
// 	allUser,
// 	login
// }