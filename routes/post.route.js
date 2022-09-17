'use strict';

const express = require( 'express' );
const { posts } = require('../models');
const router = express.Router();



// Routes
router.get( '/post', getAllPost );
// router.get( '/post/:id', getOnePost );
router.post( '/post', addPost );
router.put( '/post/:id', updatePost );
router.delete( '/post/:id', deletePost );

// Get all || one posts method
async function getAllPost (req, res){
    let post = await posts.read();
    res.status(200).send(post)
}

// // Get one post method
// async function getOnePost ( req, res ) {
//     const id = req.params.id;
//     const post = await Post.findOne( {
//         where: { id: id }
//     } );
//     res.status(200).json( post );
// }


// Create post method
async function addPost(req, res) {
    let newData = req.body;
    let newPost = await posts.creat(newData);
    res.status(200).json(newPost);
}

// Update post method
async function updatePost(req, res) {
    const id = req.params.id;
    const newData = req.body;
    const thePost = await posts.update(newData,id);  
    // const updatedPost = await thePost.update(newData);  
    res.status(201).json(thePost);
}
  
// Delete post method
async function deletePost(req, res) {
    const id = req.params.id;
    let deletedPost = await posts.delete(id)
    res.status(204).json({deletedPost});
}

module.exports = router;