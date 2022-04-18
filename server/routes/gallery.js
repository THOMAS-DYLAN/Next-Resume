const router = require("express").Router();

const {getGallery, newEntry} = require("../controllers/gallery")

router.route("/").get(getGallery).post(newEntry);

module.exports = router
