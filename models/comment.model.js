`use strict`;
const Comment = (sequelize, DataTypes) => sequelize.define('Comment', {

	commentId: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	comment: {
		type: DataTypes.STRING,
		allowNull: false
	}


});

module.exports = Comment;