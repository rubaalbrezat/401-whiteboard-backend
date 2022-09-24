'use strict'



'use strict';

class CrudOperations {

    constructor(model) {
        this.model = model;
    }

    async addOn(obj) {
        try {
            return await this.model.create(obj);
        } catch (e) {
            console.error('error in create operation for model:', this.model.name);
        }
    }

    async getFrom(id) {

        try {
            if (id) {
                return await this.model.findOne({ where: { id } })
            } else {
                return await this.model.findAll()
            }
        } catch (e) {
            console.error(`'error in get operation for model:', this.model.name`, this.model.name);
        }

    }

    async updateAt(obj,id) {
        try {
            return await this.model.update(obj, { where: { id } });
        } catch (e) {
            console.error('error in update operation for model:', this.model.name);
        }
    }

    async deleteFrom(id) {
        try {
            return await this.model.destroy({ where: { id } });
        } catch (e) {
            console.error('error in delete operation for model:', this.model.name);
        }
    }

}



module.exports = { CrudOperations };
// //CRUD Operations
// class userComment {

// 	constructor(model) {
// 		this.model = model;

// 	}

// 	async creat(obj) {
// 		try {
// 			// let newComment = await this.model.create(obj);
// 			// return newComment;
// 			return await this.model.create(obj);
// 		} catch (e) {
// 			console.error('error in create operation for model:', this.model.name);
// 		}

// 	}


// 	async read(id) {
// 		try {
// 			if (id) {
// 				return await this.model.fidOne({ where: { id: id } })
// 			} else {
// 				return await this.model.findAll();
// 			}
// 		} catch (e) {
// 			console.error('error in read operation for model:', this.model.name);
// 			console.log(error);

// 		}

// 	}

// 	async update(obj, id) {
// 		try {
// 			return this.model.update(obj, { where: { id } });
// 		} catch (e) {
// 			console.error('error in update operation for model:', this.model.name);

// 		}
// 	}

// 	async delete(id) {
// 		try {
// 			return await this.model.destroy({ where: { id: id } });

// 		} catch (e) {
// 			console.error('error in delete operation for model:', this.model.name);

// 		}
// 	}





// } module.exports = userComment;