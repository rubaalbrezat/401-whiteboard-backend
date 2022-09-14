'use strict'


//CRUD Operations
class userComment {

	constructor(model) {
		this.model = model;

	}

	async creat(obj) {
		try {
			return await this.model.creat(obj);
		} catch (e) {
			console.error('error in creation ', this.model.name);

		}
	}

	async readComment(id){
		try{
			if(id){
				return await this.model.findOne({where: {id:id}})
			}else{
				return await this.model.findAll();
	
			}
		} catch(e){
			console.error(' error in reading ',this.model.name);

		}
	}
       

	async updateComment(obj,id) {
        try {
            return await this.model.update(obj, { where: { id } });
        } catch (e) {
            console.error(`error in updating `, this.model.name);
        }
    }

    async deleteComment(id) {
        try {
            return await this.model.destroy({ where: { id } });
        } catch (e) {
            console.error(`error in deleting`, this.model.name);
        }
    }


}module.exports = userComment;