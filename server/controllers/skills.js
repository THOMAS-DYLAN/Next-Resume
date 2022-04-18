const skillsModel = require("../models/skills");

const getSkills = (req, res) => {
  try{
  const body = req.body;

  const skills = skillsModel.find({body});
  res.status(200).send("Got Skills").json({skills})

  return;
  }catch(err){
    console.error(err);
    return;
  }
}

const addSkill = async (req, res) => {
  const { name, proficiency } = req.body;

  if (!name.length)
    return res.status(401).send("Text must be at least 1 character");

  try {
    const newSkill = {
      name,
      proficiency,
    };

    const createSkill = await new skillModel(newSKill).save();
    const skillCreated = await skillModel.findOne({newSkill}).populate("user");

    return res.status(200).json(skillCreated);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createPost");
  }
};

module.exports = {getSkills, addSkill}