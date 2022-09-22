'user strict'

const User =  (sequelize,DataTypes) => sequelize.define('user',{
		userName:{
			type : DataTypes.STRING,
			allowNull: false
		},
		email:{
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		password: {
			type:DataTypes.STRING,
			allowNull: false
		}
	});
	

module.exports = User;

