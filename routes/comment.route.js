'use strict';

const express = require('express');
const { comments, postsModel, commentModel, usersModel } = require('../models/index');
const router = express.Router();


router.post('/comment/:postId/:userID', addComment);
router.get('/comment', getAllComments);
router.get('/comment/:id', gitOneComment);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);

// async function addComment(req, res) {
//     const { postId, userID } = req.params;
//     const obj = {
//         text: req.body.text,
//         textId: postId,
//         userId: userID
//     }
//     await commentModel.create(obj);
//     let commentsForId = await commentModel.findAll({ where: { textId: postId } })
//     res.status(201).send(commentsForId);
// };


async function addComment(req, res) {
    const { postId, userID } = req.params;
    const obj = {
        text: req.body.text,
        textId: postId,
        userId: userID
    }
    await commentModel.create(obj);
    let commentsForId = await commentModel.findAll({ where: { textId: postId }, include: [usersModel] })
    res.status(201).send(commentsForId);
};

async function getAllComments(req, res) {
    res.status(200).send(await comments.getFrom());
};
async function gitOneComment(req, res) {
    res.status(200).send(await comments.getFrom(req.params.id));
};
async function updateComment(req, res) {
    res.status(202).send(await comments.updateAt(req.body, req.params.id));
};
async function deleteComment(req, res) {
    await comments.deleteFrom(req.params.id)
    res.status(204).end();
};


module.exports = router;

// const express = require('express');
// const { comment } = require('../models');

// const router = express.Router();



// // Routes
// router.get('/Comment', getComment);
// router.post('/Comment', createComment);
// // router.get('/people/:id',getOnePerson);
// router.put('/Comment/:id', ubdateComment);
// router.delete('/Comment/:id', deleteComment);
// // router.get('/CommentPost',getCommentPost);


// // Get all Comment method
// async function getComment(req, res) {
// 	let comments = await comment.read();
// 	res.status(200).json(comments);

// }

// async function createComment(req, res) {
// 	let newcomment = req.body;
// 	let comments = await comment.creat(newcomment);
// 	res.status(201).json(comments);
// }

// // async function getOnePerson(req,res){
// // 	let id = parseInt(req.params.id);
// // 	let person = await People.findOne({where:{id:id}})
// // 	res.json(person);
// // }

// async function ubdateComment(req, res) {
// 	let id = parseInt(req.params.id);
// 	let newcomment = req.body;
// 	let comments = await comment.update(newcomment, id);
// 	// let updatePerson = await person.update(newperson);
// 	res.status(201).json(comments);
// }

// async function deleteComment(req, res) {
// 	let id = parseInt(req.params.id);
// 	let deletecomment = await comment.delete(id);
// 	res.status(204).json({ deletecomment });
// }



// module.exports = router;