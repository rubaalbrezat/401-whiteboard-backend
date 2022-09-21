'use strict';


require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('../collections/user-comment-routes.js');
const post = require('./post.model');
const comment = require('./comment.model');

const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,

		}
	}
};

let sequelize = new Sequelize(POSTGRES_URL);

const postsModel = post(sequelize, DataTypes);
const commentModel = comment(sequelize, DataTypes);

postsModel.hasMany(commentModel, { foreignKey: 'commentId', sourceKey: 'id' });
commentModel.belongsTo(postsModel, { foreignKey: 'commentId', sourceKey: 'id' });

const postCollection = new Collection(postsModel);
let commentCollection = new Collection(commentModel)


module.exports = {
	db: sequelize,
	posts: postCollection,
	comment: commentCollection,
	CommentPost: commentModel,
	post: postsModel
}