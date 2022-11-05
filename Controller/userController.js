const userModal = require("../Model/userModel.js");

const createUser = async (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password){
        res.status(400).send("Please fill all the fields");
    }
    const user = new userModal({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        password: req.body.password,
        portfolio: [],
        createdSmallCases: [],
    });
    const newUser = await user.save();
    res.send(newUser);
}


const getUser = async (req, res) => {
    if(!req.body.email || !req.body.password){
        res.status(400).send("Please fill all the fields");
    }
    const user = await userModal.findById(req.body.email);
    if(!user){
        res.status(400).send("User not found");
    }
    if(user.password !== req.body.password){
        res.status(400).send("Invalid Password");
    }
    return res.send(user);
}

module.exports = {
    createUser,
    getUser
}