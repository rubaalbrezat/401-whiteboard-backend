`use strict`;


function createCommentTable(dataBase, DataType) {

    return dataBase.define('comment', {

        text: { type: DataType.STRING, allowNull: false },
        textId: { type: DataType.INTEGER, allowNull: false },
        userId: { type: DataType.INTEGER, allowNull: false },

    });

}


module.exports = { createCommentTable };
// const Comment = (sequelize, DataTypes) => sequelize.define('Comment', {

// 	commentId: {
// 		type: DataTypes.INTEGER,
// 		allowNull: false
// 	},
// 	comment: {
// 		type: DataTypes.STRING,
// 		allowNull: false
// 	}


// });

// module.exports = Comment;