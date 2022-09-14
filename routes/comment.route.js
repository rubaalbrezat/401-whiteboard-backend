'use strict';

const express = require( 'express' );
const Comment = require('../models/comment.model');
const router = express.Router();

const  {userComment}  = require( '../models/index' );

// Routes
router.get( '/Comment', getAllcomments );
router.get( '/Comment/:id', getOnecomment );
router.post( '/Comment', addcomment );
router.put( '/Comment/:id', updatecomment );
router.delete( '/Comment/:id', deletecomment );

// Get all Comment method
async function getAllcomments (req, res){
    let Comments = await userComment.readComment();
    res.status(200).send(Comments);
}

// Get one Comment method
async function getOnecomment ( req, res ) {
    const id = req.params.id;
    const Comment = await userComment.readComment( {
        where: { id: id }
    } );
    res.status(200).json( post );
}


// Create Comment method
async function addcomment(req, res) {
    let newData = req.body;
    let newComment = await userComment.creat(newData);
    res.status(200).json(newComment);
}

// Update Comment method
async function updatecomment(req, res) {
    const id = req.params.id;
    const newData = req.body;
    const theComment = await userComment.readComment({where:{id:id}});  
    const updatedComment = await theComment.updateComment(newData);  
    res.status(201).json(updatedComment);
}
  
// Delete Comment method
async function deletecomment(req, res) {
    const id = req.params.id;
    let deletedComment = await userComment.deleteComment({
      where: {id:id}
    });
    res.status(204).json({deletedComment});
}

module.exports = router;