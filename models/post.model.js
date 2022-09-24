'use strict';

const createPostsTable = (dataBase, DataType) => dataBase.define('posts', {

    title: { type: DataType.STRING, allowNull: false },
    content: { type: DataType.STRING },

});



module.exports = { createPostsTable };

// const Post = (sequelize, DataTypes) => sequelize.define('Post', {
//   postTitle: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
//   ,
//   postContent: {
//     type: DataTypes.STRING,
//   },
//   showContent: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: true
//   }
// })

// module.exports = Post;