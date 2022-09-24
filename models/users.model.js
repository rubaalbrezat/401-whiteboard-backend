'user strict'


'use strict';

function createUsersTable(sequelize, dataTypes) {
    return (
        sequelize.define('users', {
            userName : {type:dataTypes.STRING,allowNull:false,unique:true},
            email : {type:dataTypes.STRING,allowNull:false,unique:true,isEmail:true},
            passWord : {type:dataTypes.STRING,allowNull:false},
            token : {type:dataTypes.VIRTUAL},
        })
    );
}



module.exports = {createUsersTable};
// const User =  (sequelize,DataTypes) => sequelize.define('user',{
// 		userName:{
// 			type : DataTypes.STRING,
// 			allowNull: false
// 		},
// 		email:{
// 			type: DataTypes.STRING,
// 			unique: true,
// 			allowNull: false
// 		},
// 		password: {
// 			type:DataTypes.STRING,
// 			allowNull: false
// 		}
// 	});
	

// module.exports = User;

