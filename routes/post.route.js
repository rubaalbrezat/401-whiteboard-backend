'use strict';

const express = require("express");
const { posts, postsModel, commentModel } = require("../models");
const { bearerAuth } = require("../middlewares/bearerAuth");
const router = express.Router();

router.post('/post', bearerAuth, addPost);
router.get('/post', bearerAuth, getAllPosts);
router.get('/post/:id', bearerAuth, gitOnePost);
router.put('/post/:id', bearerAuth, updatePost);
router.delete('/post/:id', bearerAuth, deletePost);

async function addPost(req, res) {
  res.status(201).send(await posts.addOn(req.body));
}
async function getAllPosts(req, res) {
  let allPostsWithCommnets = await postsModel.findAll({
    include: [commentModel],
  });
  res.status(200).send(allPostsWithCommnets);
}
async function gitOnePost(req, res) {
  res.status(200).send(await posts.getFrom(req.params.id));
}
async function updatePost(req, res) {
  res.status(202).send(await posts.updateAt(req.body, req.params.id));
}
async function deletePost(req, res) {
  await posts.deleteFrom(req.params.id);
  res.status(204).end();
}

module.exports = router;

// const express = require('express');
// const { posts, post } = require('../models');
// const router = express.Router();
// const { CommentPost } = require('../models/index');



// // Routes
// router.get('/post', getAllPost);
// // router.get( '/post/:id', getOnePost );
// router.post('/post', addPost);
// router.put('/post/:id', updatePost);
// router.delete('/post/:id', deletePost);
// router.get('/CommentPost', getCommentPost);

// // Get all || one posts method
// async function getAllPost(req, res) {
// 	let post = await posts.read();
// 	res.status(200).send(post)
// }

// // // Get one post method
// // async function getOnePost ( req, res ) {
// //     const id = req.params.id;
// //     const post = await Post.findOne( {
// //         where: { id: id }
// //     } );
// //     res.status(200).json( post );
// // }


// // Create post method
// async function addPost(req, res) {
// 	let newData = req.body;
// 	let newPost = await posts.creat(newData);
// 	res.status(200).json(newPost);
// }

// // Update post method
// async function updatePost(req, res) {
// 	const id = req.params.id;
// 	const newData = req.body;
// 	const thePost = await posts.update(newData, id);
// 	// const updatedPost = await thePost.update(newData);  
// 	res.status(201).json(thePost);
// }

// // Delete post method
// async function deletePost(req, res) {
// 	const id = req.params.id;
// 	let deletedPost = await posts.delete(id)
// 	res.status(204).json({ deletedPost });
// }

// async function getCommentPost(req, res) {
// 	let commentsPost = await post.findAll({ include: [CommentPost] })
// 	res.status(200).json(commentsPost);
// }

// module.exports = router;