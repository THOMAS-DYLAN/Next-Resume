//* EXPRESS APP SETUP */
const express = require("express");
const { connectDB } = require("./server/util/connect");
// const cloudinary = require("cloudinary").v2;
// const fileUpload = require("express-fileupload");

require("dotenv").config();
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_KEY,
//   api_secret: process.env.CLOUD_SECRET,
// });

const app = express();
const PORT = process.env.PORT || 3000;

//* NEXT APP SETUP */
const next = require("next");
//!create a check for development vs production
const dev = process.env.NODE_ENV !== "production";
//! there are giant error warnings that pop us when in dev.
const nextApp = next({ dev });
//! this is a built in next router that will handle ALL requests made to the server
const handler = nextApp.getRequestHandler();

app.use(express.json());
// app.use(fileUpload({ useTempFiles: true }));

//*ROUTERS */
const skillsRoute = require("./server/routes/Skills");
const galleryRoute = require("./server/routes/gallery");

app.use("/api/v1/skills", skillsRoute);
app.use("/api/v1/gallery", galleryRoute);

connectDB();

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server listening @ ${PORT}`);
  });
});
