'use strict'

const getPosts = async (req,res,next) => {
	try{
		if (req.user.capabilities.includes('read')){
			next();
		} else {
			res.status(403).send("You do not have capability to access");

		}
	}catch(e){
		console.log(e);
	}
}

const creatPost = async (req,res,next) => {
	try{
		if (req.user.capabilities.includes('create')){
			next();
		} else {
			res.status(403).send("You do not have capability to access");

		}
	}catch(e){
		console.log(e);
	}
}

const updatePosts = async (req,res,next) => {
	try{
		if (req.user.capabilities.includes('update')){
			next();
		} else {
			res.status(403).send("You do not have capability to update post");

		}
	}catch(e){
		console.log(e);
	}
}

const deletePosts = async (req,res,next) => {
	try{
		if (req.user.capabilities.includes('delete')){
			next();
		} else {
			res.status(403).send("You do not have capability to delete post");

		}
	}catch(e){
		console.log(e);
	}
}

module.exports = {
	getPosts,
	creatPost,
	updatePosts,
	deletePosts

}