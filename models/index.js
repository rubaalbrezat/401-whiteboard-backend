'use strict';

const { Sequelize, DataTypes } = require("sequelize");
const { createPostsTable } = require("./post.model");
const { createCommentTable } = require("./comment.model");
const { createUsersTable } = require("./users.model");
const { CrudOperations } = require("../collections/user-comment-routes");

require("dotenv").config();

const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false,
    },
  },
};

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected ");
  })
  .catch((err) => {
    console.log(err);
  });

const postsModel = createPostsTable(sequelize, DataTypes);
const posts = new CrudOperations(postsModel);

const commentModel = createCommentTable(sequelize, DataTypes);
const comments = new CrudOperations(commentModel);

const usersModel = createUsersTable(sequelize, DataTypes);

postsModel.hasMany(commentModel, { foreignKey: "textId", sourceKey: "id" });
commentModel.belongsTo(postsModel, { foreignKey: "textId", targetKey: "id" });

usersModel.hasMany(commentModel, { foreignKey: "userId", sourceKey: "id" });
commentModel.belongsTo(usersModel, { foreignKey: "userId", targetKey: "id" });


module.exports = {
  posts,
  comments,
  postsModel,
  usersModel,
  commentModel,
  dataBase: sequelize,
};
// require('dotenv').config();
// const { Sequelize, DataTypes } = require('sequelize');
// const Collection = require('../collections/user-comment-routes.js');
// const post = require('./post.model');
// const comment = require('./comment.model');
// const User = require('./user.model');

// const POSTGRES_URL = process.env.DATABASE_URL;



// let sequelizeOptions = {
// 	dialectOptions: {
// 		ssl: {
// 			require: true,
// 			rejectUnauthorized: false,

// 		}
// 	}
// };

// let sequelize = new Sequelize(POSTGRES_URL);

// sequelize.authenticate().then(() => {
// 	console.log('database is connected ');
// }).catch((err) => {
// 	console.log(err)

// });
// const postsModel = post(sequelize, DataTypes);
// const commentModel = comment(sequelize, DataTypes);
// const userModel = User(sequelize, DataTypes);

// postsModel.hasMany(commentModel, { foreignKey: 'commentId', sourceKey: 'id' });
// commentModel.belongsTo(postsModel, { foreignKey: 'commentId', sourceKey: 'id' });

// const postCollection = new Collection(postsModel);
// let commentCollection = new Collection(commentModel)


// module.exports = {
// 	db: sequelize,
// 	posts: postCollection,
// 	comment: commentCollection,
// 	CommentPost: commentModel,
// 	post: postsModel,
// 	userModel

// }