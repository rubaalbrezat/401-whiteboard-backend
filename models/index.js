'use strict';


 require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const post = require('./post.model');
const Comment = require('./comment.model')
const userComment = require('../collections/user-comment-routes.js')


const POSTGRES_URL = process.env.DATABASE_URL;

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

let sequelize = new Sequelize (POSTGRES_URL,sequelizeOption);

const postsModel = post(sequelize, DataTypes);
const posts = new userComment(postsModel);

const commentModel =Comment(sequelize,DataTypes);
const comments = new userComment(commentModel);



module.exports = {
  db: sequelize,   //used in index.js
  posts ,//used in routs
  comments
}