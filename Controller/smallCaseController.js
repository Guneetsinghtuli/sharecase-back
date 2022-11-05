const smallCaseModal = require("../Model/smallCaseModel.js");
const userModel = require("../Model/userModel");

const smallcaseController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).send("Invalid ID");
    }
    const smallcase = await smallCaseModal.findById(id);
    if (!smallcase) {
      res.status(400).send("Invalid ID");
    }
    res.send({ smallcase });
  } catch (error) {
    res.status(400).send("Invalid ID");
  }
};

const createSmallcase = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.description ||
      !req.body.image ||
      !req.body.stocks
    ) {
      res.status(400).send("Invalid Data");
    }
    const user = userModel.findOne({email: req.body.email});
    if(!user){
        res.status(400).send("Invalid User");
    }
    const smallcase = new smallCaseModal({
      name: req.body.name,
      description: req.body.description,
    //   image: req.body.image,
      stocks: req.body.stocks,
      createdOn: new Date(),
      updatedOn: new Date(),
      createdBy: user._id,
    });
    const savedSmallcase = await smallcase.save();
    res.send({ savedSmallcase });
  } catch (error) {
    res.status(400).send("Invalid ID");
  }
};

const updateVote = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
        res.status(400).send("Invalid ID");
        }
        const smallcase = await smallCaseModal.findById(id);
        if (!smallcase) {
        res.status(400).send("Invalid ID");
        }
        if (req.body.upVote) {
        smallcase.upVotes += 1;
        } else {
        smallcase.downVotes += 1;
        }
        const updatedSmallcase = await smallcase.save();
        res.send({ updatedSmallcase });
    } catch (error) {
        res.status(400).send("Invalid ID");
    }
}


module.exports = {
  smallcaseController,
  createSmallcase,
  updateVote,
};
