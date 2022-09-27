'user strict'

const { DataTypes } = require("sequelize");

function createUsersTable(sequelize, dataTypes) {
    return (
        sequelize.define('users', {
            userName : {type:dataTypes.STRING,allowNull:false,unique:true},
            email : {type:dataTypes.STRING,allowNull:false,unique:true,isEmail:true},
            passWord : {type:dataTypes.STRING,allowNull:false},
            token : {type:dataTypes.VIRTUAL},
			role :{
				type : DataTypes.ENUM('admin','user'),
				allowNull : false,
				defaultValue :'user'
			},
			capabilities:{
				type: DataTypes.VIRTUAL,
				get:function(){
					const acl={
						admin :['read','create','delete','update'],
						user:['read','create']
					}
					return acl[this.role]
				}
			}
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

