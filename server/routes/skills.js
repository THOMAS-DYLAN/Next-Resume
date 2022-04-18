const router = require("express").Router();

const {getSkills, addSkill} = require("../controllers/skills")

router.route("/").get(getSkills).post(addSkill);

module.exports = router