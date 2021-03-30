const Pet = require('../models/pet.model');   
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createPet = (request, response) => {
    const { name, type, description, skill1, skill2, skill3 } = request.body;
    Pet.create({
        name: name, 
        type: type,
        description: description, 
        skill1: skill1, 
        skill2: skill2, 
        skill3: skill3
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}
module.exports.getAllPet = (request, response) => {
    Pet.find({})
        .then(Pet => response.json(Pet))
        .catch(err => response.json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}
module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.likePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params._id},
        {$inc: {likes: 1}}
    )
        .then(() => response.json({likes}))
        .catch(err => response.json(err));
    }