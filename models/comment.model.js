`use strict`;
const Comment = (sequelize, DataTypes) => sequelize.define('Comment', {

	CommentContent: {
		type: DataTypes.STRING, defaultValue: " ", allowNull: false
	},
	CommentId: {
		type: DataTypes.INTEGER, allowNull: false
	}


});

module.exports = Comment;