const galleryModel = require("../models/skills");

const getGallery = (req, res) => {
  try{
  const body = req.body;

  const entry = galleryModel.find({body});
  res.status(200).send("Got Skills").json({entry})

  return;
  }catch(err){
    console.error(err);
    return;
  }
}

const newEntry = async (req, res) => {
  const { name, proficiency } = req.body;

  if (!name.length)
    return res.status(401).send("Text must be at least 1 character");

  try {
    const newEntry = {
      name,
      proficiency,
    };

    const addEntry = await new galleryModel(newEntry).save();
    const entryAdded = await galleryModel.findOne({newEntry}).populate("newEntry");

    return res.status(200).json(entryAdded);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createPost");
  }
};

module.exports = {getGallery, newEntry}